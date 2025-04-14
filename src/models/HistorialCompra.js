const mongoose = require("mongoose");

const HistorialCompraSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  ordenes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orden" }],
  fechaUltimaCompra: { type: Date, default: Date.now }
}, { collection: 'historial_compras' });

module.exports = mongoose.model("HistorialCompra", HistorialCompraSchema);
