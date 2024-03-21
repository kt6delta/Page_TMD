//archivos externos
import mail from '../utils/mail.js';
import conexion from "../utils/conexion.js";
import funtions from '../utils/funtions.js';
import express from 'express';
//constantes
const contactenos = express.Router();

//Se reciben los mensajes con postmark
contactenos.post('/', async (req, res) => {

   //mail.sendEmailContactenos(email,username)
})
export default contactenos