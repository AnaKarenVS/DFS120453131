const { request } = require("express");
const express = require("express");
const app = express();
const usuarioRoute = express.Router();

let Usuario = require("../models/usuario");

usuarioRoute.route("/create").post((req, res, next) => {
  Usuario.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

usuarioRoute.route("/").get((req, res) => {
  Usuario.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

usuarioRoute.route("/read/:id").get((req, res) => {
  Usuario.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

usuarioRoute.route("update/:id").put((req, res, next) => {
  Usuario.findByIdAndUpdate(req.params.id),
    {
      $set: req.body,
    },
    (error, data) => {};
});

usuarioRoute.route("/delete/:id").delete((req, res, next) => {
  usuario.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = usuarioRoute;