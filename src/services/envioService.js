const Envio = require('../models/Envio');

class EnvioService {
  async createEnvio(data) {
    const envio = new Envio(data);
    await envio.save();
    return envio;
  }

  async getAllEnvios() {
    return await Envio.find().populate('orden');
  }

  async getEnvio(id) {
    return await Envio.findById(id).populate('orden');
  }

  async updateEnvio(id, data) {
    return await Envio.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteEnvio(id) {
    return await Envio.findByIdAndDelete(id);
  }
}

module.exports = new EnvioService();
