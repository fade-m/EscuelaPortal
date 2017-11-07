var mongoose = require("mongoose");
require("../models/semestre.js");

var Semestre = mongoose.model("Semestre");

exports.list = function (req, res) {
  Semestre.find({})
    .populate("grupos")
    .exec(function (err, semestres) {
      if (err) res.send(err);
      res.json(semestres);
    });
}

exports.get = function (req, res) {
  Semestre.findOne({_id: req.params.id})
    .populate("grupos")
    .exec(function (err, semestre) {
      if (err) res.send(err);
      res.json(semestre);
    });
}

exports.create = function (req, res) {
  var semestre = new Semestre(req.body);
  semestre.save(function (err, semestre) {
    if (err) res.send(err);
    res.json(semestre);
  });
}

exports.delete = function (req, res) {
  Semestre.remove({_id: req.params.id}, function (err, semestre) {
    if (err) res.send(err);
    res.json(semestre);
  });
}

exports.update = function (req, res) {
  Semestre.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},
    function (err, semestre) {
      if (err) res.send(err);
      res.json(semestre);
    }
  );

}
