const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const tutorialRoutes = require('./routes/tutorialRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/intercambio-conocimientos', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tutorials', tutorialRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});