const carritoService = require('../services/carritoService');

class CarritoController {
  async createCarrito(req, res) {
    try {
      const carrito = await carritoService.createCarrito(req.body);
      res.status(201).json(carrito);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCarrito(req, res) {
    try {
      const carrito = await carritoService.getCarrito(req.params.id);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }
      res.json(carrito);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllCarritos(req, res) {
    try {
      const carritos = await carritoService.getAllCarritos();
      res.json(carritos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateCarrito(req, res) {
    try {
      const carrito = await carritoService.updateCarrito(req.params.id, req.body);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }
      res.json(carrito);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteCarrito(req, res) {
    try {
      const carrito = await carritoService.deleteCarrito(req.params.id);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }
      res.json({ message: 'Carrito eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new CarritoController();
