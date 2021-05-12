const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductoModel = new mongoose.Schema({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model("Prodcuto", ProductoModel);
