const mongoose = require("mongoose");

const MetodoPagoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  tipo: { type: String, required: true, enum: ["Tarjeta", "PayPal", "Transferencia"] },
  numeroCuenta: { type: String },
  fechaExpiracion: { type: String },
  cvv: { type: String }
}, { collection: 'metodos_pago' });

module.exports = mongoose.model("MetodoPago", MetodoPagoSchema);
