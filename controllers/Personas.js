//importacion libreria
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const bcrypt = require('bcryptjs');

//archivos externos
import conexion from "../utils/conexion.js";
import funtions from '../utils/funtions.js';
import express from 'express';
//constantes
const personaRouter = express.Router();
const saltRounds = 10;

//obterner personas (todos)
personaRouter.get('/', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user`, (err, results) => {
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
            if (result && result.length == 0) {
                return res.send('no hay respuesta')
            } else {
                return res.send(result)
            }
        }
    }
})

//obtener persona por id
personaRouter.get('/:id', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user WHERE id_user = ?`, [req.params.id], (err, results) => {
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
            if (result && result.length == 0) {
                return res.send('no hay respuesta')
            } else {
                return res.send(result)
            }
        }
    }
})

//obtener persona por username
personaRouter.get('/:username', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user WHERE username = ?`, [req.params.username], (err, results) => {
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
            if (result && result.length == 0) {
                return res.send('no hay respuesta')
            } else {
                return res.send(result)
            }
        }
    }
})

//obtener persona por email
personaRouter.get('/:email', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user WHERE email = ?`, [req.params.email], (err, results) => {
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
            if (result && result.length == 0) {
                return res.send('no hay respuesta')
            } else {
                return res.send(result)
            }
        }
    }
})

//crear admins LIKE ADMIN
personaRouter.post('/', async (req, res) => {
    let connection;
    let responseSent = false;
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
        const accessToken = funtions.generateAccessToken(req.body.username);
        const encryPassword = await bcrypt.hash(req.body.password, saltRounds);
        connection = await conexion.abrirConexion();
        await new Promise((resolve, reject) => {
            connection.query(`INSERT INTO user (username, email, password, verification_code,is_active, is_admin) VALUES (?, ?, ?, ?,?,?)`, [req.body.username, req.body.email, encryPassword, accessToken, '1', req.body.admin], (err, results) => {
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
            return res.send('Persona creada')
        }
    }
})

//actualizar persona
personaRouter.put('/:username', async (req, res) => {
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        await new Promise((resolve, reject) => {
            connection.query(`UPDATE user SET email = ?, password = ?, verification_code = ? WHERE username = ?`, [req.body.email, req.body.password, req.body.verification_code, req.body.username], (err, results) => {
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
            return res.send('Persona actualizada')
        }
    }
})

//eliminar persona
personaRouter.delete('/:username', async (req, res) => {
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        await new Promise((resolve, reject) => {
            connection.query(`DELETE FROM user WHERE username = ?`, [req.params.username], (err, results) => {
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
            return res.send('Persona eliminada')
        }
    }
})
export default personaRouter