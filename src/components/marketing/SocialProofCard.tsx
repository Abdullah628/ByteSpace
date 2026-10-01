import { AvatarStack } from "@/components/ui/AvatarStack";
import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/utils";
import type { SocialProof } from "@/types/marketing";

type SocialProofCardProps = {
  proof: SocialProof;
  /** "lime" is the variant on the auth pages' blue panel. */
  tone?: "white" | "lime";
  className?: string;
};

/** "Happy Students 4.5 (240)" with a row of student avatars. */
export function SocialProofCard({ proof, tone = "white", className }: SocialProofCardProps) {
  const lime = tone === "lime";

  return (
    <Card className={cn("flex flex-col gap-2", lime && "bg-accent", className)}>
      <div>
        <p className="text-label-m">{proof.title}</p>
        <Rating
          value={proof.rating}
          count={proof.reviews}
          starClassName={lime ? "text-primary" : undefined}
        />
      </div>
      <AvatarStack
        avatars={proof.avatars}
        overflowLabel={proof.overflowLabel}
        overflowClassName={lime ? "bg-gray-950 text-gray-50" : undefined}
      />
    </Card>
  );
}
