var mongoose = require("mongoose");
require("../models/grupo.js");

var Grupo = mongoose.model("Grupo");

exports.list = function (req, res) {
  Grupo.find({})
    .populate("semestre")
    .populate("licenciatura")
    .populate("alumnos")
    .populate("clases")
    .exec(function (err, grupos) {
      if (err) res.send(err);
      res.json(grupos);
    });
}

exports.get = function (req, res) {
  Grupo.findOne({_id: req.params.id})
    .populate("semestre")
    .populate("licenciatura")
    .populate("alumnos")
    .populate("clases")
    .exec(function (err, grupo) {
      if (err) res.send(err);
      res.json(grupo);
    });
}

exports.create = function (req, res) {
  var grupo = new Grupo(req.body);
  grupo.save(function (err, grupo) {
    if (err) res.send(err);
    res.json(grupo);
  });
}

exports.delete = function (req, res) {
  Grupo.remove({_id: req.params.id}, function (err, grupo) {
    if (err) res.send(err);
    res.json(grupo);
  });
}

exports.update = function (req, res) {
  Grupo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, grupo) {
      if (err) res.send(err);
      res.json(grupo);
    }
  );

}
