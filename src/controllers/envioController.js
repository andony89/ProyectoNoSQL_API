const envioService = require('../services/envioService');

class EnvioController {
  async createEnvio(req, res) {
    try {
      const envio = await envioService.createEnvio(req.body);
      res.status(201).json(envio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getEnvio(req, res) {
    try {
      const envio = await envioService.getEnvio(req.params.id);
      if (!envio) {
        return res.status(404).json({ error: 'Envío no encontrado' });
      }
      res.json(envio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllEnvios(req, res) {
    try {
      const envios = await envioService.getAllEnvios();
      res.json(envios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateEnvio(req, res) {
    try {
      const envio = await envioService.updateEnvio(req.params.id, req.body);
      if (!envio) {
        return res.status(404).json({ error: 'Envío no encontrado' });
      }
      res.json(envio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteEnvio(req, res) {
    try {
      const envio = await envioService.deleteEnvio(req.params.id);
      if (!envio) {
        return res.status(404).json({ error: 'Envío no encontrado' });
      }
      res.json({ message: 'Envío eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new EnvioController();
