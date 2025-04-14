const mongoose = require("mongoose");

const OfertaSchema = new mongoose.Schema({
  producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
  descuento: { type: Number, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true }
}, { collection: 'ofertas' });

module.exports = mongoose.model("Oferta", OfertaSchema);
