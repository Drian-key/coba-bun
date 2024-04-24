import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun test", () => {
  it("should support unit test", async () => {
    const response = sayHello("Riski");
    expect(response).toBe("Hello Riski");
  });

  it("should support unit Budi", async () => {
    const response = sayHello("Budi");
    expect(response).toBe("Hello Budi");
  });
});
