const mongoose = require("mongoose");

const SoporteSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  mensaje: { type: String, required: true },
  estado: { type: String, enum: ["pendiente", "resuelto"], default: "pendiente" },
  fechaCreacion: { type: Date, default: Date.now }
}, { collection: 'soporte' });

module.exports = mongoose.model("Soporte", SoporteSchema);
