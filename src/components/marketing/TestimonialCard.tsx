import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/marketing";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure className={cn("flex h-full flex-col gap-6 rounded-3xl bg-white p-6", className)}>
      <Avatar src={testimonial.avatar} alt="" size={80} />
      <figcaption>
        <p className="font-heading text-heading-xs text-black">{testimonial.name}</p>
        <p className="text-body-l text-primary">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-body-l text-neutral-700">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
    </figure>
  );
}
