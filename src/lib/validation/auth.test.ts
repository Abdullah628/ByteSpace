import { describe, expect, it } from "vitest";
import { loginSchema, signupSchema } from "./auth";

function firstError(result: { success: boolean; error?: { issues: { message: string }[] } }) {
  return result.error?.issues[0]?.message;
}

describe("loginSchema", () => {
  it("accepts a valid email and password", () => {
    const result = loginSchema.safeParse({ email: " learner@example.com ", password: "secret123" });
    expect(result.success).toBe(true);
    expect(result.data?.email).toBe("learner@example.com");
  });

  it("asks for a missing email and password", () => {
    const result = loginSchema.safeParse({ email: "", password: "" });
    const messages = result.error?.issues.map((issue) => issue.message);
    expect(messages).toEqual(["Please enter your email address.", "Please enter your password."]);
  });

  it("rejects an invalid email", () => {
    expect(firstError(loginSchema.safeParse({ email: "nope", password: "secret123" }))).toBe(
      "Please enter a valid email address.",
    );
  });

  it("rejects a password shorter than 8 characters", () => {
    expect(firstError(loginSchema.safeParse({ email: "a@b.co", password: "short" }))).toBe(
      "Password must be at least 8 characters.",
    );
  });
});

describe("signupSchema", () => {
  it("accepts a complete sign-up", () => {
    const result = signupSchema.safeParse({
      name: "Jamie Davis",
      email: "jamie@example.com",
      password: "longenough",
    });
    expect(result.success).toBe(true);
  });

  it("requires a name of at least 2 characters", () => {
    const valid = { email: "jamie@example.com", password: "longenough" };
    expect(firstError(signupSchema.safeParse({ ...valid, name: "   " }))).toBe(
      "Please enter your full name.",
    );
    expect(firstError(signupSchema.safeParse({ ...valid, name: "J" }))).toBe(
      "Name must be at least 2 characters.",
    );
  });
});
