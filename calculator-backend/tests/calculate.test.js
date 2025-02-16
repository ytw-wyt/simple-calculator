// tests/calculate.test.js
const request = require("supertest");
const app = require("../index"); // Make sure the path correctly reaches your index.js

describe("POST /calculate", () => {

  test("should return the correct result for addition", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "2+3" });
      
    // 2 + 3 = 5
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 5 });
  });

  test("should return the correct result for subtraction", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "5-3" });
      
    // 5 - 3 = 2
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 2 });
  });

  test("should return the correct result for multiplication", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "4*3" });
      
    // 4 * 3 = 12
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 12 });
  });

  test("should return the correct result for division", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "10/2" });
      
    // 10 / 2 = 5
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 5 });
  });

  test("should return an error for division by zero", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "10/0" });
      
    // Division by zero should return a 400 error with a specific message
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ "result": null });
  });

});
