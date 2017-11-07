var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var claseSchema = new Schema({
  grupo: {type: Schema.ObjectId, ref: "Grupo", required: true},
  docente: {type: Schema.ObjectId, ref: "Docente" },
  materia: {type: Schema.ObjectId, ref: "Materia", required: true},
  calificaciones: [{type: Schema.ObjectId, ref: "Calificacion"}]
});

module.exports = mongoose.model("Clase", claseSchema);
