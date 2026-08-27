import TypingHero from './TypingHero';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse" />
          Available for opportunities
        </div>
        <h1>
          Hi, I'm <span className="name-glow">Anushka</span>
        </h1>
        <h2 className="hero-role">
          <TypingHero />
        </h2>
        <p className="hero-sub">
          Commerce &amp; finance undergraduate with specialized training in Business Analytics
          and Generative &amp; Agentic AI. Turning raw data into strategic insights.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary magnetic">
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost magnetic">
            <span>Get in Touch</span>
          </a>
        </div>
        <div className="hero-socials">
          <a href="mailto:anushkanathani11@gmail.com" className="social-link" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="#" className="social-link" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" className="social-link" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="code-card tilt-card">
          <div className="code-header">
            <div className="code-dots"><span /><span /><span /></div>
            <span className="code-title">analyst.py</span>
          </div>
          <div className="code-body">
            <Line n={1}><Cm># Business Analytics Portfolio</Cm></Line>
            <Line n={2}><Kw>class</Kw> <Tp>Analyst</Tp>:</Line>
            <Line n={3}>  <Kw>def</Kw> <Fn>__init__</Fn>(<Va>self</Va>):</Line>
            <Line n={4}>    <Va>self</Va>.name <Op>=</Op> <St>"Anushka"</St></Line>
            <Line n={5}>    <Va>self</Va>.focus <Op>=</Op> [<St>"Analytics"</St>, <St>"Finance"</St>, <St>"AI"</St>]</Line>
            <Line n={6}>    <Va>self</Va>.tools <Op>=</Op> [<St>"Python"</St>, <St>"Tableau"</St>, <St>"Excel"</St>]</Line>
            <Line n={7} />
            <Line n={8}>  <Kw>def</Kw> <Fn>analyze</Fn>(<Va>self</Va>, data):</Line>
            <Line n={9}>    <Kw>return</Kw> <Va>self</Va>.<Fn>extract_insights</Fn>(data)</Line>
            <Line n={10} />
            <Line n={11}><Va>analyst</Va> <Op>=</Op> <Tp>Analyst</Tp>()</Line>
            <Line n={12}><Fn>print</Fn>(<St>f"Ready: </St><Op>{'{'}</Op><Va>analyst</Va>.name<Op>{'}'}</Op><St>"</St>)</Line>
          </div>
          <div className="code-status">
            <span className="status-dot" /> Ready to build
          </div>
        </div>
        {/* Floating badges */}
        <div className="float-badge fb-1">🐍 Python</div>
        <div className="float-badge fb-2">📊 Tableau</div>
        <div className="float-badge fb-3">🤖 Gen AI</div>
      </div>
    </section>
  );
}

function Line({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="line">
      <span className="ln">{n}</span>
      {children ?? ''}
    </div>
  );
}

const Cm = ({ children }: { children: React.ReactNode }) => <span className="cm">{children}</span>;
const Kw = ({ children }: { children: React.ReactNode }) => <span className="kw">{children}</span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="fn">{children}</span>;
const St = ({ children }: { children: React.ReactNode }) => <span className="str">{children}</span>;
const Va = ({ children }: { children: React.ReactNode }) => <span className="var">{children}</span>;
const Tp = ({ children }: { children: React.ReactNode }) => <span className="type">{children}</span>;
const Op = ({ children }: { children: React.ReactNode }) => <span className="op">{children}</span>;
