import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require('dotenv');
dotenv.config();

const HOST = process.env.HOST
const DB_USER = process.env.DB_USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE
const PORT = process.env.PORT

export default {
    HOST,
    DB_USER,
    PASSWORD,
    DATABASE,
    PORT
}