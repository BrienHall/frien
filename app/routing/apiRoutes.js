var friends = require('../data/friends');


module.exports = function(app) {
  app.get('/data/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/data/friends', function(req, res) {
    var form = req.body;
    var friend = { name: form.name, photo: form.photo, scores: Array(10).fill(0) };
    for (var s in friend.scores) {
      friend.scores[s] = parseInt(form[`question${parseInt(s) + 1}`]);
    }
    res.json(mostCompatible(friend, friends));
  });
}