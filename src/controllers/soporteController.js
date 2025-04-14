const soporteService = require('../services/soporteService');

class SoporteController {
  async createSoporte(req, res) {
    try {
      const soporte = await soporteService.createSoporte(req.body);
      res.status(201).json(soporte);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getSoporte(req, res) {
    try {
      const soporte = await soporteService.getSoporte(req.params.id);
      if (!soporte) {
        return res.status(404).json({ error: 'Soporte no encontrado' });
      }
      res.json(soporte);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllSoportes(req, res) {
    try {
      const soportes = await soporteService.getAllSoportes();
      res.json(soportes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateSoporte(req, res) {
    try {
      const soporte = await soporteService.updateSoporte(req.params.id, req.body);
      if (!soporte) {
        return res.status(404).json({ error: 'Soporte no encontrado' });
      }
      res.json(soporte);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteSoporte(req, res) {
    try {
      const soporte = await soporteService.deleteSoporte(req.params.id);
      if (!soporte) {
        return res.status(404).json({ error: 'Soporte no encontrado' });
      }
      res.json({ message: 'Soporte eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new SoporteController();
