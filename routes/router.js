module.exports = function (app) {

  var alumnoRouter = require("./alumnorouter.js");
  alumnoRouter(app);

  var calificacionRouter = require("./calificacionrouter.js");
  calificacionRouter(app);

  var claseRouter = require("./claseRouter.js");
  claseRouter(app);

  var docenteRouter = require("./docenterouter.js");
  docenteRouter(app);

  var grupoRouter = require("./gruporouter.js");
  grupoRouter(app);

  var licenciaturaRouter = require("./licenciaturarouter.js");
  licenciaturaRouter(app);

  var materiaRouter = require("./materiarouter.js");
  materiaRouter(app);

  var semestreRouter = require("./semestrerouter.js");
  semestreRouter(app);
}
