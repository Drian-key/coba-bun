import { describe, it, expect } from "bun:test";
import { User } from "user/user";

describe("Name of the group", () => {
  it("should accessed from main package", async () => {
    const user = new User("Riski");

    expect(user.name).toBe("Riski");
  });
});
