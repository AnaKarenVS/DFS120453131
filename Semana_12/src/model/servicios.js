const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServicioSchema =  new mongoose.Schema({
    nombreServicio: {type: String, required: true},
    descripcionServicio: {type: String},
    costoServicio: {type: Number}
});

module.exports = mongoose.model("Servicio", ServicioSchema);