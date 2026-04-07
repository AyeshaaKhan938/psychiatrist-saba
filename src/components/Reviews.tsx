export default function Reviews() {
  return (
    <section id="reviews" style={{ background: 'var(--cream)' }}>
      <p className="section-eyebrow">Patient Reviews</p>
      <h2 className="section-title">Words from those who <em>healed</em></h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="stars">★★★★★</p>
          <p className="testimonial-text">Dr. Saba Asad changed my life. I had been suffering from severe anxiety for
            years. After just 8 sessions, I feel like myself again. She listens without judgment and truly
            cares.</p>
          <div className="testimonial-author">
            <div className="author-avatar">AF</div>
            <div>
              <p className="author-name">Ayesha F.</p>
              <p className="author-detail">Lahore · Anxiety Treatment</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="stars">★★★★★</p>
          <p className="testimonial-text">I was sceptical about therapy but Dr. Asad&apos;s approach is so
            evidence-based and warm. She explained my condition clearly and my depression is now completely
            manageable.</p>
          <div className="testimonial-author">
            <div className="author-avatar">MK</div>
            <div>
              <p className="author-name">Muhammad K.</p>
              <p className="author-detail">Online Session · Depression</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="stars">★★★★★</p>
          <p className="testimonial-text">My OCD had taken over my life. Dr. Asad&apos;s ERP therapy was transformational.
            Six months later, I have my life back. I cannot recommend her highly enough.</p>
          <div className="testimonial-author">
            <div className="author-avatar">SR</div>
            <div>
              <p className="author-name">Sara R.</p>
              <p className="author-detail">Lahore · OCD Treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
