const mongoose = require("mongoose");

const OrdenSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
      cantidad: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  metodoPago: { type: mongoose.Schema.Types.ObjectId, ref: "MetodoPago" },
  estado: { type: String, enum: ["pendiente", "enviado", "entregado", "cancelado"], default: "pendiente" },
  fechaPedido: { type: Date, default: Date.now }
}, { collection: 'ordenes' });

module.exports = mongoose.model("Orden", OrdenSchema);
