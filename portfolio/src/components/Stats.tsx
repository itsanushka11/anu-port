import { stats } from '../data/portfolio';
import { useCountUp, useReveal } from '../hooks/useAnimations';

export default function Stats() {
  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ value, suffix, label, delay }: { value: string; suffix: string; label: string; delay: number }) {
  const { ref, count } = useCountUp(parseInt(value), 1800);
  const { ref: revealRef, visible } = useReveal();

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={`stat-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.12}s` }}
    >
      <div className="stat-number">
        {count}
        <span className="accent">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
