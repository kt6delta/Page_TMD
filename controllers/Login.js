import { createRequire } from 'module';
const require = createRequire(import.meta.url);
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
            connection.query(`UPDATE user SET is_verified=? , is_active=? WHERE username = ?`, [1, 1, username], (err, results) => {
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
            return res.send('Correo verificado!!')
        }
    }
})

async function ValidateToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log('Token invalid');
                reject(new Error('Token invalid'));
            }
            resolve(user.username);
        })
    });
}

export default login