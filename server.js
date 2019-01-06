// Dependencies
var express = require("express");
var path = require ("path");

// Tells node that we are creating an "express" server
var app = express ();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
// parse application/JSON
app.use(express.json())

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// what you do here is tell server.js to include the html-routes and use express as the app

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// 
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
