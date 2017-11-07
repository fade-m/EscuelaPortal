var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var alumnoSchema = new Schema({
  nombre: {type: String, required: true, min: 3},
  apellidos: {type: String, min: 3},
  fechaNacimiento: {type: Date, required: true},
  sexo: {type: String, enum: ["Masculino", "Femenino"]},
  matricula: {type: String, required: true, unique: true},
  password: {type: String, min: 4},

  licenciatura: {type: Schema.ObjectId, ref: "Licenciatura", required: true},
  grupos: [{type: Schema.ObjectId, ref: "Grupo"}],
  calificaciones: [{type: Schema.ObjectId, ref: "Calificacion"}]
});

module.exports = mongoose.model("Alumno", alumnoSchema);
