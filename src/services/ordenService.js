const Orden = require('../models/Orden');

class OrdenService {
  async createOrden(data) {
    const orden = new Orden(data);
    await orden.save();
    return orden;
  }

  async getOrden(id) {
    return await Orden.findById(id);
  }

  async updateOrden(id, data) {
    return await Orden.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteOrden(id) {
    return await Orden.findByIdAndDelete(id);
  }
}

module.exports = new OrdenService();
