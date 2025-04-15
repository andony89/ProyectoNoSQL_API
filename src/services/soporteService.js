const Soporte = require('../models/Soporte');

class SoporteService {
  async createSoporte(data) {
    const soporte = new Soporte(data);
    await soporte.save();
    return soporte;
  }

  async getSoporteId(id) {
    return await Soporte.findById(id);
  }


async getSoporte(userId) {
  try {
   
    return await Soporte.find({ usuario: userId }); 
  } catch (err) {
    throw new Error('Error al obtener los tickets de soporte: ' + err.message);
  }
}

async getAllSoportes() {
  try {
    return await Soporte.find().populate('usuario');
  } catch (err) {
    throw new Error('Error al obtener todos los tickets de soporte: ' + err.message);
  }
}

  async updateSoporte(id, data) {
    return await Soporte.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteSoporte(id) {
    return await Soporte.findByIdAndDelete(id);
  }
}

module.exports = new SoporteService();
