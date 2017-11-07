var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var materiaSchema = new Schema({
  nombre: {type: String, required: true, min: 4},
  codigo: {type: String, required: true, min: 4},

  licenciatura: {type: Schema.ObjectId, ref: "Licenciatura", required: true},
  clases: [{type: Schema.ObjectId, ref: "Clase"}]
});

module.exports = mongoose.model("Materia", materiaSchema);
