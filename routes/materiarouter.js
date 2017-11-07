module.exports = function (app) {
  var MateriaController = require("../controllers/materiacontroller.js");

  app.route("/api/materias")
    .get(MateriaController.list)
    .post(MateriaController.create);

  app.route("/api/materias/:id")
    .get(MateriaController.get)
    .put(MateriaController.update)
    .delete(MateriaController.delete);

}
