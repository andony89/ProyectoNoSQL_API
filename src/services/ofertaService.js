const Oferta = require('../models/Oferta');

class OfertaService {
  async createOferta(data) {
    const oferta = new Oferta(data);
    await oferta.save();
    return oferta;
  }

  async getOferta(id) {
    return await Oferta.findById(id);
  }

  async updateOferta(id, data) {
    const oferta = await Oferta.findByIdAndUpdate(id, data, { new: true });
    if (!oferta) {
      throw new Error('Oferta no encontrada');
    }
    return oferta;
  }  

  async deleteOferta(id) {
    return await Oferta.findByIdAndDelete(id);
  }
}

module.exports = new OfertaService();
