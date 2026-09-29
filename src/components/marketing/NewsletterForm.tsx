"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { InputGroup } from "@/components/ui/InputGroup";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string) {
  if (!value.trim()) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(value.trim())) return "Please enter a valid email address.";
  return undefined;
}

type NewsletterFormProps = {
  className?: string;
};

/** Footer newsletter signup. There is no backend, so a valid email just shows a confirmation. */
export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = validateEmail(email);
    setError(message);
    if (message) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <form noValidate onSubmit={handleSubmit} className={cn("w-full max-w-126", className)}>
      <FormField
        label="Email address"
        hideLabel
        error={error}
        hint="By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."
        className="gap-4 sm:gap-6"
      >
        {(control) => (
          <InputGroup>
            <Input
              {...control}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              invalid={Boolean(error)}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
                if (error) setError(undefined);
              }}
            />
            <Button type="submit" variant="accent" className="shrink-0">
              Subscribe
            </Button>
          </InputGroup>
        )}
      </FormField>
      <p role="status" className={cn("text-body-s text-gray-950", subscribed && "mt-3")}>
        {subscribed ? "Thanks for subscribing! Check your inbox for a confirmation." : ""}
      </p>
    </form>
  );
}
