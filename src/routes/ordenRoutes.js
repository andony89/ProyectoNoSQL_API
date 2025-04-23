const express = require('express');
const router = express.Router();
const OrdenController = require('../controllers/ordenController');

router.get('/pendientes', OrdenController.getOrdenesPendientes);

router.post('/', OrdenController.createOrden);

router.get('/', OrdenController.getAllOrdenes);

router.get('/usuario/:userId', OrdenController.getOrdenesPorUsuario);

router.get('/:id', OrdenController.getOrden);

router.put('/:id', OrdenController.updateOrden);

router.delete('/:id', OrdenController.deleteOrden);

module.exports = router;
