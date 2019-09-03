// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        console.log("burgers started here");
        db.Burger.findAll({}).then(function (burgers) {
            var hbsObject = {
                burgers: burgers
            }
            res.render("index", hbsObject);
        })

    });




};
