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

  async getAllOrdenes() {
    return await Orden.find(); // Puedes añadir .populate() si necesitas traer los datos referenciados
  }

  async getOrdenesPorUsuario(userId) {
    try {
      return await Orden.find({ usuario: userId }); // Asegúrate que 'usuario' sea el campo correcto
    } catch (err) {
      throw new Error('Error al obtener las órdenes: ' + err.message);
    }
  }

  async deleteOrden(id) {
    return await Orden.findByIdAndDelete(id);
  }
}

module.exports = new OrdenService();
