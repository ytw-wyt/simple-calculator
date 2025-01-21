// tests/calculate.test.js
const request = require("supertest");
const app = require("../index"); // Make sure the path correctly reaches your index.js

describe("POST /calculate", () => {
  test("should return the correct result for a valid expression", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "2+3" });
      
    // 2 + 3 = 5
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 5 });
  });
});
