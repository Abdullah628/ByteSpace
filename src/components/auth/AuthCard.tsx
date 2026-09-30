import type { ReactNode } from "react";

type AuthCardProps = {
  /** Small blue label above the title ("Sign In"). */
  eyebrow: string;
  /** The page's h1 ("Welcome Back"). */
  title: string;
  /** Link to the other auth page, pinned to the bottom of the card. */
  footer: ReactNode;
  children: ReactNode;
};

/** White card that holds an auth form. */
export function AuthCard({ eyebrow, title, footer, children }: AuthCardProps) {
  return (
    <div className="flex w-full flex-col rounded-3xl bg-white px-6 py-10 sm:px-15.75 sm:py-15.25 lg:min-h-196">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary">{eyebrow}</p>
          <h1 className="font-heading text-display-xs font-semibold text-gray-950 sm:text-heading-m">
            {title}
          </h1>
        </div>
        {children}
      </div>
      <p className="mt-auto pt-10 text-center text-body-m text-gray-700">{footer}</p>
    </div>
  );
}
