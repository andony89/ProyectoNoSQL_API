const mongoose = require("mongoose");

const EnvioSchema = new mongoose.Schema({
  orden: { type: mongoose.Schema.Types.ObjectId, ref: "Orden", required: true },
  direccion: { type: String, required: true },
  estado: { type: String, enum: ["preparando", "en camino", "entregado"], default: "preparando" },
  fechaEnvio: { type: Date, default: Date.now }
}, { collection: 'envios' });

module.exports = mongoose.model("Envio", EnvioSchema);
