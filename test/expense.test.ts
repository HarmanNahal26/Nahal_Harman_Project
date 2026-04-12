import request from "supertest";
import app from "../src/app";

describe("Expense API", () => {
  it("should create expense", async () => {
    const res = await request(app)
      .post("/expenses")
      .send({
        amount: 100,
        category: "Food",   
        note: "lunch",
        date: "2026-04-11",
        userId: "user-1"
      });

    console.log(res.body); // optional debug

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});