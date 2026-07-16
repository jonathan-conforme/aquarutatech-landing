import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={clsx("rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8 shadow-sm transition-all duration-300 hover:shadow-md", className)}
    >
      {children}
    </div>
  );
}