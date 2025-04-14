const metodoPagoService = require('../services/metodoPagoService');

class MetodoPagoController {
  async createMetodoPago(req, res) {
    try {
      const metodo = await metodoPagoService.createMetodoPago(req.body);
      res.status(201).json(metodo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getMetodoPago(req, res) {
    try {
      const metodo = await metodoPagoService.getMetodoPago(req.params.id);
      if (!metodo) {
        return res.status(404).json({ error: 'Método de pago no encontrado' });
      }
      res.json(metodo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllMetodosPago(req, res) {
    try {
      const metodos = await metodoPagoService.getAllMetodosPago();
      res.json(metodos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateMetodoPago(req, res) {
    try {
      const metodo = await metodoPagoService.updateMetodoPago(req.params.id, req.body);
      if (!metodo) {
        return res.status(404).json({ error: 'Método de pago no encontrado' });
      }
      res.json(metodo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteMetodoPago(req, res) {
    try {
      const metodo = await metodoPagoService.deleteMetodoPago(req.params.id);
      if (!metodo) {
        return res.status(404).json({ error: 'Método de pago no encontrado' });
      }
      res.json({ message: 'Método de pago eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new MetodoPagoController();
