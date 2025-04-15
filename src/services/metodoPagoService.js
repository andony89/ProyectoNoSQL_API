const MetodoPago = require('../models/MetodoPago');

class MetodoPagoService {
  async createMetodoPago(data) {
    const metodoPago = new MetodoPago(data);
    await metodoPago.save();
    return metodoPago;
  }

  async getMetodoPago(id) {
    return await MetodoPago.findById(id);
  }

  async getMetodosPagoPorUsuario(userId) {
    try {
      return await MetodoPago.find({ usuario: userId });
    } catch (err) {
      throw new Error('Error al obtener los métodos de pago: ' + err.message);
    }
  }
  
  async updateMetodoPago(id, data) {
    return await MetodoPago.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMetodoPago(id) {
    return await MetodoPago.findByIdAndDelete(id);
  }
  
  async getAllMetodosPago() {
    return await MetodoPago.find(); // Obtiene todos los métodos de pago
  }
}

module.exports = new MetodoPagoService();
