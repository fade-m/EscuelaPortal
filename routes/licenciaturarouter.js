module.exports = function (app) {
  var LicenciaturaController = require("../controllers/licenciaturacontroller.js");

  app.route("/api/licenciaturas")
    .get(LicenciaturaController.list)
    .post(LicenciaturaController.create);

  app.route("/api/licenciaturas/:id")
    .get(LicenciaturaController.get)
    .put(LicenciaturaController.update)
    .delete(LicenciaturaController.delete);

}
