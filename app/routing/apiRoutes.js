var surveyData = require("../data/friends.js");
var differences ="";
var newFriend ="";

// ROUTING
module.exports = function(app) {

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get('/api/data/friends', function (req, res) {
    res.send(surveyData);
  });

// // The app.post request handles when a user submits a form 
app.post('/api/data/friends', function (req, res) {
 var newFriend = req.body;
 console.log(newFriend);
 var differences = [""];

 if(surveyData.length > 1){
   surveyData.forEach(function (user){
     var totalDifference =0;

// compare the answers and add the absolute value of the difference to the total difference.
  for (var i = 0; i < newFriend.length; i++) {
  var otherAnswer = user.answers[i];
  var thisAnswer = newFriend.answers[i];
  var difference = +otherAnswer - +thisAnswer;
  totalDifference += Math.abs(difference);
  }

  differences.push(totalDifference);
  });
  
}
});

// Find the minimum difference score.
var minimumDifference = Math.min.apply(0, differences);

// Since there may be more than one potential friend with that score, create an array.
var bestMatches = [];

// For each item in differences, if it is equal to the minimumDifference, add the corresponding friendData to the bestMatches array.
for (var i = 0; i < differences.length; i++) {
    if (differences[i] === minimumDifference) {
        bestMatches.push(surveyData[i]);
   
    res.json(bestMatches);
  } else {
      res.json(surveyData);
      }
} 

// Once you're done comparing, add the new user to the potential friends data.
surveyData.push(newFriend);

};
