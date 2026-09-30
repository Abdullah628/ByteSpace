import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsIntro } from "@/data/marketing";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="overflow-x-clip bg-testimonial-blobs py-16 lg:pt-18.5 lg:pb-15"
    >
      <Container className="flex flex-col gap-12 lg:gap-18">
        <SectionHeading
          id="testimonials-title"
          title={testimonialsIntro.title}
          description={testimonialsIntro.description}
          titleClassName="text-black lg:w-144.25 lg:shrink-0"
          className="gap-6 lg:flex-row lg:items-end lg:gap-10.75 [&>p]:text-neutral-700 lg:[&>p]:max-w-145"
        />
        <ul className="grid gap-6 md:grid-cols-2 md:*:last:col-span-2 lg:grid-cols-3 lg:gap-10.25 lg:*:last:col-span-1">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
