// require dependencies
var express = require("express");
var mongoose =require("mongoose");
var exphbs= require("express-handlebars");
var logger = require("morgan");
// set port
var PORT = process.env.PORT || 3000;
// Initialize Express
var app = express();
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require our routes file
require("./config/routes")(app);
// Static directory
app.use(express.static(__dirname + "./public"));
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });
//listen on port
app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });