//se crean las constantes
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;//para trabajar con una clase interna llamada srategy
const mongoose = require('mongoose');
const User = require('../model/usuario');


//usaremos passport
passport.use(new LocalStrategy({
usernameField: 'email'
}, async(email, password, done)=>{
    const user = await User.findOne({email: email});
    console.log(user);
    if(!user){
        console.log('Usuario no encontrado');
        return done(null, false, {message: 'User not found'});// porque el usuario no existe

    }else{
        const match = await user.matchPassword(password);
            if (match){
                 console.log("Good pass")
                return done(null, user);
            }else{
                console.log("bad pass");
                return done(null, false, {message: 'Incorrect password'})
            }
    }   //se necesita hacer un await para esperar a que se haga la conexion
} //haras una funcion asincrona

));   //las estrategias son controles que permiten trabjar con el flujo de los datos

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id,(err, user)=>{
        done(err, user);
    });
});