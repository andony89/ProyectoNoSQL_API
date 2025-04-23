const express = require('express');
const router = express.Router();
const HistorialCompraController = require('../controllers/historialCompraController');

router.post('/', HistorialCompraController.createHistorialCompra);
router.get('/:id', HistorialCompraController.getHistorialCompra);
router.put('/:id', HistorialCompraController.updateHistorialCompra);
router.delete('/:id', HistorialCompraController.deleteHistorialCompra);
router.get('/', HistorialCompraController.getAllHistorialCompras);
router.get('/usuario/:usuarioId', HistorialCompraController.getHistorialPorUsuario);
router.get('/multiples/ordenes', HistorialCompraController.getHistorialesConMultiplesOrdenes);

module.exports = router;
