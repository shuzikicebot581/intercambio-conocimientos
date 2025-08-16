const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  // Código para registrar un nuevo usuario
});

router.post('/login', async (req, res) => {
  // Código para iniciar sesión
});

module.exports = router;