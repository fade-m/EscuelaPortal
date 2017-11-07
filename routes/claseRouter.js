module.exports = function (app) {
  var ClaseController = require("../controllers/clasecontroller.js");

  app.route("/api/clases")
    .get(ClaseController.list)
    .post(ClaseController.create);

  app.route("/api/clases/:id")
    .get(ClaseController.get)
    .put(ClaseController.update)
    .delete(ClaseController.delete);

}
