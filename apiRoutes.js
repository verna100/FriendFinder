// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


// var tableData = require ('./table-data.js');
// var waitListData = require ('./waitinglist-data.js');

// module.exports = function (app){

//     app.get('./table-data',function (req, res){
//         res.json(tableData);
//     });


//     app.get('./waitinglist-data',function (req, res){
//         res.json(waitListData);
//     });

//     app.post('./viewtables.html', function (req, res){
//         if(tableData.length < 5){
//             tableData.push (req.body);
//             res.json(true);
//         }else{
//             waitListData.push(req.body);
//             res.json(false);
//         }
//     });
    
//     app.post('/api/clear', function(){
//         tableData = [];
//         waitListData = [];
//         console.log(tableData);
//         console.log(waitListData);
//     })
    
//  }  