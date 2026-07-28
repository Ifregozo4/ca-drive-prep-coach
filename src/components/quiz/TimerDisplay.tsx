"use client";

type Props = {
  secondsRemaining: number | null;
};

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function TimerDisplay({ secondsRemaining }: Props) {
  if (secondsRemaining == null) {
    return (
      <span className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-xs font-medium text-[var(--muted-strong)]">
        Untimed
      </span>
    );
  }

  const urgent = secondsRemaining <= 60;
  const warn = secondsRemaining <= 5 * 60;

  return (
    <span
      className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold tabular-nums ${
        urgent
          ? "bg-[var(--danger-soft)] text-[var(--danger)]"
          : warn
            ? "bg-[var(--warn-soft)] text-[var(--warn)]"
            : "bg-[var(--surface-2)] text-[var(--muted-strong)]"
      }`}
      aria-live="polite"
    >
      {formatTime(secondsRemaining)}
    </span>
  );
}
