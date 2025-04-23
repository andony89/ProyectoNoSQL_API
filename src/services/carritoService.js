const Carrito = require('../models/Carrito');

class CarritoService {
  async createCarrito(data) {
    const carrito = new Carrito(data);
    await carrito.save();
    return carrito;
  }

  async getCarrito(id) {
    return await Carrito.findById(id).populate('productos.producto');
  }

  async getAllCarritos() {
    return await Carrito.find().populate('productos.producto');
  }

  async updateCarrito(id, data) {
    return await Carrito.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCarrito(id) {
    return await Carrito.findByIdAndDelete(id);
  }

  async getCarritoByUsuario(usuarioId) {
    return await Carrito.find({ usuario: usuarioId }).populate('productos.producto');
  }

  async getCarritoOrdenadoPorPrecio(usuarioId) {
    return await Carrito.aggregate([
      { $match: { usuario: require('mongoose').Types.ObjectId(usuarioId) } },
      { $unwind: '$productos' },
      {
        $lookup: {
          from: 'productos',
          localField: 'productos.producto',
          foreignField: '_id',
          as: 'productoInfo'
        }
      },
      { $unwind: '$productoInfo' },
      {
        $sort: { 'productoInfo.precio': -1 }
      },
      {
        $group: {
          _id: '$_id',
          usuario: { $first: '$usuario' },
          fechaCreacion: { $first: '$fechaCreacion' },
          productos: {
            $push: {
              producto: '$productoInfo',
              cantidad: '$productos.cantidad'
            }
          }
        }
      }
    ]);
  }

  async getCarritoOrdenadoPorCantidad(usuarioId) {
    return await Carrito.aggregate([
      { $match: { usuario: require('mongoose').Types.ObjectId(usuarioId) } },
      { $unwind: '$productos' },
      {
        $lookup: {
          from: 'productos',
          localField: 'productos.producto',
          foreignField: '_id',
          as: 'productoInfo'
        }
      },
      { $unwind: '$productoInfo' },
      {
        $sort: { 'productos.cantidad': -1 }
      },
      {
        $group: {
          _id: '$_id',
          usuario: { $first: '$usuario' },
          fechaCreacion: { $first: '$fechaCreacion' },
          productos: {
            $push: {
              producto: '$productoInfo',
              cantidad: '$productos.cantidad'
            }
          }
        }
      }
    ]);
  }
}

module.exports = new CarritoService();

