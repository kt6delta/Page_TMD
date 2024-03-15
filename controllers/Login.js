import { createRequire } from 'module';
import config from '../utils/config.js';
const require = createRequire(import.meta.url);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//constantes
import express from 'express';
import conexion from "../utils/conexion.js";
const login = express.Router();

//autenticate user por correo y contraseña
login.get('/auth/:token', async (req, res) => {
    let username;
    try {
        username = await ValidateToken(req.params.token);
    } catch (err) {
        return res.send(err.message);
    }
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        await new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET verification_code=?, is_verified=? , is_active=? WHERE username = ?`,[null,1, 1, username], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    } catch (err) {
        responseSent = true;
        return res.send(err.message);
    } finally {
        await conexion.cerrarConexion(connection)
        if (!responseSent) {
            console.log('Correo verificado!!');
            return res.send('Correo verificado!! Puede cerrar la ventana')
        }
    }
})

async function ValidateToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log('Token invalido');
                reject(new Error('Token invalido'));
            }
            resolve(user.username);
        })
    });
}

const authenticateUser = async (username, password) => {
    const connection = await conexion.abrirConexion();
    const result = await new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE username = ?`, [username], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    await conexion.cerrarConexion(connection);
    if (result.length === 0) {
        throw new Error('Usuario incorrecto');
    }
    const user = result[0];
    if (user.is_active === 0) {
        throw new Error('Usuario inactivo');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error('Contraseña incorrecta');
    }
    if (user.is_admin === 1) {
        return "Admin logueado";
    }
    if (user.is_admin === 0 ) {
        return "Usuario logueado";
    }
}

login.post('/', async (req, res) => {
    try {
        const message = await authenticateUser(req.body.username, req.body.password);
        res.send(message);
    } catch (err) {
        console.error(err);
        res.status(401).send('Credenciales incorrectas');
    }
});
export default login