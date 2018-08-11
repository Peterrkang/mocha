const db = require("./db");

const handleSignUp = (email, password) => {
  //check emial if already exists
  db.saveUser({ email, password });
  //send welcome email
};

module.exports = {
  handleSignUp
};
