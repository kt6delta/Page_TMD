// import connection
// import products from "../controllers/CallProduct.js";
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

export default products
//
// export const getProducts = async (result) => {
//     let db;
//     db = await conexion.abrirConexion()
//     result = await new Promise((resolve, reject) => {
//     db.query("SELECT * FROM product", (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// });
//     await conexion.cerrarConexion(db)

// }
  
// // Get Single Product
// export const getProductById = async (id, result) => {
//     let db;
//     db = await conexion.abrirConexion()
//     db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results[0]);
//         }
//     });   
// }
  
// // Insert Product to Database
// export const insertProduct = async (data, result) => {
//     let db;
//     db = await conexion.abrirConexion()
//     db.query("INSERT INTO product SET ?", [data], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }
  
// // Update Product to Database
// export const updateProductById = async (data, id, result) => {
//     let db;
//     db = await conexion.abrirConexion()
//     db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }
  
// // Delete Product to Database
// export const deleteProductById = async (id, result) => {
//     let db;
//     db = await conexion.abrirConexion()
//     db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }

