var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var calificacionSchema = new Schema({
  calificacion: {type: Number, min: 0.0, max: 10.0},
  tipo: {type: String, required: true, enum: ["parcial", "ordinario"]},

  clase: {type: Schema.ObjectId, ref: "clase", required: true},
  alumno: {type: Schema.ObjectId, ref: "alumno", required: true}
});

module.exports = mongoose.model("Calificacion", calificacionSchema);
