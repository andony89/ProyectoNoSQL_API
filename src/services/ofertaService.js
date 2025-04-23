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

  async getOfertasPorVencer() {
    const hoy = new Date();
    const enTresDias = new Date();
    enTresDias.setDate(hoy.getDate() + 3);

    return await Oferta.find({
      fechaFin: { $gte: hoy, $lte: enTresDias }
    }).populate('producto');
  }
}

module.exports = new OfertaService();
