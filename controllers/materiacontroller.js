var mongoose = require("mongoose");
require("../models/materia.js");

var Materia = mongoose.model("Materia");

exports.list = function (req, res) {
  Materia.find({})
    .populate("licenciatura")
    .populate("clases")
    .exec(function (err, materias) {
      if (err) res.send(err);
      res.json(materias);
    });
}

exports.get = function (req, res) {
  Materia.findOne({_id: req.params.id})
    .populate("licenciatura")
    .populate("clases")
    .exec(function (err, materia) {
      if (err) res.send(err);
      res.json(materia);
    });
}

exports.create = function (req, res) {
  var materia = new Materia(req.body);
  materia.save(function (err, materia) {
    if (err) res.send(err);
    res.json(materia);
  });
}

exports.delete = function (req, res) {
  Materia.remove({_id: req.params.id}, function (err, materia) {
    if (err) res.send(err);
    res.json(materia);
  });
}

exports.update = function (req, res) {
  Materia.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, materia) {
      if (err) res.send(err);
      res.json(materia);
    }
  );

}
