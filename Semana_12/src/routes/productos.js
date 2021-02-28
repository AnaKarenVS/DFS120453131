const express  = require('express'); //servidor 
const passport = require('passport');
const router = express.Router();
const Producto = require('../model/producto');

router.get('/productos/listaProductos', async (req, res)=>{
    const productos = await  Producto.find().sort({_id:'asc'}).lean();
    console.log(productos);
    res.render('productos/ListaProductos', {productos});
   
});

router.get('/productos/agregarProductos',(req, res)=>{
    res.render('productos/AgregarProducto');
});

router.post('/productos/agregarProductos', async (req, res)=>{
    const { _id, nombreProducto, descripcion, cantidad, precio} = req.body;
    console.log(req.body);
    const errors = []
    if(!_id){
        errors.push({
            text: 'Falta el ID del producto'
        });
    }
    if(!nombreProducto){
        errors.push({
            text: 'Falta el nombre del producto'
        });
    }
    if(!descripcion){
        errors.push({
            text: 'Falta la descripción del producto'
        });
    }
    if(!cantidad){
        errors.push({
            text: 'Falta la cantidad del producto'
        });
    }
    if(!precio){
        errors.push({
            text: 'Falta el precio del producto'
        });
    }

    if(errors.length > 0){
        errors.forEach(element => {
            console.log(element);
            req.flash('errorMessage', element.text);
        });
        res.redirect('/productos/listaProductos');
        console.table(errors);

    }else{
        const newProducto = new Producto({_id, nombreProducto, descripcion, cantidad, precio});
        await newProducto.save();
        req.flash('successMessage', 'Producto agregado correctamente');
        res.redirect('/productos/listaProductos');
    }

});


module.exports = router;