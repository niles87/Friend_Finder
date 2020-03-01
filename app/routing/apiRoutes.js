var potentials = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(potentials);
  });

  app.post("/api/friends", function(req, res) {
    var userInfo = req.body;

    console.log(userInfo);

    var userAnswers = userInfo.scores;

    var friendName = "";
    var friendPhoto = "";

    var totalDifference = 100;

    for (var i = 0; i < potentials.length; i++) {
      var difference = 0;
      for (var j = 0; j < userAnswers.length; j++) {
        difference += Math.abs(potentials[i].scores[j] - userAnswers[j]);
      }
      if (difference < totalDifference) {
        totalDifference = difference;
        friendName = potentials[i].name;
        friendPhoto = potentials[i].photo;
      }
    }

    potentials.push(userInfo);

    res.json({ status: "OK", friendName: friendName, friendPhoto: friendPhoto });
  });
};
