const express = require('express');
const router = express.Router();
const EnvioController = require('../controllers/envioController');

router.post('/envios', EnvioController.createEnvio);
router.get('/envios', EnvioController.getAllEnvios);
router.get('/envios/:id', EnvioController.getEnvio);
router.put('/envios/:id', EnvioController.updateEnvio);
router.delete('/envios/:id', EnvioController.deleteEnvio);

module.exports = router;
