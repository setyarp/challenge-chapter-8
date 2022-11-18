const request = require("supertest");
const app = require("../../challenge-chapter-8/app");
const dotenv = require("dotenv");
dotenv.config();

describe("API Login", () => {
  it("success login", async () => {
    const user = {
      email: "fikri@binar.co.id",
      password: "123456",
    };
    const response = await request(app).post("/v1/auth/login").send(user);
    expect(response.statusCode).toBe(201);
  });

  it("failed login : wrong password", async () => {
    const failedUser = {
      email: "fikri@binar.co.id",
      password: "1234656",
    };
    const response = await request(app).post("/v1/auth/login").send(failedUser);
    expect(response.statusCode).toBe(401);
  });

  it("failed login : email not found", async () => {
    const failedUser = {
      email: "tenggo@binarrr.co.id",
      password: "1234656",
    };
    const response = await request(app).post("/v1/auth/login").send(failedUser);
    expect(response.statusCode).toBe(404);
  });
});

describe("API register", () => {
  it("register emial has ready by taken", async () => {
    const user = {
      name: "set",
      email: "set@binar.co.id",
      password: "123456777",
    };
    const response = await request(app).post("/v1/auth/register").send(user);
    expect(response.statusCode).toBe(500);
  });
});
