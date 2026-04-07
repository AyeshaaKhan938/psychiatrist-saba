export default function About() {
  return (
    <section id="about" style={{ background: 'var(--warm-white)' }}>
      <div className="about-grid">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80&fit=crop&crop=top"
            alt="Dr. Saba Asad" />
          <div className="about-quote">
            <p>&quot;Mental health is not a destination, but a journey. I walk that path with every patient.&quot;</p>
            <cite>— Dr. Saba Asad</cite>
          </div>
        </div>
        <div>
          <p className="section-eyebrow">About Dr. Saba Asad</p>
          <h2 className="section-title">Science, <em>compassion</em>, and genuine care</h2>
          <p className="section-body">
            Dr. Saba Asad is a qualified clinical psychologist with over a decade of clinical experience helping
            individuals overcome mental health challenges. She combines the latest evidence-based treatments
            with a deeply human approach — creating a safe space where patients feel truly heard.
          </p>
          <p className="section-body" style={{ marginTop: '16px' }}>
            Having trained at leading institutions in Pakistan, Dr. Saba Asad specializes in anxiety,
            depression, OCD, PTSD, bipolar disorder, and more. She sees patients in Lahore, Gujranwala and conducts online
            consultations nationwide.
          </p>
          <div className="cred-list">
            <div className="cred-item">
              <div className="cred-icon">🎓</div>
              <div className="cred-text">
                <strong>MSc, ADCP</strong>
                <span>Clinical Psychologist</span>
              </div>
            </div>
            <div className="cred-item">
              <div className="cred-icon">🏥</div>
              <div className="cred-text">
                <strong>10+ Years Clinical Experience</strong>
                <span>Hospital &amp; private practice, Lahore, Gujranwala</span>
              </div>
            </div>
            <div className="cred-item">
              <div className="cred-icon">🌐</div>
              <div className="cred-text">
                <strong>Online Sessions Available</strong>
                <span>Secure video consultations across Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
