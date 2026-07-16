import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200";

    const variants = {
        primary:
            "bg-[var(--color-primary)] text-white hover:bg-sky-600 shadow-sm",
        secondary:
            "border border-slate-200 bg-white text-slate-900 hover:bg-[var(--color-primary-hover)]",
    };

    return (
        <button
            className={clsx(
                base,
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}