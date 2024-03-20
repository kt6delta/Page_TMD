//importacion libreria
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//constantes
const products = express.Router();
import express from "express";
  
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "./Product.js";
  
// init express router
  

products.get('/:id', showProductById);
products.post('/', createProduct);
products.put('/:id', updateProduct);
products.delete('/:id', deleteProduct);
  
// export default router
export default products;