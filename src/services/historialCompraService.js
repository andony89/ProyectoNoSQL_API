const HistorialCompra = require('../models/HistorialCompra');

class HistorialCompraService {
  async createHistorialCompra(data) {
    const historial = new HistorialCompra(data);
    await historial.save();
    return historial;
  }

  async getHistorialCompra(id) {
    return await HistorialCompra.findById(id);
  }

  async updateHistorialCompra(id, data) {
    return await HistorialCompra.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteHistorialCompra(id) {
    return await HistorialCompra.findByIdAndDelete(id);
  }
}

module.exports = new HistorialCompraService();
