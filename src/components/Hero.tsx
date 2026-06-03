export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-text">
        <p className="hero-eyebrow">Clinical Psychologist · Lahore, Pakistan</p>
        <h1>
          Heal your<br />
          <em>mind.</em><br />
          Reclaim your life.
        </h1>
        <p className="hero-subtitle">
          Dr. Saba Asad offers compassionate, evidence-based psychological care for anxiety, depression, trauma, and
          all aspects of mental wellbeing — in-person and online across Pakistan.
        </p>
        <div className="hero-badges">
          <span className="badge">🎓 MSc, ADCP</span>
          <span className="badge">✦ 10+ Years Experience</span>
          <span className="badge">💬 Urdu &amp; English</span>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Book a Consultation</a>
          <a href="#about" className="btn-ghost">Learn more →</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&fit=crop&crop=top"
          alt="Dr. Saba Asad - Clinical Psychologist" />
        <div className="hero-image-overlay"></div>
        <div className="hero-stat-box">
          <div className="hero-stat-num">500+</div>
          <div className="hero-stat-label">Patients helped across Pakistan</div>
        </div>
      </div>
    </section>
  );
}
