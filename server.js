var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

var db = require("./models");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);
// app.use(routes);

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });