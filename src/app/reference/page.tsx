import { TrafficSign } from "@/components/signs/TrafficSign";
import { Card } from "@/components/ui/Card";
import { CHEAT_SHEETS, SIGN_REFERENCES } from "@/data/reference";
import { FULL_TEST_QUESTION_COUNT, PASSING_SCORE } from "@/lib/constants";

export const metadata = {
  title: "Reference",
};

export default function ReferencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reference</h1>
        <p className="mt-1 text-sm text-[var(--muted-strong)]">
          Quick sheets and sign meanings based on the California Driver Handbook.
          Confirm details in the current official handbook before test day.
        </p>
      </div>

      <Card className="bg-[var(--brand-soft)] border-[var(--brand)]/20">
        <h2 className="text-base font-semibold">Test format reminder</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted-strong)]">
          <li>
            Class C knowledge test: {FULL_TEST_QUESTION_COUNT} questions
          </li>
          <li>
            Passing score: {PASSING_SCORE} correct (
            {Math.round((PASSING_SCORE / FULL_TEST_QUESTION_COUNT) * 100)}%)
          </li>
          <li>This app is a study aid — not the official DMV exam</li>
        </ul>
      </Card>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">High-miss cheat sheets</h2>
        {CHEAT_SHEETS.map((sheet) => (
          <Card key={sheet.id}>
            <h3 className="text-base font-semibold">{sheet.title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted-strong)]">
              {sheet.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Traffic signs</h2>
        <p className="text-sm text-[var(--muted)]">
          Simplified visuals for study — shapes and colors match standard US/CA usage.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {SIGN_REFERENCES.map((sign) => (
            <Card key={sign.id} className="flex gap-3">
              <TrafficSign signId={sign.id} className="h-16 w-16" title={sign.name} />
              <div className="min-w-0">
                <p className="font-semibold">{sign.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-[var(--muted)]">
                  {sign.category}
                </p>
                <p className="mt-1 text-sm text-[var(--muted-strong)]">{sign.meaning}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
