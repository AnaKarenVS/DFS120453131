const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    nombreProducto: {type: String, required: true},
    descripcion: {type: String, required: true},
    creado: {type: Date, default: Date.now()},
    cantidad: {type: Number, required: true},
    precio: {type: String, required: true}
});


module.exports = mongoose.model("Producto", ProductoSchema);