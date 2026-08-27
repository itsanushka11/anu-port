import { contact } from '../data/portfolio';
import { useReveal } from '../hooks/useAnimations';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section className="about-band" id="about">
      <div className="about-inner">
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Bridging commerce, <br />
            <span className="gradient-text">finance & technology</span>
          </h2>
          <div className="about-text">
            <p>
              I am a commerce and finance-focused undergraduate currently pursuing{' '}
              <strong>CA Intermediate</strong>, with specialized training in{' '}
              <strong>Business Analytics</strong> and <strong>Generative &amp; Agentic AI</strong>{' '}
              through the Masai × BITSOM program.
            </p>
            <p>
              My foundation in accounting and finance gives me a unique lens to approach business
              problems. Combined with skills in data visualization, Python, and KPI analysis, I bring
              both <span className="highlight">quantitative rigor</span> and practical tools to every
              project.
            </p>
            <p>
              Seeking entry-level opportunities in <strong>Business Analytics</strong>,{' '}
              <strong>Finance Analysis</strong>, or <strong>Data Analytics</strong> where I can drive
              meaningful, data-informed decisions.
            </p>
          </div>
        </div>
        <div className="contact-glass" id="contact">
          <h3>Get in Touch</h3>
          <ContactRow icon="✉" label="Email">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </ContactRow>
          <ContactRow icon="☎" label="Phone">
            <span>{contact.phone}</span>
          </ContactRow>
          <ContactRow icon="📍" label="Location">
            <span>{contact.location}</span>
          </ContactRow>
          <ContactRow icon="⭐" label="LinkedIn">
            <a href={contact.linkedin}>linkedin.com/in/anushka</a>
          </ContactRow>
          <ContactRow icon="&lt;/&gt;" label="GitHub">
            <a href={contact.github}>github.com/anushka</a>
          </ContactRow>
          <a href={`mailto:${contact.email}`} className="btn-primary magnetic" style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="info">
        <span className="label">{label}</span>
        {children}
      </div>
    </div>
  );
}
