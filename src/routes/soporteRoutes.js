const express = require('express');
const router = express.Router();
const SoporteController = require('../controllers/soporteController');

router.post('/soporte', SoporteController.createSoporte);
router.get('/soporte/:id', SoporteController.getSoporte);
router.put('/soporte/:id', SoporteController.updateSoporte);
router.delete('/soporte/:id', SoporteController.deleteSoporte);

module.exports = router;
