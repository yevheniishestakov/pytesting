describe("GET /", () => {
  it("should return hello world", async () => {
    const res = await request(app).get();
    expect(res.body.name).toBe("Hello world");
  });
});