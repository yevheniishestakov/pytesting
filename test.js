describe("GET /", () => {
  it("should return hello world", async () => {
    const res = await request(app).get(
);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Product 1");
  });
});