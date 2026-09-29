import { AvatarStack } from "@/components/ui/AvatarStack";
import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/utils";
import type { SocialProof } from "@/types/marketing";

type SocialProofCardProps = {
  proof: SocialProof;
  className?: string;
};

/** "Happy Students 4.5 (240)" with a row of student avatars. */
export function SocialProofCard({ proof, className }: SocialProofCardProps) {
  return (
    <Card className={cn("flex flex-col gap-2", className)}>
      <div>
        <p className="text-label-m">{proof.title}</p>
        <Rating value={proof.rating} count={proof.reviews} />
      </div>
      <AvatarStack avatars={proof.avatars} overflowLabel={proof.overflowLabel} />
    </Card>
  );
}
