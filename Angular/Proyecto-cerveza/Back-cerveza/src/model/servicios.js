const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServicioModel =  new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String},
    costo: {type: Number}
});

module.exports = mongoose.model("Servicio", ServicioModel);