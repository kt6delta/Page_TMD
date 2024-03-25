//archivos externos
import mail from '../utils/mail.js';
import express from 'express';
//constantes
const contactenos = express.Router();

//Se reciben los mensajes con postmark
contactenos.post('/', async (req, res) => {
   mail.sendEmailContactenos(req.body.email,req.body.name);
   return res.send('Mensaje enviado');
   //autoenviarse correos
   //req.body.phone
   //req.body.typeService
   //req.body.message
})
export default contactenos