const express = require('express');
const router = express.Router();
const SoporteController = require('../controllers/soporteController');

router.get('/viejos', SoporteController.getAllSoportesViejos);

router.post('/', SoporteController.createSoporte);

// Ruta para obtener todas las 
router.get('/', SoporteController.getAllSoportes);

router.get('/:id', SoporteController.getSoporteId);

// Ruta para obtener una Soporte específica por ID
router.get('/usuario/:userId', SoporteController.getSoporte);

// Ruta para actualizar una Soporte específica por ID
router.put('/:id', SoporteController.updateSoporte);

// Ruta para eliminar una Soporte específica por ID
router.delete('/:id', SoporteController.deleteSoporte);

module.exports = router;
