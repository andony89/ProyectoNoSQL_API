const express = require('express');
const router = express.Router();
const MetodoPagoController = require('../controllers/metodoPagoController');

router.post('/metodos_pago', MetodoPagoController.createMetodoPago);
router.get('/metodos_pago/:id', MetodoPagoController.getMetodoPago);
router.put('/metodos_pago/:id', MetodoPagoController.updateMetodoPago);
router.delete('/metodos_pago/:id', MetodoPagoController.deleteMetodoPago);

module.exports = router;
