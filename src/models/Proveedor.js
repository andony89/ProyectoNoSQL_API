const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Contacto: { type: String, required: true },
    Telefono: { type: String, required: true },
    Direccion: { type: String, required: true },
    ProductosSuministrados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'productos' }] 
}, { collection: 'proveedores' });

module.exports = mongoose.model('Proveedor', ProveedorSchema);
