const Resena = require('../models/Resena');

class ResenaService {
  async createResena(data) {
    const resena = new Resena(data);
    await resena.save();
    return resena;
  }

  async getResena(id) {
    return await Resena.findById(id);
  }

  async updateResena(id, data) {
    return await Resena.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteResena(id) {
    return await Resena.findByIdAndDelete(id);
  }

  async getAllResenas() {
    return await Resena.find(); 
  
  }
  async getMejoresResenas() {
    return await Resena.find({ calificacion: { $gte: 4 } })
                       .sort({ calificacion: -1 });
  }

  async getPeoresResenas() {
    return await Resena.find({ calificacion: { $lte: 3 } })
                       .sort({ calificacion: 1 });
  }
  


}

module.exports = new ResenaService();
