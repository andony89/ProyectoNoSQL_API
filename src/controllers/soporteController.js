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

// Este es el método modificado para obtener los tickets de un usuario por su 'userId'
async getSoporte(req, res) {
  try {
    // Obtener el userId de los parámetros de la URL
    const userId = req.params.userId; 

    // Llamamos al servicio para obtener los tickets de un usuario
    const soportes = await soporteService.getSoporte(userId); // Llamamos al servicio con el userId
    
    // Verificamos si se encontraron soportes
    if (!soportes || soportes.length === 0) {
      return res.status(404).json({ error: 'No se encontraron tickets de soporte para este usuario.' });
    }
    
    // Si los tickets son encontrados, los enviamos en la respuesta
    res.json(soportes);
  } catch (err) {
    // En caso de error, enviamos el mensaje de error
    res.status(500).json({ error: err.message });
  }
}

async getSoporteId(req, res) {
    try {
      const soporte = await soporteService.getSoporte(req.params.id);
      if (!soporte) {
        return res.status(404).json({ error: 'Ticket no encontrada' });
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
