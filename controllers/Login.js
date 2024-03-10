//constantes
import express from 'express';
const login = express.Router();

//obterner personas (todos)
login.get('/', async (req, res) => {
    res.send('Hello World!')
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.send('no hay token')
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.send('token invalido')
        req.user = user
        next()
    })
}

export default login