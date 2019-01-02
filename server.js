// bodyParser allows you to receive information back in JSON format so it's easy to manipulate
var bodyParser = require ('body-parser');
var express = require('express');
var path = require ('path');

var app = express ();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));

// parse application/JSON
app.use(bodyParser.json())

// this is setting a header and asking us to write what we are posting and asking us for a request. This will not let the app work since it's not a needed function for this app.
// app.use(function(req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body,null, 2))
// });

// what you do here is tell server.js to include the html-routes and use express as the app
// require('./api-routes.js')(app);
// require('./html-routes.js')(app);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
