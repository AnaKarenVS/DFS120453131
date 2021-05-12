const express  = require('express'); //servidor 
const path = require('path'); //para las rutas
const exphs = require('express-handlebars'); //tecnologia que permite inyectar codigo, alerta de errores, sin recargar
const session = require('express-session');// para sessiones web
const flash = require('connect-flash'); // alertas 
const methodOverride = require('method-override');//sobreescribe
const passport = require('passport');
const cors =  require('cors');
const app = express();

require('./database');
require('./src/config/passport');

//settings
app.set('port', process.env.PORT || 3000);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//las sesiones siempre tienen 
app.use(methodOverride('_method'));

app.use(session({
    secret: 'Whatever',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());   //iniicializa los mensajes  flash es para mensajes

app.use((req, res, next)=>{
    res.locals.successMessage = req.flash('successMessage');
    res.locals.errorMessage = req.flash('errorMessage');
    next()
})

//rutas
//app.use(require('./src/routes/index'));
app.use(require('./src/routes/users'));
app.use(require('./src/routes/servicios'));
app.use(require('./src/routes/productos'));
app.use(require('./src/routes/empleados'));
//servidor
app.listen(app.get('port'), () => {
    console.log("Servidor levantado");
});
