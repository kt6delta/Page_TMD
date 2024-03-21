//declaraciones
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import personaRouter from './controllers/Personas.js';
import login from './controllers/Login.js';
import registro from './controllers/Registro.js';
import recuperar from './controllers/Recuperar.js';
import products from './controllers/Product.js';
import contactenos from './controllers/Contactenos.js'

const app = express();

//Uso declaraciones
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json());

// Definimos las rutas base de la API
app.use('/personas', personaRouter)
app.use('/login', login)
app.use('/registro', registro)
app.use('/recuperar', recuperar)
app.use('/products', products);
app.use('/contactenos',contactenos);
//habilitamos para  usar en  otros archivos
export default app;