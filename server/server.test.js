const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

describe("Server", () => {
  describe("Get /", () => {
    it("should return hello world", done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            error: "Page Not Found"
          });
        })
        .end(done);
    });
  });

  describe("Get /users", () => {
    it("should return users object", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: "Peter",
            age: 27
          });
        })
        .end(done);
    });
  });
});
