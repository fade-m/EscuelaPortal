var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var docenteSchema = new Schema({
  nombre: {type: String, required: true, min: 3},
  apellidos: {type: String, min: 3},
  fechaNacimiento: {type: Date, required: true},
  sexo: {type: String, enum: ["Masculino", "Femenino"]},
  nip: {type: String, required: true, unique: true},
  password: {type: String, min: 4},

  clases: [{type: Schema.ObjectId, ref: "Clase"}]
});

module.exports = mongoose.model("Docente", docenteSchema);
