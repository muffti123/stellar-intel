import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/** A single headline statistic rendered in the landing stat bar. */
export interface Stat {
  /** Icon shown beside the value. */
  icon: LucideIcon;
  /** Large primary value (e.g. a count). */
  value: ReactNode;
  /** Caption shown under the value. */
  label: string;
}

/**
 * Landing stat bar — a row of headline statistics.
 *
 * Extracted from app/page.tsx and made data-driven so the stats can be sourced
 * dynamically (#B074) instead of hard-coded in the page. Rendering is unchanged:
 * with a single stat it produces exactly the previous markup.
 */
export function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="rounded-xl border border-border bg-bg-subtle p-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-accent" />
          <div>
            <div className="text-xl font-bold text-primary-text">{value}</div>
            <div className="text-xs text-secondary-text">{label}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
