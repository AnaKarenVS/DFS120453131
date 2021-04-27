const express = require('express'); //servidor 
const router = express.Router();
const ServicioModel = require('../model/servicios');

router.get('/servicios/listado', async (req, res) => {
    const servicios = await ServicioModel.find({}).lean();
    console.log(servicios);
    res.render('servicios/ListaServicios', { servicios });
});

router.get('/servicios/guardar-servicio', (req, res) => {
    res.render('servicios/NuevoServicio');
});

router.post('/servicios/guardar-servicio', async (req, res) => {
    const { nombreServicio, descripcionServicio, costoServicio } = req.body;
    console.log("Lo que trae el formulario", req.body);
    const errors = []
    if (!nombreServicio) {
        errors.push({
            text: 'Falta el nombre del servicio'
        });
    }
    if (!descripcionServicio) {
        errors.push({
            text: 'Falta la descripción del servicio'
        });
    }
    if (!costoServicio) {
        errors.push({
            text: 'Falta el costo del servicio'
        });
    }

    if (errors.length > 0) {
        errors.forEach(element => {
            console.log(element);
            req.flash('errorMessage', element.text);
        });
        res.redirect('/servicios/listado');

    } else {
        const newServicio = new ServicioModel({
            nombreServicio,
            descripcionServicio,
            costoServicio
        });
        await newServicio.save();
        req.flash('successMessage', 'Servicio Agregado');
        res.redirect('/servicios/listado');
    }

});

router.get('/servicios/eliminar-servicio/:_id', async(req, res)=>{
    console.log(req.params._id);
    await ServicioModel.findByIdAndRemove(req.params._id).lean();
    req.flash('successMessage', 'Servicio eliminado');
    res.redirect('/servicios/listado');
});


router.get('/servicios/actualizar-servicio/:_id', async(req, res)=>{
    const updateServicio= await ServicioModel.findById(req.params._id).lean();
    console.log(updateServicio);
    res.render('servicios/EditarServicio', { updateServicio });
});

router.put('/servicios/actualizar-servicio/:_id', async (req, res) => {
    const {nombreServicio, descripcionServicio, costoServicio} = req.body;
    await ServicioModel.findByIdAndUpdate(req.params._id, {nombreServicio, descripcionServicio, costoServicio});
    req.flash('successMessage', 'Registro actualizado');
    res.redirect('/servicios/listado');
});




module.exports = router;