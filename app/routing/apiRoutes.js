var potentials = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(potentials);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    potentials.push(newFriend);

    res.json(newFriend);
  });
};
