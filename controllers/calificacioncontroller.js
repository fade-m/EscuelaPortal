var mongoose = require("mongoose");
require("../models/calificacion.js");

var Calificacion = mongoose.model("Calificacion");

exports.list = function (req, res) {
  Calificacion.find({})
    .populate("clase")
    .populate("alumno")
    .exec(function (err, calificaciones) {
      if (err) res.send(err);
      res.json(calificaciones);
    });
}

exports.get = function (req, res) {
  Calificacion.findOne({_id: req.params.id})
    .populate("clase")
    .populate("alumno")
    .exec(function (err, clase) {
      if (err) res.send(err);
      res.json(clase);
    });
}

exports.create = function (req, res) {
  var clase = new Calificacion(req.body);
  clase.save(function (err, clase) {
    if (err) res.send(err);
    res.json(clase);
  });
}

exports.delete = function (req, res) {
  Calificacion.remove({_id: req.params.id}, function (err, clase) {
    if (err) res.send(err);
    res.json(clase);
  });
}

exports.update = function (req, res) {
  Calificacion.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, clase) {
      if (err) res.send(err);
      res.json(clase);
    }
  );
}
