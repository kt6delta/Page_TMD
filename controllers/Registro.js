//importacion libreria
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const bcrypt = require('bcryptjs');

//archivos externos
import mail from '../utils/mail.js';
import conexion from "../utils/conexion.js";
import funtions from '../utils/funtions.js';
import express from 'express';
//constantes
const registro = express.Router();
const saltRounds = 10;


//crear persona
registro.post('/', async (req, res) => {
    let connection;
    let responseSent = false;
    let accessToken;
    try {
        // Validación de entrada
        if (!req.body.username || !req.body.email || !req.body.password) {
            throw new Error('Faltan datos requeridos');
        }

        // Verificación de unicidad
        const uniqueUser = await funtions.VerificationUniqueUser(req.body.username);
        const uniqueMail = await funtions.VerificationUniqueMail(req.body.email);

        if (!uniqueUser) {
            responseSent = true;
            return res.send('El usuario ya está en uso');
        }

        if (!uniqueMail) {
            responseSent = true;
            return res.send('El correo ya está en uso');
        }

        // Creación de usuario
        accessToken = funtions.generateAccessToken(req.body.username);
        const encryPassword = await bcrypt.hash(req.body.password, saltRounds);
        connection = await conexion.abrirConexion();
        await new Promise((resolve, reject) => {
            connection.query(`INSERT INTO user (username, email, password, verification_code) VALUES (?, ?, ?, ?)`, [req.body.username, req.body.email, encryPassword, accessToken], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

    } catch (err) {
        console.error(err); // Registro de errores
        responseSent = true;
        return res.send('Hubo un error al crear el usuario');
    } finally {
        await conexion.cerrarConexion(connection)
        if (!responseSent) {
            mail.sendEmail(req.body.email, req.body.username, accessToken);
            return res.send('Persona creada')
        }
    }
})

//Unique username
registro.get('/user/:user', async (req, res) => {
    funtions.VerificationUniqueUser(req.params.user).then((result) => {
        return res.send(result);
    })
})

registro.get('/mail/:email', async (req, res) => {
    funtions.VerificationUniqueMail(req.params.email).then((result) => {
        return res.send(result);
    })
})

export default registro