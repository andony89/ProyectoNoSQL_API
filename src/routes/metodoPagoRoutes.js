const express = require('express');
const router = express.Router();
const MetodoPagoController = require('../controllers/metodoPagoController');


router.post('/', MetodoPagoController.createMetodoPago);

router.get('/', MetodoPagoController.getAllMetodosPago);

router.get('/:id', MetodoPagoController.getMetodoPago);

router.get('/usuario/:userId', MetodoPagoController.getMetodosPagoPorUsuario);

router.put('/:id', MetodoPagoController.updateMetodoPago);

router.delete('/:id', MetodoPagoController.deleteMetodoPago);

module.exports = router;

