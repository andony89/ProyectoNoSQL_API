const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productoController');

router.post('/', ProductoController.createProducto);

router.get('/', ProductoController.getAllProductos);

router.get('/:id', ProductoController.getProducto);

router.put('/:id', ProductoController.updateProducto);

router.delete('/:id', ProductoController.deleteProducto);

module.exports = router;
