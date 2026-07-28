"use client";

import { TrafficSign } from "@/components/signs/TrafficSign";
import type { Question } from "@/lib/types";

type Props = {
  question: Question;
  presentedOptions: string[];
  selectedIndex: number | null;
  /** When set, show feedback styling */
  revealedCorrectIndex?: number | null;
  disabled?: boolean;
  onSelect: (index: number) => void;
  showExplanation?: boolean;
};

const LETTERS = ["A", "B", "C", "D"] as const;

export function QuestionCard({
  question,
  presentedOptions,
  selectedIndex,
  revealedCorrectIndex = null,
  disabled,
  onSelect,
  showExplanation,
}: Props) {
  const revealed = revealedCorrectIndex != null;

  return (
    <div className="space-y-4">
      {question.signId ? (
        <div className="flex justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
          <TrafficSign signId={question.signId} className="h-28 w-28" title="Traffic sign" />
        </div>
      ) : null}

      <h2 className="text-lg font-semibold leading-snug text-[var(--foreground)] sm:text-xl">
        {question.prompt}
      </h2>

      <div className="space-y-2" role="listbox" aria-label="Answer choices">
        {presentedOptions.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = revealed && index === revealedCorrectIndex;
          const isWrongPick = revealed && isSelected && index !== revealedCorrectIndex;

          let stateClass =
            "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]";
          if (isCorrect) {
            stateClass =
              "border-[var(--success)] bg-[var(--success-soft)] text-[var(--foreground)]";
          } else if (isWrongPick) {
            stateClass =
              "border-[var(--danger)] bg-[var(--danger-soft)] text-[var(--foreground)]";
          } else if (isSelected && !revealed) {
            stateClass =
              "border-[var(--brand)] bg-[var(--brand-soft)] ring-2 ring-[var(--brand)]/30";
          }

          return (
            <button
              key={`${index}-${option}`}
              type="button"
              role="option"
              aria-selected={isSelected}
              disabled={disabled || revealed}
              onClick={() => onSelect(index)}
              className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] disabled:cursor-default sm:text-[15px] ${stateClass}`}
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                  isCorrect
                    ? "bg-[var(--success)] text-white"
                    : isWrongPick
                      ? "bg-[var(--danger)] text-white"
                      : "bg-[var(--surface-3)] text-[var(--muted-strong)]"
                }`}
              >
                {LETTERS[index]}
              </span>
              <span className="pt-0.5 leading-snug">{option}</span>
            </button>
          );
        })}
      </div>

      {showExplanation && revealed ? (
        <div
          className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${
            selectedIndex === revealedCorrectIndex
              ? "border-[var(--success)]/40 bg-[var(--success-soft)]"
              : "border-[var(--danger)]/40 bg-[var(--danger-soft)]"
          }`}
        >
          <p className="font-semibold">
            {selectedIndex === revealedCorrectIndex ? "Correct" : "Not quite"}
          </p>
          <p className="mt-1 text-[var(--foreground)]/90">{question.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}
