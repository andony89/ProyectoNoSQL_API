const mongoose = require("mongoose");

const ResenaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
  comentario: { type: String, required: true },
  calificacion: { type: Number, required: true, min: 1, max: 5 },
  fechaResena: { type: Date, default: Date.now }
}, { collection: 'resenas' });

module.exports = mongoose.model("Resena", ResenaSchema);
