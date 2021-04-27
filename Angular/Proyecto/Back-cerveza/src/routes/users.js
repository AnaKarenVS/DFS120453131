"use strict";
const express = require("express"); //servidor
const passport = require("passport");
const router = express.Router();
const User = require("../model/usuario");
var validator = require("validator");

router.post("/usuario/nuevo", async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    var validate_name = !validator.isEmpty(nombre);
    var validate_email = !validator.isEmpty(email);
    var validate_password = !validator.isEmpty(password);

    const mailUser = await User.findOne({ email: email });
    console.log("Se verifica que no exista el usuario");
    console.log(mailUser);

    if (mailUser) {
      return res.status(404).send({
        status: "error",
        empleado: "El usuario ya existe",
      });
    } else {
      console.log("el usuario no existe");
      var empleado = new User({ nombre, email, password });
      empleado.password = await empleado.encryptPassword(password);
      await empleado.save();

      return res.status(200).send({
        status: "success",
        empleado: "Guardado",
      });
    }
  } catch (err) {
    return res.status(200).send({
      status: "error",
      message: "Faltan datos por enviar!!!",
    });
  }
});

router.get("/usuario/lista", async (req, res) => {
  const usuarios = await User.find().sort({ date: "desc" }).lean();

  res.header("Access-Control-Allow-Origin", "*");

  console.log(usuarios);
  if (!usuarios) {
    return res.status(404).send({
      status: "error",
      message: "No hay datos!!!",
    });
  }

  return res.status(200).send({
    status: "success",
    usuarios,
  });
});

router.post("/login", async(req, res)=>{
  return res.status(200).send({
    status: "error",
    message: "No se puede loguear",
  });
});

module.exports = router;
