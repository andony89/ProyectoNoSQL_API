const metodoPagoService = require('../services/metodoPagoService');

class MetodoPagoController {
  async createMetodoPago(req, res) {
    try {
      const metodo = await metodoPagoService.createMetodoPago(req.body);
      res.status(201).json(metodo);
    } catch (err) {
      console.error('Error al crear método de pago:', err); // <-- log completo del error
      res.status(500).json({ error: err.message, stack: err.stack }); // <-- respuesta más detallada
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
      if (req.query.usuario) {
        const metodos = await metodoPagoService.getMetodosPagoPorUsuario(req.query.usuario);
        return res.json(metodos);
      }
  
      const metodos = await metodoPagoService.getAllMetodosPago();
      res.json(metodos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getMetodosPagoPorUsuario(req, res) {
    try {
      // Obtener el userId de los parámetros de la URL
      const userId = req.params.userId; 
  
      // Llamamos al servicio para obtener los métodos de pago del usuario
      const metodosPago = await metodoPagoService.getMetodosPagoPorUsuario(userId);
      
      // Verificamos si se encontraron métodos de pago
      if (!metodosPago || metodosPago.length === 0) {
        return res.status(404).json({ error: 'No se encontraron métodos de pago para este usuario.' });
      }
      
      // Si se encuentran métodos de pago, los enviamos en la respuesta
      res.json(metodosPago);
    } catch (err) {
      // En caso de error, enviamos el mensaje de error
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
