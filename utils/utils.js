const add = (a, b) => {
  return a + b;
};

const asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

const square = x => x * x;

const asyncSquare = (n, callback) => {
  setTimeout(() => {
    callback(n * n);
  }, 1000);
};

const setName = (user, fullName) => {
  var name = fullName.split(" ");
  user.firstName = name[0];
  user.lastName = name[1];
  return user;
};

module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare
};
