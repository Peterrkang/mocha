//behavior driven dev
const utils = require("./utils");
const expect = require("expect");

it("should add two numbers", () => {
  const res = utils.add(33, 11);
  expect(res)
    .toBe(44)
    .toBeA("number");
});

it("should async add two numbers", done => {
  utils.asyncAdd(3, 4, sum => {
    expect(sum)
      .toEqual(7)
      .toBeA("number");
    done();
  });
});

it("should square a number", () => {
  const res = utils.square(3);
  expect(res)
    .toBeA("number")
    .toEqual(9);
});

it("should async square a nubmer", done => {
  utils.asyncSquare(3, res => {
    expect(res)
      .toEqual(9)
      .toBeA("number");
    done();
  });
});

it("should return user name", () => {
  let user = { age: 23, location: "test" };
  utils.setName(user, "Peter Kang");
  expect(user)
    .toInclude({ firstName: "Peter", lastName: "Kang" })
    .toBeA("object");
});
