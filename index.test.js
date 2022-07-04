const supertest = require('supertest');
const {app, server} = require("./index");
const api = supertest(app);

describe("Get route", () => {
  test("page should return hello world", async () => {
    const res = await api.get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Run app express in heroku with jenkins!!!");
  });
});

afterAll(() => {
    // console.log(app)
  server.close();
});