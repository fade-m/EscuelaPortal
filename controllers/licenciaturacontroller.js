var mongoose = require("mongoose");
require("../models/licenciatura.js");

var Licenciatura = mongoose.model("Licenciatura");

exports.list = function (req, res) {
  Licenciatura.find({})
    .populate("alumnos")
    .populate("grupos")
    .populate("materias")
    .exec(function (err, licenciaturas) {
      if (err) res.send(err);
      res.json(licenciaturas);
    });
}

exports.get = function (req, res) {
  Licenciatura.findOne({_id: req.params.id})
    .populate("alumnos")
    .populate("grupos")
    .populate("materias")
    .exec(function (err, licenciatura) {
      if (err) res.send(err);
      res.json(licenciatura);
    });
}

exports.create = function (req, res) {
  var licenciatura = new Licenciatura(req.body);
  licenciatura.save(function (err, licenciatura) {
    if (err) res.send(err);
    res.json(licenciatura);
  });
}

exports.delete = function (req, res) {
  Licenciatura.remove({_id: req.params.id}, function (err, licenciatura) {
    if (err) res.send(err);
    res.json(licenciatura);
  });
}

exports.update = function (req, res) {
  Licenciatura.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, licenciatura) {
      if (err) res.send(err);
      res.json(licenciatura);
    }
  );

}
