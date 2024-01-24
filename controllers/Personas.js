//constantes
import conexion from "../utils/conexion.js";
import express from 'express';
const personaRouter = express.Router();

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
export default personaRouter