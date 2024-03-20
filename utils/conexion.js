import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mysql = require('mysql');
import config from './config.js';

const abrirConexion = async () => {
    try {
        const connection = mysql.createConnection({
            host: config.HOST,
            user: config.DB_USER,
            password: config.PASSWORD,
            database: config.DATABASE,
        });
        console.log('Conectado a la base');
        return connection;
    } catch (err) {
        console.error(err.message);
    }
}

const cerrarConexion = async (connection) => {
    if (connection) {
        try {
            // Always close connections
            await connection.end();
            console.log('Se ha cerrado la conexión');
        } catch (err) {
            console.error(err.message);
        }
    }
}

export default {
    abrirConexion,
    cerrarConexion
}