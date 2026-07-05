const request = require("supertest");
const app = require("../app");

describe("Book Management System", () => {

    test("Home page should return status 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    test("Books page should return status 200", async () => {
        const response = await request(app).get("/books");
        expect(response.statusCode).toBe(200);
    });

    test("Detail page should return status 200", async () => {
        const response = await request(app).get("/books/1");
        expect(response.statusCode).toBe(200);
    });

});