const jwt = require('jsonwebtoken');
const SECRET_KEY = "tu_secreto_super_seguro"; 

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado, token requerido" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    req.usuario = decoded;

    next();
  } catch (err) {
    res.status(401).json({ error: `Token inválido: ${err.message}` });
  }
};

module.exports = verificarToken;
