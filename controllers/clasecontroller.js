var mongoose = require("mongoose");
require("../models/clase.js");

var Clase = mongoose.model("Clase");

exports.list = function (req, res) {
  Clase.find({})
    .populate("grupo")
    .populate("docente")
    .populate("materia")
    .populate("calificaciones")
    .exec(function (err, clases) {
      if (err) res.send(err);
      res.json(clases);
    });
}

exports.get = function (req, res) {
  Clase.findOne({_id: req.params.id})
    .populate("grupo")
    .populate("docente")
    .populate("materia")
    .populate("calificaciones")
    .exec(function (err, clase) {
      if (err) res.send(err);
      res.json(clase);
    });
}

exports.create = function (req, res) {
  var clase = new Clase(req.body);
  clase.save(function (err, clase) {
    if (err) res.send(err);
    res.json(clase);
  });
}

exports.delete = function (req, res) {
  Clase.remove({_id: req.params.id}, function (err, clase) {
    if (err) res.send(err);
    res.json(clase);
  });
}

exports.update = function (req, res) {
  Clase.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, clase) {
      if (err) res.send(err);
      res.json(clase);
    }
  );
}
