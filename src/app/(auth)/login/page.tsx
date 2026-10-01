import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthSplitLayout } from "@/components/auth/AuthSplitLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to ByteSpace to continue learning from hundreds of online courses.",
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <AuthSplitLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            New user?{" "}
            <Link href="/signup" className="rounded-sm text-primary hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthSplitLayout>
  );
}
