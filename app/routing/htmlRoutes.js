var express = require("express");
var path = require ("path");


module.exports =function(app){
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // A GET Route to /survey which should display the survey page.

  app.get("/survey", function(req, res) {
    // res.send("this is working");
    res.sendFile(path.join(__dirname, "../public/survey.html"));;
    });

  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.post('/', function (req, res) {
      res.send('Got a POST request')
    })

};



