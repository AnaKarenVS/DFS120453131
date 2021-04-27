"use strict";
const express = require('express'); //servidor 
const passport = require('passport');
const { default: validator } = require('validator');
const router = express.Router();
const CervezaModel = require ('../model/cervezas');

router.get('/cervezas/lista', async (req, res) => {
    const cervezas = await CervezaModel.find().sort({ _id: 'asc' }).lean();
    console.log(cervezas);
   if(!cervezas.length){
    return res.status(200).send({
        status: "success",
        cervezas: "No hay datos que mostrar",
      });

   }else{
    return res.status(200).send({
        status: "success",
        cervezas
      });
   }

});

router.post('/agregar/cerveza', async(req,res)=>{
    const { imagen, codigo, nombre, precio, descripcion } = req.body;
     try {
        const validate_imagen = !validator.isEmpty(imagen);
        const validate_codigo = !validator.isEmpty(codigo);
        const validate_nombre = !validator.isEmpty(nombre);
        const validate_precio = !validator.isEmpty(precio);
        const validate_descripcion = !validator.isEmpty(descripcion);

        const codigoCerveza = await CervezaModel.findOne({codigo:codigo}); //se valida que no exista el mismo codigo

        if(codigoCerveza){
          return res.status(200).send({
            status: "error",
            cervezas: "El codigo ya fue registrado",
          });

        }else{
          var cerveza = new CervezaModel({imagen, codigo, nombre, precio, descripcion});
          await cerveza.save();

          return res.status(200).send({
            status: "success",
            cervezas: "Nueva cerveza guardada",
          });
        }

      }catch(err){
        return res.status(404).send({
          status: "error",
          message: "No se ha guardado"
        });
     }

});

module.exports = router;