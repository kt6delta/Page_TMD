import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const jwt = require('jsonwebtoken');

import config from '../utils/config.js';
import conexion from "../utils/conexion.js";

function generateAccessToken(username) {
    return jwt.sign({ username: username }, config.ACCESS_TOKEN_SECRET, { expiresIn: '60m' })
}

function VerificationUniqueUser(username) {
    let connection;
    return new Promise(async (resolve, reject) => {
        try {
            connection = await conexion.abrirConexion()
            connection.query(`SELECT * FROM user WHERE username = ?`, [username], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    if (results.length > 0) {
                        resolve(false) //exits username
                    } else {
                        resolve(true)
                    }
                }
            });
        } catch (err) {
            reject(err)
        } finally {
            if (connection) {
                conexion.cerrarConexion(connection).catch(error => {
                    console.error(`Error al cerrar la conexión: ${error}`);
                });
            }
        }
    })
}

function VerificationUniqueMail(email) {
    let connection;
    return new Promise(async (resolve, reject) => {
        try {
            connection = await conexion.abrirConexion()
            connection.query(`SELECT * FROM user WHERE email = ?`, [email], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    if (results.length > 0) {
                        resolve(false) //exite email
                    } else {
                        resolve(true)
                    }
                }
            });
        } catch (err) {
            reject(err)
        } finally {
            if (connection) {
                conexion.cerrarConexion(connection).catch(error => {
                    console.error(`Error al cerrar la conexión: ${error}`);
                });
            }
        }
    })
}

export default {
    VerificationUniqueUser,
    VerificationUniqueMail,
    generateAccessToken
}