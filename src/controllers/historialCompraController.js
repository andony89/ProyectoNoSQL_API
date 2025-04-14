const historialCompraService = require('../services/historialCompraService');

class HistorialCompraController {
  async createHistorialCompra(req, res) {
    try {
      const historial = await historialCompraService.createHistorialCompra(req.body);
      res.status(201).json(historial);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getHistorialCompra(req, res) {
    try {
      const historial = await historialCompraService.getHistorialCompra(req.params.id);
      if (!historial) {
        return res.status(404).json({ error: 'Historial de compra no encontrado' });
      }
      res.json(historial);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllHistorialCompras(req, res) {
    try {
      const historiales = await historialCompraService.getAllHistorialCompras();
      res.json(historiales);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateHistorialCompra(req, res) {
    try {
      const historial = await historialCompraService.updateHistorialCompra(req.params.id, req.body);
      if (!historial) {
        return res.status(404).json({ error: 'Historial de compra no encontrado' });
      }
      res.json(historial);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteHistorialCompra(req, res) {
    try {
      const historial = await historialCompraService.deleteHistorialCompra(req.params.id);
      if (!historial) {
        return res.status(404).json({ error: 'Historial de compra no encontrado' });
      }
      res.json({ message: 'Historial de compra eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new HistorialCompraController();
