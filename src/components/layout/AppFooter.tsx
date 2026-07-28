import { HANDBOOK_NOTE } from "@/lib/constants";

export function AppFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-4 py-6 text-xs leading-relaxed text-[var(--muted)]">
        <p className="font-medium text-[var(--muted-strong)]">Study tool disclaimer</p>
        <p className="mt-1">{HANDBOOK_NOTE}</p>
        <p className="mt-2">
          Always verify rules with the current official California Driver Handbook and DMV
          resources before your exam.
        </p>
      </div>
    </footer>
  );
}
