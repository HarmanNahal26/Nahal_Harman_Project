import request from "supertest";
import app from "../src/app";

describe("Category API", () => {

  it("should create category", async () => {
    const res = await request(app)
      .post("/categories")
      .send({
        name: "food"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("food");
  });

});