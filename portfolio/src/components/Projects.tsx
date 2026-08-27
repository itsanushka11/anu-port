import { projects } from '../data/portfolio';
import { useReveal, useTilt } from '../hooks/useAnimations';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">Selected Work</h2>
      <p className="section-desc">
        Hands-on projects applying analytics and visualization to business problems.
      </p>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.title} {...proj} delay={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  icon,
  color,
  title,
  points,
  delay,
}: {
  icon: string;
  color: 'cyan' | 'violet' | 'rose';
  title: string;
  points: string[];
  delay: number;
}) {
  const { ref, visible } = useReveal();
  const tiltRef = useTilt();

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (tiltRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={`project-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.15}s` }}
    >
      <div className={`project-icon ${color}`}>{icon}</div>
      <h3>{title}</h3>
      <ul>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="project-arrow">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
