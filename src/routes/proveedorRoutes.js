const express = require('express');
const router = express.Router();
const ProveedorController = require('../controllers/proveedorController');

router.post('/proveedores', ProveedorController.createProveedor);
router.get('/proveedores', ProveedorController.getAllProveedores);
router.get('/proveedores/:id', ProveedorController.getProveedor);
router.put('/proveedores/:id', ProveedorController.updateProveedor);
router.delete('/proveedores/:id', ProveedorController.deleteProveedor);

module.exports = router;
