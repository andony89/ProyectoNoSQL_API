const express = require('express');
const router = express.Router();
const OfertaController = require('../controllers/ofertaController');

router.get('/proximas-a-vencer', OfertaController.getOfertasPorVencer);

router.post('/', OfertaController.createOferta);

router.get('/', OfertaController.getAllOfertas);

router.get('/:id', OfertaController.getOferta);

router.put('/:id', OfertaController.updateOferta);

router.delete('/:id', OfertaController.deleteOferta);

module.exports = router;

