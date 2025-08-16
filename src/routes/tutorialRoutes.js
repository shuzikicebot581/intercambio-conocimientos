const express = require('express');
const router = express.Router();
const Tutorial = require('../models/Tutorial');

router.post('/', async (req, res) => {
  // Código para crear un nuevo tutorial
});

router.get('/', async (req, res) => {
  // Código para obtener todos los tutoriales
});

module.exports = router;