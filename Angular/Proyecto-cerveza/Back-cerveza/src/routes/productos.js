"use strict";
const express = require('express'); //servidor 
const passport = require('passport');
const { default: validator } = require('validator');
const router = express.Router();
const ProductoModel = require ('../model/productos');

router.get('/productos/lista', async (req, res) => {
    const productos = await ProductoModel.find().sort({ _id: 'asc' }).lean();
   if(!productos.length){
    return res.status(200).send(productos);
   }else{
    return res.status(200).send(productos);
   }

});

router.post('/agregar/producto', async(req,res)=>{
    const { codigo, nombre, precio, descripcion } = req.body;
     try {
        const validate_codigo = !validator.isEmpty(codigo);
        const validate_nombre = !validator.isEmpty(nombre);
        const validate_precio = !validator.isEmpty(precio);
        const validate_descripcion = !validator.isEmpty(descripcion);

        const codigoProducto = await ProductoModel.findOne({codigo:codigo});

        if(codigoProducto){
          return res.status(200).send({
            status: "error",
            productos: "El codigo ya fue registrado",
          });

        }else{
          var producto = new ProductoModel({codigo, nombre, precio, descripcion});
          await producto.save();

          return res.status(200).send({
            status: "success",
            productos: "Nuevo producto guardado",
          });
        }

      }catch(err){
        return res.status(404).send({
          status: "error",
          message: "No se ha guardado"
        });
     }

});


router.delete('/productos/eliminar/:_id', async(req, res)=>{
  console.log(req.params._id);
  await ProductoModel.findByIdAndRemove(req.params._id).lean();
  return res.status(200).send({
    status: "success",
    message: "Eliminado",
  });
});


router.get('/productos/actualizar/:_id', async(req, res)=>{
  const updateProducto = await ProductoModel.findById(req.params._id).lean();
  if(updateProducto){
    return res.status(200).send(
      updateProducto
      );
  
   }else{
    return res.status(500).send(error);
   }
});

router.put('/productos/actualizar-producto/:_id', async (req, res) => {
  let productoId = req.params._id; 
    const updateProducto = await ProductoModel.findOneAndUpdate(productoId, req.body)
  
    if(updateProducto){
      return res.status(200).send(updateProducto);
     }else{
      return res.status(500).send(error);
     }

});

module.exports = router;