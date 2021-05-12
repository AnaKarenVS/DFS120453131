const express = require('express'); //servidor 
const passport = require('passport');
const { default: validator } = require('validator');
const router = express.Router();
const EmpleadoModel = require ('../model/empleados');

router.get('/empleados/lista', async (req, res) => {
    const empleados = await EmpleadoModel.find().sort({ _id: 'asc' }).lean();
    console.log(empleados);
    
   if(!empleados.length){
    return res.status(200).send({
        status: "success",
        empleados: "No hay datos que mostrar",
      });

   }else{
    return res.status(200).send(empleados);
   }

});

router.post('/agregar/empleado', async(req,res)=>{
    const { name, email, position, numberEmpleado, cellphone} = req.body;
    console.log(req.body)
     try {
        const validate_name = !validator.isEmpty(name);
        const validate_email = !validator.isEmpty(email);
        const validate_position = !validator.isEmpty(position);
        const validate_numberEmpleado = !validator.isEmpty(numberEmpleado);
        const validate_cellphone = !validator.isEmpty(cellphone);

        const numeroEmpleado = await EmpleadoModel.findOne({numberEmpleado:numberEmpleado});

        if(numeroEmpleado){
          return res.status(200).send({
            status: "error",
            empleados: "El codigo ya fue registrado",
          });

        }else{
          var empleado = new EmpleadoModel({name, email, position, numberEmpleado, cellphone});
          await empleado.save();

          return res.status(200).send({
            status: "success",
            empleados: "Nuevo empleado guardado",
          });
        }

      }catch(err){

        return res.status(404).send({
          status: "error",
          message: "No se ha guardado"
        });
     }

});


router.delete('/empleados/eliminar/:_id', async(req, res)=>{
  console.log(req.params._id);
  let empleadoId = req.params._id;
  await EmpleadoModel.findByIdAndRemove(empleadoId);

  return res.status(200).send({
    status: "success",
    empleados: "Empleado eliminado",
  });
 
});

router.get('/empleado/unico/:_id', async (req, res) => {
  let empleadoId = req.params._id;
  const empleadoUnico = await EmpleadoModel.findById(empleadoId);
  console.log(empleadoUnico);
  
 if(empleadoUnico){
  return res.status(200).send(
      empleadoUnico
    );

 }else{
  return res.status(500).send(error);
 }

});

router.put('/empleados/actualizar-empleado/:_id', async (req, res) => {
  let empleadoId = req.params._id;
    const empleadoUpdate = await EmpleadoModel.findOneAndUpdate(empleadoId, req.body)
  
    if(empleadoUpdate){
      return res.status(200).send(empleadoUpdate);
     }else{
      return res.status(500).send(error);
     }
});
module.exports = router;