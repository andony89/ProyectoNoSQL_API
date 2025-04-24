const ordenService = require('../services/ordenService');

class OrdenController {
  async createOrden(req, res) {
    try {
      const orden = await ordenService.createOrden(req.body);
      res.status(201).json(orden);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getOrden(req, res) {
    try {
      const orden = await ordenService.getOrden(req.params.id);
      if (!orden) {
        return res.status(404).json({ error: 'Orden no encontrada' });
      }
      res.json(orden);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllOrdenes(req, res) {
    try {
      const ordenes = await ordenService.getAllOrdenes();
      res.json(ordenes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getOrdenesPorUsuario(req, res) {
    try {
      const userId = req.params.userId; 

      const ordenes = await ordenService.getOrdenesPorUsuario(userId);

      if (!ordenes || ordenes.length === 0) {
        return res.status(404).json({ error: 'No se encontraron órdenes para este usuario.' });
      }

      res.json(ordenes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  async updateOrden(req, res) {
    try {
      const orden = await ordenService.updateOrden(req.params.id, req.body);
      if (!orden) {
        return res.status(404).json({ error: 'Orden no encontrada' });
      }
      res.json(orden);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteOrden(req, res) {
    try {
      const orden = await ordenService.deleteOrden(req.params.id);
      if (!orden) {
        return res.status(404).json({ error: 'Orden no encontrada' });
      }
      res.json({ message: 'Orden eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getOrdenesPendientes(req, res) {
    try {
      const ordenes = await ordenService.getOrdenesPendientes();
      res.json(ordenes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new OrdenController();
