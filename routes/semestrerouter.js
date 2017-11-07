module.exports = function (app) {
  var SemestreController = require("../controllers/semestrecontroller.js");

  app.route("/api/semestres")
    .get(SemestreController.list)
    .post(SemestreController.create);

  app.route("/api/semestres/:id")
    .get(SemestreController.get)
    .put(SemestreController.update)
    .delete(SemestreController.delete);

}
