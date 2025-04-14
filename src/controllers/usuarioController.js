const usuarioService = require('../services/usuarioService');

class UsuarioController {
  // REGISTRO DE USUARIO
  async registrar(req, res) {
    try {
      const usuario = await usuarioService.createUsuario(req.body); 
      res.status(201).json(usuario);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // LOGIN DE USUARIO
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const { token, usuario } = await usuarioService.loginUsuario(email, password);
      res.json({ token, usuario });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // OBTENER TODOS LOS USUARIOS (Solo para administradores)
  async getAllUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.getAllUsuarios(); 
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // OBTENER UN USUARIO POR ID
  async getUsuario(req, res) {
    try {
      const usuario = await usuarioService.getUsuario(req.params.id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // ACTUALIZAR USUARIO
  async updateUsuario(req, res) {
    try {
      const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // ELIMINAR USUARIO
  async deleteUsuario(req, res) {
    try {
      const usuario = await usuarioService.deleteUsuario(req.params.id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();