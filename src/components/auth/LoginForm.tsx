"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { simulateRequest } from "@/lib/simulateRequest";
import { loginSchema, type LoginValues } from "@/lib/validation/auth";

const socialProviders = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export function LoginForm() {
  const [signedIn, setSignedIn] = useState(false);
  const [socialNotice, setSocialNotice] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit() {
    await simulateRequest();
    setSignedIn(true);
  }

  if (signedIn) {
    return (
      <div role="status" className="flex flex-col items-start gap-4">
        <p className="text-body-l text-gray-950">
          You&apos;re signed in. This is a demo without a backend, so no account was checked.
        </p>
        <Button href="/" variant="accent">
          Go to homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-18">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        aria-busy={isSubmitting}
        className="flex flex-col gap-6"
      >
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
        <FormField label="Password" error={errors.password?.message}>
          {(control) => (
            <PasswordInput
              {...control}
              {...register("password")}
              autoComplete="current-password"
              placeholder="********"
              variant="boxed"
              invalid={Boolean(errors.password)}
            />
          )}
        </FormField>
        <Button type="submit" variant="accent" disabled={isSubmitting} className="self-end">
          {isSubmitting ? "Signing in…" : "Sign In"}
        </Button>
      </form>

      <div className="flex flex-col items-center gap-10">
        <p className="flex w-full items-center gap-3 text-body-l text-gray-700">
          <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
          or
          <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
        </p>
        <div className="flex gap-4">
          {socialProviders.map((provider) => (
            <button
              key={provider.name}
              type="button"
              aria-label={`Continue with ${provider.name}`}
              onClick={() =>
                setSocialNotice(`${provider.name} sign-in isn't available in this demo.`)
              }
              className="flex size-18 items-center justify-center rounded-3xl border border-gray-200 transition-colors hover:bg-gray-50"
            >
              <Image src={provider.icon} alt="" width={40} height={40} />
            </button>
          ))}
        </div>
        <p role="status" className="text-center text-body-s text-gray-700">
          {socialNotice}
        </p>
      </div>
    </div>
  );
}
