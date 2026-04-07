'use client';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-eyebrow">Get In Touch</p>
      <h2 className="section-title">Book your <em>session</em> today</h2>
      <div className="contact-grid">
        <div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, maxWidth: '440px' }}>
            Whether you have a question, want to learn more about the process, or are ready to book — reach out.
            All enquiries are completely confidential.
          </p>
          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong>Phone / WhatsApp</strong>
                <a href="tel:+923204426211">+92 320 4426211</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Location</strong>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🕐</div>
              <div>
                <strong>Working Hours</strong>
                <p>Mon – Sat: 10am – 7pm<br />Online sessions available evenings</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">💻</div>
              <div>
                <strong>Online Sessions</strong>
                <p>Available across all of Pakistan via WhatsApp / Zoom</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you! Dr. Asad will contact you within 24 hours. You can also WhatsApp +92 320 4426211 for a faster response.');
          }}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Phone / WhatsApp</label>
                <input type="tel" placeholder="+92 3XX XXXXXXX" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email (optional)</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>I am enquiring about</label>
              <select>
                <option>Anxiety / Panic Disorder</option>
                <option>Depression / Mood Disorder</option>
                <option>OCD</option>
                <option>Trauma / PTSD</option>
                <option>Relationship / Family Issues</option>
                <option>Addiction Recovery</option>
                <option>Other / Not sure yet</option>
              </select>
            </div>
            <div className="form-group">
              <label>Session Preference</label>
              <select>
                <option>In-person (Lahore)</option>
                <option>Online (WhatsApp / Zoom)</option>
                <option>No preference</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell me a little about what you&apos;re going through</label>
              <textarea
                placeholder="You don't need to share everything — just what feels comfortable."></textarea>
            </div>
            <button className="btn-submit" type="submit">
              Send Message →
            </button>
            <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center', marginTop: '8px' }}>
              🔒 Your information is completely confidential
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
