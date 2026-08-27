import { certificate } from '../data/portfolio';
import { useReveal } from '../hooks/useAnimations';

export default function Certificate() {
  const { ref, visible } = useReveal();

  return (
    <div className="cert-wrapper">
      <section className="cert-cta" id="certificate">
        <div className="cert-glow" />
        <div ref={ref} className={`cert-info reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Certification</span>
          <h2>{certificate.programme}</h2>
          <p>{certificate.description}</p>
          <a
            href="bitsom_ba_2511785_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary magnetic"
          >
            <span>View Certificate</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className={`cert-details reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <h3>Certificate Details</h3>
          <CertRow label="Issued By" value={certificate.issuer} />
          <CertRow label="Centre" value={certificate.centre} />
          <CertRow label="Programme" value={certificate.programme} />
          <CertRow label="Duration" value={certificate.duration} />
          <CertRow label="Credential ID" value={certificate.credentialId} />
        </div>
      </section>
    </div>
  );
}

function CertRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="cert-row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
}
