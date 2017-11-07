module.exports = function (app) {
  var DocenteController = require("../controllers/docentecontroller.js");

  app.route("/api/docentes")
    .get(DocenteController.list)
    .post(DocenteController.create);

  app.route("/api/docentes/:id")
    .get(DocenteController.get)
    .put(DocenteController.update)
    .delete(DocenteController.delete);

}
