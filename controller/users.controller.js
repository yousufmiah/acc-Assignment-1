let users = require("../users.json");

//get user random
module.exports.getUserRandom = (req, res) => {
  const num = Math.floor(Math.random() * users.length + 1);
  const result = users.find((user) => user.id == num);
  res.send(result);
};

//get user all
module.exports.getUserAll = (req, res) => {
  res.send(users);
};

//post
module.exports.postUserSave = (req, res) => {
  users.push(req.body);
  res.send(users);
};

/* //put (poraton data paile update korbe na paile noto data create korbe)
module.exports.userPut = (req, res) => {
  res.send("user update by put");
};
 */
//patch update (poraton data paile update korbe na paile noton data create korbe na)
module.exports.userPatchUpdate = (req, res) => {
  const { id } = req.params;
  const newData = users.find((user) => user.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;
  res.send(newData);
};

//delete
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== Number(id));
  res.send(user);
};
