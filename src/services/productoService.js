const Producto = require('../models/Producto');

const CATEGORIAS_VALIDAS = ["Herramientas", "Bicicletas", "Ropa", "Accesorios", "Repuestos"];

class ProductoService {
  async createProducto(data) {
    if (!CATEGORIAS_VALIDAS.includes(data.categoria)) {
      throw new Error("Categoria invalida");
    }
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
    if (data.categoria && !CATEGORIAS_VALIDAS.includes(data.categoria)) {
      throw new Error("Categoria invalida");
    }
    return await Producto.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProducto(id) {
    return await Producto.findByIdAndDelete(id);
  }

  async getProductosPorCategoria(categoria) {
    if (!CATEGORIAS_VALIDAS.includes(categoria)) {
      throw new Error("Categoría inválida");
    }
    return await Producto.find({ categoria });
  }
}

module.exports = new ProductoService();
