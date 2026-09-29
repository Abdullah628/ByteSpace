"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { InputGroup } from "@/components/ui/InputGroup";
import { cn } from "@/lib/utils";

type SearchFormProps = {
  className?: string;
};

/**
 * Hero course search. There is no search page in scope, so a search
 * takes the visitor to the course catalog on the landing page.
 */
export function SearchForm({ className }: SearchFormProps) {
  const router = useRouter();
  const inputId = useId();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;
    router.push("/#courses");
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={cn("w-full max-w-145.25", className)}>
      <label htmlFor={inputId} className="sr-only">
        Search courses
      </label>
      <InputGroup className="gap-3 sm:gap-4">
        <Input
          id={inputId}
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          icon={<Image src="/icons/search.svg" alt="" width={24} height={24} />}
          className="rounded-3xl border-transparent hover:border-transparent sm:text-body-l"
        />
        <Button type="submit" variant="accent" className="shrink-0">
          Search
        </Button>
      </InputGroup>
    </form>
  );
}
