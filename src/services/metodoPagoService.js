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

  async updateMetodoPago(id, data) {
    return await MetodoPago.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMetodoPago(id) {
    return await MetodoPago.findByIdAndDelete(id);
  }
}

module.exports = new MetodoPagoService();
