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

  //  Buscar historial por ID de usuario
  async getHistorialPorUsuario(usuarioId) {
    return await HistorialCompra.find({ usuario: usuarioId }).populate('ordenes');
  }

  //  Buscar historiales con más de una orden
  async getHistorialesConMultiplesOrdenes() {
    return await HistorialCompra.find({ "ordenes.1": { $exists: true } }).populate('ordenes');
  }
}

module.exports = new HistorialCompraService();

