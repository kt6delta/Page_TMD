//constantes
import express from 'express';
const temp = express.Router();

//obterner personas (todos)
temp.get('/', async (req, res) => {
    res.send('Hello World!')
})

export default temp