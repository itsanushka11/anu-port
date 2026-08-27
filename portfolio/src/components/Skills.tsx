import { skillGroups } from '../data/portfolio';
import { useReveal } from '../hooks/useAnimations';

export default function Skills() {
  return (
    <section className="skills-band" id="skills">
      <div className="skills-inner">
        <span className="section-label">Skills</span>
        <h2 className="section-title">What I bring to the table</h2>
        <p className="section-desc">
          A blend of business acumen, technical skills, and analytical thinking.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.title} {...group} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  icon,
  color,
  title,
  tags,
  delay,
}: {
  icon: string;
  color: 'cyan' | 'violet' | 'rose';
  title: string;
  tags: string[];
  delay: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`skill-group tilt-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.15}s` }}
    >
      <div className="skill-group-header">
        <div className={`skill-icon ${color}`}>{icon}</div>
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {tags.map((tag, j) => (
          <span key={tag} className={`skill-tag${j < 2 ? ' primary' : ''}`}>
            {tag}
          </span>
        ))}
      </div>
      {/* Animated bar */}
      <div className="skill-bar">
        <div
          className={`skill-bar-fill bar-${color}`}
          style={{
            width: visible ? `${90 - delay * 8}%` : '0%',
            transitionDelay: `${delay * 0.15 + 0.3}s`,
          }}
        />
      </div>
    </div>
  );
}
