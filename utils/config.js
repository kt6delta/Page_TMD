import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require('dotenv');
dotenv.config();

const HOST = process.env.HOST
const DB_USER = process.env.DB_USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE
const PORT = process.env.PORT

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

const SECRET_KEY = process.env.SECRET_KEY
const MAIL_SERVER = process.env.MAIL_SERVER
const MAIL_PORT = process.env.MAIL_PORT
const MAIL_USE_TLS = process.env.MAIL_USE_TLS
const MAIL_USERNAME = process.env.MAIL_USERNAME
const MAIL_PASSWORD = process.env.MAIL_PASSWORD

const BACKEND_URL= process.env.BACKEND_URL
const BACK_URL_REMOTO=process.env.BACK_URL_REMOTO
const POSTMARK_API_KEY= process.env.POSTMARK_API_KEY
export default {
    HOST,
    DB_USER,
    PASSWORD,
    DATABASE,
    PORT,

    ACCESS_TOKEN_SECRET,
    
    SECRET_KEY,
    MAIL_SERVER,
    MAIL_PORT,
    MAIL_USE_TLS,
    MAIL_USERNAME,
    MAIL_PASSWORD,

    BACKEND_URL,
    BACK_URL_REMOTO,
    POSTMARK_API_KEY
}