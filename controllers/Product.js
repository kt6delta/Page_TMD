import conexion from "../utils/conexion.js";
import express from 'express';

const products = express.Router();

// Get All Products
products.get('/', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM product`, (err, results) => {
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
                return res.send('No hay respuesta')
            } else {
                return res.send(result)
            }
        }
    }
})

// Get Single Product 
products.get('/:id', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM product WHERE product_id = ?`, [req.params.id], (err, results) => {
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

// // Insert Product to Database
products.post('/', async (req, res) => {
    let result;
    let connection;
    let responseSent = false;
    try {
        console.log(req.body.product_name)
        connection = await conexion.abrirConexion()
        result = await new Promise((resolve, reject) => {
            connection.query("INSERT INTO product (product_name, product_price) VALUES (?, ?)", [req.body.product_name,req.body.product_price], (err, results) => {
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
                return res.send('No hay respuesta')
            } else {
                return res.send(result)
            }
        }
    }
})

// // Update Product to Database
products.put('/:id', async (req, res) => {
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        await new Promise((resolve, reject) => {
            connection.query(`UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?`, [req.body.product_name, req.body.product_price, req.params.id], (err, results) => {
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
            return res.send('Producto actualizado')
        }
    }
});

// Delete Product to Database
products.delete('/:id', async (req, res) => {
    let connection;
    let responseSent = false;
    try {
        connection = await conexion.abrirConexion()
        await new Promise((resolve, reject) => {
            connection.query(`DELETE FROM product WHERE product_id = ?`, [req.params.id], (err, results) => {
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
            return res.send('Producto eliminado')
        }
    }
});

export default products;