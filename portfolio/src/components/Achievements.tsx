import { achievements } from '../data/portfolio';
import { useReveal } from '../hooks/useAnimations';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <span className="section-label">Achievements</span>
      <h2 className="section-title">Beyond the Classroom</h2>
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <AchievementCard key={a.title} {...a} delay={i} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({ icon, title, description, delay }: { icon: string; title: string; description: string; delay: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`achievement-card tilt-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.15}s` }}
    >
      <div className="achievement-glow" />
      <div className="achievement-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
