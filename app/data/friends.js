// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

var surveyData = [
    {
      name: "Susan",
      photo: "image.png",
      scores: ["5","1","4","4","5","1","2","5","4","1"] 
    },
    {
      name: "Albert",
      photo: "image.png",
      scores: ["2","4","1","1","5","3","1","5","5","5"] 
    }, 
    {
      name: "Carmen",
      photo: "image.png",
      scores: ["1","1","1","2","2","2","3","3","3","1"] 
    },   {
      name: "Jesus",
      photo: "image.png",
      scores: ["3","2","2","2","2","2","1","5","4","5"] 
    },
    {
      name: "Angel",
      photo: "image.png",
      scores: ["4","4","4","4","1","1","3","3","2","1"] 
    }
  ];
  // console.log(surveyData);
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = function(app){
        //retreiving stored objects with person's data
        app.post("/survey", function(req, res){
          var newPerson = req.body;
         newPerson.routeName =newPerson.name.replace(/\s+/g, "").toLowerCase();
          // console.log(newPerson);
          surveyData.push(person);
      });
      return surveyData;
    };
  

module.exports = surveyData;

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5





// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.