module.exports = function (app) {
  var GrupoController = require("../controllers/grupocontroller.js");

  app.route("/api/grupos")
    .get(GrupoController.list)
    .post(GrupoController.create);

  app.route("/api/grupos/:id")
    .get(GrupoController.get)
    .put(GrupoController.update)
    .delete(GrupoController.delete);

}
