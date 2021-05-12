const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmpleadoModel = new Schema({
    id:{type:String},
    name: { type: String, require: true},
    email:{type: String, require: true},
    position: {type: String, require: false},
    numberEmpleado : {type: String, require: true},
    cellphone:{type: String, require : false}

}, {
    collection: 'empleados'
});

module.exports = mongoose.model('Empleado', EmpleadoModel);