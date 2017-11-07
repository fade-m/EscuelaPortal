module.exports = function (app) {
  var AlumnoController = require("../controllers/alumnocontroller.js");

  app.route("/api/alumnos")
    .get(AlumnoController.list)
    .post(AlumnoController.create);

  app.route("/api/alumnos/:id")
    .get(AlumnoController.get)
    .put(AlumnoController.update)
    .delete(AlumnoController.delete);

}
