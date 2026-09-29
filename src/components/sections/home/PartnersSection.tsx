import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/data/marketing";

export function PartnersSection() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="bg-gray-50 py-12 lg:py-20">
      <h2 id="partners-title" className="sr-only">
        Our partners
      </h2>
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-10 gap-y-8 sm:gap-x-12 xl:flex-nowrap xl:gap-x-18">
          {partners.map((partner) => (
            <li key={partner.logo}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-7 w-auto sm:h-8 xl:h-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
