import { CategoryCard } from "@/components/course/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/categories";

export function LearningPathsSection() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="pb-16 lg:pb-30">
      <Container className="flex flex-col gap-10 lg:gap-17">
        <SectionHeading
          id="categories-title"
          size="compact"
          align="center"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="mx-auto max-w-229.25"
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-10">
          {learningPaths.map((category) => (
            <li key={category.name}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
