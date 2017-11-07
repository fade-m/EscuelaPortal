var mongoose = require("mongoose");
require("../models/docente.js");

var Docente = mongoose.model("Docente");

exports.list = function (req, res) {
  Docente.find({})
    .populate("clases")
    .exec(function (err, docentes) {
      if (err) res.send(err);
      res.json(docentes);
    });
}

exports.get = function (req, res) {
  Docente.findOne({_id: req.params.id})
    .populate("clases")
    .exec(function (err, docente) {
      if (err) res.send(err);
      res.json(docente);
    });
}

exports.create = function (req, res) {
  var docente = new Docente(req.body);
  docente.save(function (err, docente) {
    if (err) res.send(err);
    res.json(docente);
  });
}

exports.delete = function (req, res) {
  Docente.remove({_id: req.params.id}, function (err, docente) {
    if (err) res.send(err);
    res.json(docente);
  });
}

exports.update = function (req, res) {
  Docente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, docente) {
      if (err) res.send(err);
      res.json(docente);
    }
  );

}
