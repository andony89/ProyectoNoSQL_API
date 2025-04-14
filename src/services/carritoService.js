const Carrito = require('../models/Carrito');

class CarritoService {
  async createCarrito(data) {
    const carrito = new Carrito(data);
    await carrito.save();
    return carrito;
  }

  async getCarrito(id) {
    return await Carrito.findById(id);
  }

  async updateCarrito(id, data) {
    return await Carrito.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCarrito(id) {
    return await Carrito.findByIdAndDelete(id);
  }
}

module.exports = new CarritoService();
