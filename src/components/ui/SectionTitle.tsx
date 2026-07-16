import Badge from "./Badge";
import clsx from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={clsx("max-w-3xl", center && "mx-auto text-center" )}
    >
      {badge && (
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)]  md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}