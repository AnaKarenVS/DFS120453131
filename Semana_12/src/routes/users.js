const express  = require('express'); //servidor 
const passport = require('passport');
const router = express.Router();
const User = require('../model/Usuario');

router.post('/users/nuevo', (req,res)=>{
console.log(req.body);
res.send("usuario registrado");
let errors =[];
const {nombreUsuario, mail, password, confirmPassword}=req.body;


});

module.exports = router;