const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoria: { type: String,
    enum: ["Herramientas","Bicicletas","Ropa","Accesorios","Repuestos"],required: true},
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" },
  imagen: { type: String },
  ultimaActualizacion: { type: Date, default: Date.now },
  fechaCreacion: { type: Date, default: Date.now }
}, { collection: 'productos' });

module.exports = mongoose.model("Producto", ProductoSchema);
