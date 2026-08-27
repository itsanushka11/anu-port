import { education } from '../data/portfolio';
import { useReveal } from '../hooks/useAnimations';

export default function Education() {
  return (
    <section className="section" id="education">
      <span className="section-label">Education</span>
      <h2 className="section-title">Academic Foundation</h2>
      <p className="section-desc">Building a strong base in commerce, finance, and analytics.</p>
      <div className="timeline">
        {education.map((edu, i) => (
          <TimelineItem key={edu.degree} {...edu} index={i} total={education.length} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  degree,
  institution,
  detail,
  index,
  total,
}: {
  year: string;
  degree: string;
  institution: string;
  detail: string;
  index: number;
  total: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`timeline-item reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline-marker">
        <div className="timeline-dot" />
        {index < total - 1 && <div className="timeline-line" />}
      </div>
      <div className="timeline-content tilt-card">
        <div className="edu-year">{year}</div>
        <h3>{degree}</h3>
        <p className="edu-institution">{institution}</p>
        <div className="edu-detail">
          <span className="dot" />
          {detail}
        </div>
      </div>
    </div>
  );
}
