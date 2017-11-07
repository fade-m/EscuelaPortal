var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var licenciaturaSchema = new Schema({
  nombre: {type: String, required: true, min: 6},

  alumnos: [{type: Schema.ObjectId, ref: "Alumno"}],
  grupos: [{type: Schema.ObjectId, ref: "Grupo"}],
  materias: [type: Schema.ObjectId, ref: "Materia"]
});

module.exports = mongoose.model("Licenciatura", licenciaturaSchema);
