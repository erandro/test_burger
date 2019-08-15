// Defining dependencies
var express = require("express");
var exphbs = require("express-handlebars");

var name = "bob";
// Creating server app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up static path
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

// Path to Routes
var routes = require("./controllers/burgers_controller");
app.use(routes);

// Listener
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
