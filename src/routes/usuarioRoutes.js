const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificarToken = require('../middlewares/authMiddleware');

router.post('/login', usuarioController.login);

router.post('/registro', usuarioController.registrar);

router.get('/Usuarios', verificarToken, usuarioController.getAllUsuarios);

router.get('/Usuarios/:id', verificarToken, usuarioController.getUsuario);

router.put('/EditarUsuarios/:id', verificarToken, usuarioController.updateUsuario);

router.delete('/BorrarUsuarios/:id', verificarToken, usuarioController.deleteUsuario);

router.get('/Usuarios/rol/:rol', verificarToken, usuarioController.getUsuariosPorRol);

module.exports = router;
