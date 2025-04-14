const Producto = require('../models/Producto');

class ProductoService {
  async createProducto(data) {
    const producto = new Producto(data);
    await producto.save();
    return producto;
  }
  
  async getAllProductos() {
    return await Producto.find();
  }
  
  async getProducto(id) {
    return await Producto.findById(id);
  }

  async updateProducto(id, data) {
    return await Producto.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProducto(id) {
    return await Producto.findByIdAndDelete(id);
  }
}

module.exports = new ProductoService();
