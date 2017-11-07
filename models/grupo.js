var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var grupoSchema = new Schema({
  nombre: {type: String, required: true, min: 2},

  semestre: {type: Schema.ObjectId, ref: "Semestre"},
  licenciatura: {type: Schema.ObjectId, ref: "Licenciatura"},
  alumnos: [{type: Schema.ObjectId, ref: "Alumno"}],
  clases: [{type: Schema.ObjectId, ref: "Clase"}]
});

module.exports = mongoose.model("Grupo", grupoSchema);
