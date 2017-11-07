var mongoose = require("mongoose");
require("../models/alumno.js");

var Alumno = mongoose.model("Alumno");

exports.list = function (req, res) {
  Alumno.find({})
    .populate("licenciatura")
    .populate("grupos")
    .populate("calificaciones")
    .exec(function (err, alumnos) {
      if (err) res.send(err);
      res.json(alumnos);
    });
}

exports.get = function (req, res) {
  Alumno.findOne({_id: req.params.id})
    .populate("licenciatura")
    .populate("grupos")
    .populate("calificaciones")
    .exec(function (err, alumno) {
      if (err) res.send(err);
      res.json(alumno);
    });
}

exports.create = function (req, res) {
  var alumno = new Alumno(req.body);
  alumno.save(function (err, alumno) {
    if (err) res.send(err);
    res.json(alumno);
  });
}

exports.delete = function (req, res) {
  Alumno.remove({_id: req.params.id}, function (err, alumno) {
    if (err) res.send(err);
    res.json(alumno);
  });
}

exports.update = function (req, res) {
  Alumno.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, alumno) {
      if (err) res.send(err);
      res.json(alumno);
    }
  );

}
