const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const usuarioRoutes = require('./routes/usuarioRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const envioRoutes = require('./routes/envioRoutes');
const historialCompraRoutes = require('./routes/historialCompraRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');
const metodoPagoRoutes = require('./routes/metodoPagoRoutes');
const ofertaRoutes = require('./routes/ofertaRoutes');
const ordenRoutes = require('./routes/ordenRoutes');
const productoRoutes = require('./routes/productoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const resenaRoutes = require('./routes/resenaRoutes');
const soporteRoutes = require('./routes/soporteRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/carritos', carritoRoutes);
app.use('/api/envios', envioRoutes);
app.use('/api/historial-compras', historialCompraRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/metodos_pago', metodoPagoRoutes);
app.use('/api/ofertas', ofertaRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/resenas', resenaRoutes);
app.use('/api/soporte', soporteRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

