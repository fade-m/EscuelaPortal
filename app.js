var express = require("express");
var app = express();

var host = "mongodb://localhost/miportal";
var port = process.env.PORT || 3000;

var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect(host);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require("./routes/router.js");
router(app);

app.listen(port);
console.log("Running server at port " + port);
