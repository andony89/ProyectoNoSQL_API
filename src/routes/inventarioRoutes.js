const express = require('express');
const router = express.Router();
const InventarioController = require('../controllers/inventarioController');

router.post('/inventario', InventarioController.createInventario);
router.get('/inventario/:id', InventarioController.getInventario);
router.put('/inventario/:id', InventarioController.updateInventario);
router.delete('/inventario/:id', InventarioController.deleteInventario);
router.get('/inventario', InventarioController.getAllInventario);
module.exports = router;
