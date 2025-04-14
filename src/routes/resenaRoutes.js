const express = require('express');
const router = express.Router();
const ResenaController = require('../controllers/resenaController');

router.post('/resenas', ResenaController.createResena);
router.get('/resenas', ResenaController.getAllResenas);
router.get('/resenas/:id', ResenaController.getResena);
router.put('/resenas/:id', ResenaController.updateResena);
router.delete('/resenas/:id', ResenaController.deleteResena);
router.get('/mejores', ResenaController.getMejoresResenas);
router.get('/peores', ResenaController.getPeoresResenas);


module.exports = router;
