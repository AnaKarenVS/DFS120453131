const mongoose = require("mongoose");
const { Schema } = mongoose;

const CervezaSchema = new mongoose.Schema({
  imagen: { type: String, required: true },
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model("Cerveza", CervezaSchema);
