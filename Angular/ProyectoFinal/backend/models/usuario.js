const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new mongoose.Schema({
    nombre :{String}, 
    email: {String},
    tipo: {String},
    numeroTelefonico : {String},
},
{
    collection:'usuarios'
});

module.exports = mongoose.model("Usuario", Usuario);