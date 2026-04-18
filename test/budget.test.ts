import request from "supertest";
import app from "../src/app";

describe("Budget API", () => {

  it("should create a budget", async () => {
    const res = await request(app)
      .post("/budgets")
      .send({
        category: "food",
        limit: 500
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.category).toBe("food");
  });

  it("should get all budgets", async () => {
    const res = await request(app).get("/budgets");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});