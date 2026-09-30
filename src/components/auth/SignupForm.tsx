"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { simulateRequest } from "@/lib/simulateRequest";
import { signupSchema, type SignupValues } from "@/lib/validation/auth";

export function SignupForm() {
  const [createdFor, setCreatedFor] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  async function onSubmit(values: SignupValues) {
    await simulateRequest();
    setCreatedFor(values.name);
  }

  if (createdFor) {
    return (
      <div role="status" className="flex flex-col items-start gap-4">
        <p className="text-body-l text-gray-950">
          Welcome aboard, {createdFor}! Your account is ready. This is a demo without a backend, so
          nothing was saved.
        </p>
        <Button href="/" variant="accent">
          Go to homepage
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isSubmitting}
      className="flex flex-col gap-6"
    >
      <FormField label="Full Name" error={errors.name?.message}>
        {(control) => (
          <Input
            {...control}
            {...register("name")}
            autoComplete="name"
            placeholder="Jamie Davis"
            variant="boxed"
            invalid={Boolean(errors.name)}
          />
        )}
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        {(control) => (
          <Input
            {...control}
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            variant="boxed"
            invalid={Boolean(errors.email)}
          />
        )}
      </FormField>
      <FormField label="Password" hint="At least 8 characters." error={errors.password?.message}>
        {(control) => (
          <PasswordInput
            {...control}
            {...register("password")}
            autoComplete="new-password"
            placeholder="********"
            variant="boxed"
            invalid={Boolean(errors.password)}
          />
        )}
      </FormField>
      <Button type="submit" variant="accent" disabled={isSubmitting} className="self-end">
        {isSubmitting ? "Creating account…" : "Continue"}
      </Button>
    </form>
  );
}
