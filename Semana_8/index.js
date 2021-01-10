//npm init   ---- en la terminal para crear el package.json y un servidor con express o-o
//en el index.js  se crean todas las constates que van a instalar los paquetes a utilizar
const express  = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;
const operaciones =  require('./src/Operaciones');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(cookieParser('Secreto'));

app.use(session({
    secret: 'Secreto',
    resave: true, //Cada peticion que se haga la sesion no debe modificarse aunque se vuelva a inciar
    saveUninitialized: true // si se inicializa una peticion vacia la va a guardar

}));
//inicializar
app.use(passport.initialize());
//para el caso de las sesiones
app.use(passport.session());

//para autenticarse

passport.use(
    new PassportLocal(function(username, password, done){
        console.log(username);
        console.log(password);
        if(username === 'Ana' && password === '123'){
            return done(null, {id: 'Ana'});
        }else{
            done(null, false);
        }
    })
);

//serializar datos
passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    done(null, {id: 'Ana'});
});

//rutas
app.set('view engine','ejs');

app.get('/', function(req, res){
    res.render("Login.ejs");
});
app.get('/Login', function(req, res){
    res.render("Login.ejs");
});
app.get('/Bienvenido', function(req, res){
    res.render("Bienvenida.ejs");
});
app.get('/Calculadora', function(req, res){
    res.render("Calculadora.ejs");
});

app.post('/Login', passport.authenticate('local',{
    successRedirect: '/Bienvenido',
    failureRedirect: '/Login'
}));

app.post('/Calculadora', function(req, res){
    var num1 = req.body.num1;
    num1 = parseInt(num1);
    console.log(num1);
    var num2 = req.body.num2;
    num2 = parseInt(num2);
    console.log(num2);
    var tipo1 = req.body.tipo1;
    tipo1= parseInt(tipo1);
    console.log(tipo1);

    switch(tipo1) {
        case 1:
          // code block
          console.log("entre en uno")
          var resultado = operaciones.suma(num1, num2);
    console.log(resultado);
    res.render('Resultado', {resultado: resultado})
          break;
        case 2:
          // code block
          console.log("entre en dos")
          var resultado = operaciones.resta(num1, num2);
          console.log(resultado);
          res.render('Resultado', {resultado: resultado})
          break;
          case 3:
          // code block
          console.log("entre en tre")
          var resultado = operaciones.multiplicacion(num1, num2);
          console.log(resultado);
          res.render('Resultado', {resultado: resultado})
          break;
          case 4:
          // code block
          console.log("entre en cuatro")
          var resultado = operaciones.division(num1, num2);
          console.log(resultado);
          res.render('Resultado', {resultado: resultado})
          break;
        default:
          // code block
      }
   
});

//para levantar el servidor en el puerto
app.listen(3000, ()=> console.log("Server levantado"));