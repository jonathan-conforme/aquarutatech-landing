interface BadgeProps {
  children: React.ReactNode;
  color?: "primary" | "success" | "warning";
}

export default function Badge({
  children,
  color = "primary",
}: BadgeProps) {
  const colors = {
    primary: "bg-[var(--color-primary-light)] ring-1 ring-cyan-500/10 text-sky-700",
    success: "bg-[var(--color-success-light)] text-green-700",
    warning: "bg-[var(--color-warning-light)] text-amber-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}