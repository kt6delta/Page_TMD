//declaraciones
import express from 'express';
import cors from 'cors';
import personaRouter from './controllers/Personas.js';
const app = express();

//Uso declaraciones
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Definimos las rutas base de la API
app.use('/api/personas', personaRouter)

//habilitamos para  usar en  otros archivos
export default app;