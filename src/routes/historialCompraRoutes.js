const express = require('express');
const router = express.Router();
const HistorialCompraController = require('../controllers/historialCompraController');

router.post('/historial_compras', HistorialCompraController.createHistorialCompra);
router.get('/historial_compras/:id', HistorialCompraController.getHistorialCompra);
router.put('/historial_compras/:id', HistorialCompraController.updateHistorialCompra);
router.delete('/historial_compras/:id', HistorialCompraController.deleteHistorialCompra);

module.exports = router;
