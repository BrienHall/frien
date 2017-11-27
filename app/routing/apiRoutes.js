//load data from our friends file
var friendList = require('../data/friends.js')


//routing
module.exports = function(app){

  //get route to show a JSON of all available friends
  app.get('/api/friends', function(req, res){
    res.json(friendList)
  })

  //post route to handle friend input
  app.post('/api/new', function(req, res){
    

    //compare friends looking for different scores
    var friendScores = req.body.scores
    var scoreDifference = []
    
    //double for loop, looping through both req.body.scores and each person in friendList
    // console.log('friendList length ' + friendList.length)
    for(var i = 0; i < friendList.length; i++){
      var totalDifference = 0
      console.log('current friend ' + friendList[i].name)

      for(var j = 0; j < friendScores.length; j++){

        totalDifference += Math.abs(friendList[i].scores[j] - friendScores[j])

      }
      scoreDifference.push(totalDifference) 
    }

    //function to find the smallest number in scoreDifference Array
    Array.min = function( scoreDifference ){
    var inOf =  Math.min.apply( Math, scoreDifference );
    return scoreDifference.indexOf(inOf)
    };
    //store index of best match into an array
    var bestMatchIndex = Array.min(scoreDifference);

    //alert user of their best match
    console.log('best match is ' + friendList[bestMatchIndex].name + "!")
    var bestMatch = friendList[bestMatchIndex]
    //push new friend to the frienList
    friendList.push(req.body)
    console.log('new friend list ' + friendList.length)


    res.json(bestMatch)
  })

}