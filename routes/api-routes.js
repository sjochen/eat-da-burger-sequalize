// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(dbburgers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbburgers);
  });
});

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name);
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(dbburgers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbburgers);
    });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbburgers) {
      res.json(dbburgers);
    });
  });
};
