'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitBooking } from '@/app/actions/booking';

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitBooking, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      alert(state.message);
      formRef.current?.reset();
    } else if (state?.error) {
      alert(state.error);
    }
  }, [state]);

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
          <form className="contact-form" action={formAction} ref={formRef}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input type="tel" id="phone" name="phone" placeholder="+92 3XX XXXXXXX" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (optional)</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="enquiryType">I am enquiring about</label>
              <select id="enquiryType" name="enquiryType">
                <option value="Anxiety / Panic Disorder">Anxiety / Panic Disorder</option>
                <option value="Depression / Mood Disorder">Depression / Mood Disorder</option>
                <option value="OCD">OCD</option>
                <option value="Trauma / PTSD">Trauma / PTSD</option>
                <option value="Relationship / Family Issues">Relationship / Family Issues</option>
                <option value="Addiction Recovery">Addiction Recovery</option>
                <option value="Other / Not sure yet">Other / Not sure yet</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sessionPreference">Session Preference</label>
              <select id="sessionPreference" name="sessionPreference">
                <option value="In-person (Lahore)">In-person (Lahore)</option>
                <option value="Online (WhatsApp / Zoom)">Online (WhatsApp / Zoom)</option>
                <option value="No preference">No preference</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell me a little about what you&apos;re going through</label>
              <textarea
                id="message"
                name="message"
                placeholder="You don't need to share everything — just what feels comfortable."
              ></textarea>
            </div>
            <button className="btn-submit" type="submit" disabled={isPending}>
              {isPending ? 'Sending...' : 'Send Message →'}
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
