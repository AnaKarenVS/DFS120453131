const express = require('express'); //servidor 
const router = express.Router();
const ServicioModel = require('../model/servicios');
const { default: validator } = require('validator');


router.get('/servicios/listado', async (req, res) => {
    const servicios = await ServicioModel.find({}).lean();
    console.log(servicios);
    if(!servicios.length){
        return res.status(200).send({
            status: "success",
            servicios: "No hay datos que mostrar",
          });
    
       }else{
        return res.status(200).send(
            servicios
          );
       }
});


router.post('/servicios/nuevo', async (req, res) => {
    const { nombre, descripcion, costo } = req.body;
    console.log("Lo que trae el formulario", req.body);
    try {
        const validate_nombre = !validator.isEmpty(nombre);
        const validate_descripcion = !validator.isEmpty(descripcion);
        const validate_costo = !validator.isEmpty(costo);

          var servicio = new ServicioModel({nombre, descripcion, costo});
          console.log(servicio)
          await servicio.save();

          return res.status(200).send({
            status: "success",
            servicios: "Nuevo servicio guardado",
          });
        

      }catch(err){
        return res.status(404).send({
          status: "error",
          message: "No se ha guardado"
        });
     }
});

router.delete('/servicios/eliminar/:_id', async(req, res)=>{
    console.log(req.params._id);
    await ServicioModel.findByIdAndRemove(req.params._id).lean();
    return res.status(200).send({
      status: "success",
      message: "Eliminado",
    });
});


router.get('/servicios/actualizar/:_id', async(req, res)=>{
  let servicioId = req.params._id;
  const servicioUnico = await ServicioModel.findById(servicioId);
  console.log(servicioUnico);
  
 if(servicioUnico){
  return res.status(200).send(
    servicioUnico
    );

 }else{
  return res.status(500).send(error);
 }
});

router.put('/servicios/actualizar-servicio/:_id', async (req, res) => {
  let servicioId = req.params._id;
  const servicioUpdated = await ServicioModel.findOneAndUpdate(servicioId, req.body)

  if(servicioUpdated){
    return res.status(200).send(servicioUpdated);
   }else{
    return res.status(500).send(error);
   }
  
});




module.exports = router;