const express = require('express');
const router = express.Router();
const CarritoController = require('../controllers/carritoController');

router.post('/carritos', CarritoController.createCarrito);
router.get('/carritos/:id', CarritoController.getCarrito);
router.put('/carritos/:id', CarritoController.updateCarrito);
router.delete('/carritos/:id', CarritoController.deleteCarrito);

module.exports = router;
