export default function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section">
        <p className="section-eyebrow">Consultation Fees</p>
        <h2 className="section-title">Invest in your <em>mental health</em></h2>
        <p className="section-body">All sessions are strictly confidential. Flexible scheduling, in-person and online
          options available.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <p className="pricing-plan">Initial Consultation</p>
            <div className="pricing-amount"><sup>PKR</sup> 3,000</div>
            <p className="pricing-period">Per session · 60 minutes</p>
            <hr className="pricing-divider" />
            <ul className="pricing-features">
              <li>Comprehensive psychological assessment</li>
              <li>Full mental health history review</li>
              <li>Diagnosis &amp; treatment discussion</li>
              <li>Personalised plan overview</li>
            </ul>
            <a href="#contact" className="btn-price">Book Now</a>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <p className="pricing-plan">Follow-up Session</p>
            <div className="pricing-amount"><sup>PKR</sup> 2,000</div>
            <p className="pricing-period">Per session · 45 minutes</p>
            <hr className="pricing-divider" />
            <ul className="pricing-features">
              <li>Progress review &amp; adjustments</li>
              <li>Therapy &amp; skill building</li>
              <li>Medication management</li>
              <li>Between-session WhatsApp support</li>
            </ul>
            <a href="#contact" className="btn-price">Book Now</a>
          </div>
          <div className="pricing-card">
            <p className="pricing-plan">Online Session</p>
            <div className="pricing-amount"><sup>PKR</sup> 2,500</div>
            <p className="pricing-period">Per session · 45 minutes</p>
            <hr className="pricing-divider" />
            <ul className="pricing-features">
              <li>Secure video consultation</li>
              <li>Available anywhere in Pakistan</li>
              <li>Same quality care as in-person</li>
              <li>Digital prescription if needed</li>
            </ul>
            <a href="#contact" className="btn-price">Book Now</a>
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <h2>Ready to take the first step? <em>You don&apos;t have to do this alone.</em></h2>
        <a href="#contact" className="btn-white">Book a Consultation</a>
      </div>
    </>
  );
}
