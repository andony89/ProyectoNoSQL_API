const Oferta = require('../models/Oferta');
const ofertaService = require('../services/ofertaService');


class OfertaController {
  async createOferta(req, res) {
    try {
      const oferta = await ofertaService.createOferta(req.body);
      res.status(201).json(oferta);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getOferta(req, res) {
    try {
      const oferta = await ofertaService.getOferta(req.params.id);
      if (!oferta) {
        return res.status(404).json({ error: 'Oferta no encontrada' });
      }
      res.json(oferta);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllOfertas(req, res) {
    try {
      const ofertas = await Oferta.find().populate("producto");
      console.log("Ofertas desde la BD:", ofertas); 
      res.json(ofertas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateOferta(req, res) {
    try {
      const oferta = await ofertaService.updateOferta(req.params.id, req.body);
      if (!oferta) {
        return res.status(404).json({ error: 'Oferta no encontrada' });
      }
      console.log("Oferta actualizada:", oferta);
      res.json(oferta);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  

  async deleteOferta(req, res) {
    try {
      const oferta = await ofertaService.deleteOferta(req.params.id);
      if (!oferta) {
        return res.status(404).json({ error: 'Oferta no encontrada' });
      }
      res.json({ message: 'Oferta eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new OfertaController();
