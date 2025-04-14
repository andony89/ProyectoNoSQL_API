const inventarioService = require('../services/inventarioService');

class InventarioController {
  async createInventario(req, res) {
    try {
      const item = await inventarioService.createInventario(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getInventario(req, res) {
    try {
      const item = await inventarioService.getInventario(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Ítem de inventario no encontrado' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllInventario(req, res) {
    try {
      const items = await inventarioService.getAllInventario();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateInventario(req, res) {
    try {
      const item = await inventarioService.updateInventario(req.params.id, req.body);
      if (!item) {
        return res.status(404).json({ error: 'Ítem de inventario no encontrado' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteInventario(req, res) {
    try {
      const item = await inventarioService.deleteInventario(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Ítem de inventario no encontrado' });
      }
      res.json({ message: 'Ítem de inventario eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new InventarioController();
