module.exports = function (app) {
  var CalificacionController = require("../controllers/calificacioncontroller.js");

  app.route("/api/calificaciones")
    .get(CalificacionController.list)
    .post(CalificacionController.create);

  app.route("/api/calificaciones/:id")
    .get(CalificacionController.get)
    .put(CalificacionController.update)
    .delete(CalificacionController.delete);

}
