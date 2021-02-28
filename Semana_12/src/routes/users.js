const express  = require('express'); //servidor 
const passport = require('passport');
const router = express.Router();
const User = require('../model/usuario');

router.get('/users',(req,res)=>{
    res.send("Usuarios desde la BD");
});

router.get('/users/entrar',(req, res)=>{
    res.render('../views/users/Login.hbs')
});

router.get('/users/nuevo',(req, res)=>{
    res.render('../views/users/Signup.hbs')
});

router.post('/users/nuevo', async (req,res)=>{
    console.log(req.body);
    let errors =[];
    const {nombreUsuario, email, password, confirmPassword} = req.body;

        if(nombreUsuario.length <= 1){
            errors.push({
                text: 'El nombre es muy corto'
            });
        }
        if(email.length <= 0){
            errors.push({
                text: 'El correo no es valido'
            });
        }
        if(password.length < 8){
            errors.push({
                text: 'Minimo 8 caracteres'
            });
        }
        if(errors.length > 0){
            res.render('/users/nuevo', {errors, nombreUsuario, password, email});
            console.log('ERROR');
            console.table(errors);
        }else{
            //verificamos que no haya un usuario registrado
                const mailUser = await User.findOne({email: email});
                console.log('Se verifica que no exista el usuario');
            
            if(mailUser){
                console.error("el usuario ya existe");
                errors.push({text: "el usuario ya existe"});
                errors.forEach(element => {
                    console.log(element);
                });

                req.flash('errorMessage', 'El correo ya esta registrado');
                res.redirect('/users/nuevo');
            }else{
                //CRUD
                console.log("el usuario no existe");
                //CREATE (solamente del lado del servidor)
                //llaves candidatas: cuando deben ser diferentes forzosamente como el email o usuario
                const newUser = new User({nombreUsuario, email, password}); //1er paso es importante se creo el objeto
                newUser.password = await newUser.encryptPassword(password);// se encripta la variable password
                //ahora se guarda el objeto dentrode la BD usuario dentro de la BD
                await newUser.save();
                console.log("Se registro el usuario");
                req.flash('successMessage', 'Usuario registrado exitosamente');
                res.redirect('/users/nuevo');
            }
        }
});

router.post('/users/entrar', passport.authenticate('local', {
    successRedirect: '/usuarios/listaUsuarios',
    failureRedirect: '/users/entrar',
    failureFlash: true

}));

router.get('/usuarios/listaUsuarios', async(req, res)=>{
    const usuarios = await  User.find().sort({date:'desc'}).lean();
    console.log(usuarios);
    res.render('../views/users/ListaUsuarios.hbs', {usuarios});

});




module.exports = router;