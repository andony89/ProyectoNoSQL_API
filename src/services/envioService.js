const Envio = require('../models/Envio');

class EnvioService {
  async createEnvio(data) {
    const envio = new Envio(data);
    await envio.save();
    return envio;
  }

  async getEnvio(id) {
    return await Envio.findById(id);
  }

  async updateEnvio(id, data) {
    return await Envio.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteEnvio(id) {
    return await Envio.findByIdAndDelete(id);
  }
}

module.exports = new EnvioService();
