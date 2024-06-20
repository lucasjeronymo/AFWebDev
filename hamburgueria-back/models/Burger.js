const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true },
});

module.exports = mongoose.model('Burger', burgerSchema);
