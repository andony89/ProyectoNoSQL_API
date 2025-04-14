const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "tu_secreto_super_seguro";

class UsuarioService {
  
  async createUsuario(data) {
    const { nombre, email, password, role } = data;

    // Validar que el rol sea 'admin' o 'cliente'
    const rolesPermitidos = ['admin', 'cliente'];
    const rolAsignado = rolesPermitidos.includes(role) ? role : 'cliente';

    const usuario = new Usuario({ nombre, email, password, role: rolAsignado });
    await usuario.save();
    return usuario;
  }

  async getUsuario(id) {
    return await Usuario.findById(id);
  }

  async updateUsuario(id, data) {
    return await Usuario.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUsuario(id) {
    return await Usuario.findByIdAndDelete(id);
  }

  async loginUsuario(email, password) {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);
    if (!passwordMatch) {
      throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign(
      { id: usuario._id, role: usuario.role },
      SECRET_KEY,
      { expiresIn: "2h" } 
    );

    return { token, usuario };
  }
  async getAllUsuarios() {
    return await Usuario.find({}, '-password'); 
  
}
}

module.exports = new UsuarioService();