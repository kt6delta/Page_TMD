import { createRequire } from 'module';
import funtions from '../utils/funtions.js';
const require = createRequire(import.meta.url);
const bcrypt = require('bcryptjs');

//constantes
import express from 'express';
import conexion from "../utils/conexion.js";
const login = express.Router();

//autenticate user por correo y contraseña
login.get('/auth/:token', async (req, res) => {
    let username;
    try {
        username = await funtions.ValidateToken(req.params.token);
    } catch (err) {
        return res.send(err.message);
    }
    if(NotRepit(username)){
        return res.send('Ya habias verificado el correo!!');
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
//Si ya se verifico antes
async function NotRepit(username) {
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
    if (result[0].is_verified === 1) {
        return true; 
    } else {
        return false;
    }

}

//actuaizar el valor de last_login
async function updateLastLogin(username) {
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        await new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET last_login=CURRENT_TIMESTAMP WHERE username = ?`,[username], (err, results) => {
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
        await conexion.cerrarConexion(connection);
        console.log('Last login actualizado');
    }
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
        console.log('Admin logueado');
        updateLastLogin(username);
        return {token: funtions.generateAccessToken(username), admin: true}; 
    }
    if (user.is_admin === 0 ) {
        console.log('Usuario logueado');
        updateLastLogin(username);
        return {token: funtions.generateAccessToken(username), admin: false};
    }
}

//se logean los usuarios
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