const productoService = require('../services/productoService');

class ProductoController {
  async createProducto(req, res) {
    try {
      const producto = await productoService.createProducto(req.body);
      res.status(201).json(producto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getProducto(req, res) {
    try {
      const producto = await productoService.getProducto(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json(producto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllProductos(req, res) {
    try {
      const productos = await productoService.getAllProductos();
      res.json(productos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateProducto(req, res) {
    try {
      const producto = await productoService.updateProducto(req.params.id, req.body);
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json(producto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteProducto(req, res) {
    try {
      const producto = await productoService.deleteProducto(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json({ message: 'Producto eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ProductoController();
