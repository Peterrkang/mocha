const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");
//__set__ and __get__ methods are added to app

describe("App", () => {
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__("db", db);

  it("should call the spy correctly", () => {
    const spy = expect.createSpy();
    spy({ name: "Peter", age: 27 });
    expect(spy).toHaveBeenCalledWith({ name: "Peter", age: 27 });
  });

  it("should call save user with user obj", () => {
    const email = "test@test.com";
    const password = "test12345";

    app.handleSignUp(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
