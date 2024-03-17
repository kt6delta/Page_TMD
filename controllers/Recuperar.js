import { createRequire } from 'module';
import funtions from '../utils/funtions.js';
import mail from '../utils/mail.js';
const require = createRequire(import.meta.url);
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//constantes
import express from 'express';
import conexion from "../utils/conexion.js";
const recuperar = express.Router();

//redirecciona a la paguina de actualizacion de contraseña
recuperar.get('/:token', async (req, res) => {
    try {
        const username = await funtions.ValidateToken(req.params.token);
        if(username) { 
            return res.redirect('https://tecnimontacargasdual.net/recuperar/' + username);
        }
        return res.status(400).send('Token inválido');
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

//cambia la contraseña de valor
recuperar.post('/:username', async (req, res) => {
    let connection;
    let responseSent = false;
    try {
        // Validación de entrada
        if (!req.params.username || !req.body.password) {
            throw new Error('Faltan datos requeridos');
        }
        const encryPassword = await bcrypt.hash(req.body.password, saltRounds);
        connection = await conexion.abrirConexion();
        await new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET password = ? WHERE username = ?`, [encryPassword, req.params.username], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

    } catch (err) {
        console.error(err);
        responseSent = true;
        return res.send('Hubo un error al cambiar contraseña');
    } finally {
        await conexion.cerrarConexion(connection)
        if (!responseSent) {
            return res.send('Contraseña cambiada exitosamente');
        }
    }
});

//Envia Codigo de recuperacion
recuperar.post('/', async (req, res) => {
    const connection = await conexion.abrirConexion();
    const result = await new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE email = ?`, [req.body.email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    await conexion.cerrarConexion(connection);
    if (result.length === 0) {
        return res.send('Correo incorrecto');
    }
    const user = result[0];
    if (user.is_active === 0) {
        return res.send('Usuario inactivo');
    }
    const token = funtions.generateAccessToken(user.username);
    mail.sendEmailRecuperar(user.email, user.username, token);
    return res.send('Codigo enviado al correo');
});

export default recuperar;