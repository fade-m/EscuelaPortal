var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var semestreSchema = new Schema({
  nombre: {type: String, required: true, min: 4},
  numero: {type: Number, required: true}

  grupos: [{type: Schema.ObjectId, ref: "Grupo"}]
});

module.exports = mongoose.model("Semestre", semestreSchema);
