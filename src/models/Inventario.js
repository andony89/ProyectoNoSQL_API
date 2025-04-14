const mongoose = require("mongoose");

const InventarioSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
  cantidadDisponible: { type: Number, required: true },
  ultimaActualizacion: { type: Date, default: Date.now }
}, { collection: 'inventario' });

module.exports = mongoose.model("Inventario", InventarioSchema);
