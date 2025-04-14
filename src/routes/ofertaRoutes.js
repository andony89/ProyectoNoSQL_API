const express = require('express');
const router = express.Router();
const OfertaController = require('../controllers/ofertaController');

router.post('/ofertas', OfertaController.createOferta);
router.get('/ofertas/:id', OfertaController.getOferta);
router.put('/ofertas/:id', OfertaController.updateOferta);
router.delete('/ofertas/:id', OfertaController.deleteOferta);

module.exports = router;
