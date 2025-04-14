const resenaService = require('../services/resenaService');

class ResenaController {
  async createResena(req, res) {
    try {
      const resena = await resenaService.createResena(req.body);
      res.status(201).json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getResena(req, res) {
    try {
      const resena = await resenaService.getResena(req.params.id);
      if (!resena) {
        return res.status(404).json({ error: 'Reseña no encontrada' });
      }
      res.json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllResenas(req, res) {
    try {
      const resenas = await resenaService.getAllResenas();
      res.json(resenas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateResena(req, res) {
    try {
      const resena = await resenaService.updateResena(req.params.id, req.body);
      if (!resena) {
        return res.status(404).json({ error: 'Reseña no encontrada' });
      }
      res.json(resena);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteResena(req, res) {
    try {
      const resena = await resenaService.deleteResena(req.params.id);
      if (!resena) {
        return res.status(404).json({ error: 'Reseña no encontrada' });
      }
      res.json({ message: 'Reseña eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getMejoresResenas(req, res) {
    try {
      const resenas = await resenaService.getMejoresResenas();
      res.json(resenas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getPeoresResenas(req, res) {
    try {
      const resenas = await resenaService.getPeoresResenas();
      res.json(resenas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  




}

module.exports = new ResenaController();
