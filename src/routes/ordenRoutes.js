const express = require('express');
const router = express.Router();
const OrdenController = require('../controllers/ordenController');

router.post('/ordenes', OrdenController.createOrden);
router.get('/ordenes/:id', OrdenController.getOrden);
router.put('/ordenes/:id', OrdenController.updateOrden);
router.delete('/ordenes/:id', OrdenController.deleteOrden);

module.exports = router;
