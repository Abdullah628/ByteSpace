import { z } from "zod";

// `abort: true` stops at the first failing check, so an empty field gets one message, not two.
const email = z
  .string()
  .trim()
  .min(1, "Please enter your email address.")
  .pipe(z.email("Please enter a valid email address."));

const password = z
  .string()
  .min(1, { error: "Please enter your password.", abort: true })
  .min(8, "Password must be at least 8 characters.");

export const loginSchema = z.object({ email, password });

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Please enter your full name.", abort: true })
    .min(2, "Name must be at least 2 characters."),
  email,
  password,
});

export type LoginValues = z.infer<typeof loginSchema>;
export type SignupValues = z.infer<typeof signupSchema>;
