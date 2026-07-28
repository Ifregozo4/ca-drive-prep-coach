import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] focus-visible:outline-[var(--brand)]",
  secondary:
    "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--surface-3)] focus-visible:outline-[var(--brand)]",
  ghost:
    "bg-transparent text-[var(--muted-strong)] hover:bg-[var(--surface-2)] focus-visible:outline-[var(--brand)]",
  danger:
    "bg-[var(--danger-soft)] text-[var(--danger)] hover:opacity-90 focus-visible:outline-[var(--danger)]",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

export function Button({
  variant = "primary",
  fullWidth,
  className = "",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    />
  );
}
