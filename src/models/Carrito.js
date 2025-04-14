const mongoose = require("mongoose");

const CarritoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
      cantidad: { type: Number, required: true }
    }
  ],
  fechaCreacion: { type: Date, default: Date.now }
}, { collection: 'carritos' });

module.exports = mongoose.model("Carrito", CarritoSchema);
