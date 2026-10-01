import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthSplitLayout } from "@/components/auth/AuthSplitLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Join ByteSpace for free to learn from expert creators or publish your own courses.",
  alternates: { canonical: "/signup" },
};

export default function SignupPage() {
  return (
    <AuthSplitLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className="rounded-sm text-primary hover:underline">
              Login
            </Link>
          </>
        }
      >
        <SignupForm />
      </AuthCard>
    </AuthSplitLayout>
  );
}
