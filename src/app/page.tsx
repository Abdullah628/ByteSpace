const swatches = [
  { name: "primary", className: "bg-primary" },
  { name: "accent", className: "bg-accent" },
  { name: "violet-600", className: "bg-violet-600" },
  { name: "gray-950", className: "bg-gray-950" },
] as const;

// Temporary Phase 0 page to verify fonts and design tokens; replaced by the landing sections.
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col justify-center gap-8 px-4 py-16">
      <h1 className="text-display-xs md:text-heading-l">ByteSpace</h1>
      <p className="max-w-xl text-body-l text-gray-700">
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range
        of courses.
      </p>
      <ul className="flex flex-wrap gap-4">
        {swatches.map((swatch) => (
          <li key={swatch.name} className="flex items-center gap-2 text-label-s">
            <span className={`size-8 rounded-full ${swatch.className}`} aria-hidden="true" />
            {swatch.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
