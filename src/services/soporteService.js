const Soporte = require('../models/Soporte');

class SoporteService {
  async createSoporte(data) {
    const soporte = new Soporte(data);
    await soporte.save();
    return soporte;
  }

  async getSoporte(id) {
    return await Soporte.findById(id);
  }

  async updateSoporte(id, data) {
    return await Soporte.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteSoporte(id) {
    return await Soporte.findByIdAndDelete(id);
  }
}

module.exports = new SoporteService();
