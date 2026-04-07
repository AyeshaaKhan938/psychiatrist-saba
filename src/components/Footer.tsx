export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo"
            style={{ color: '#b8d4b4', fontSize: '20px', textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Dr.
            Saba Asad</a>
          <p>Clinical Psychologist offering compassionate, evidence-based mental health care in Lahore, Gujranwala and
            online across Pakistan.</p>
        </div>
        <div>
          <h5>Specialties</h5>
          <ul>
            <li><a href="#services">Anxiety &amp; Panic</a></li>
            <li><a href="#services">Depression</a></li>
            <li><a href="#services">OCD</a></li>
            <li><a href="#services">Trauma &amp; PTSD</a></li>
            <li><a href="#services">Addiction Recovery</a></li>
          </ul>
        </div>
        <div>
          <h5>Navigate</h5>
          <ul>
            <li><a href="#about">About Dr. Saba Asad</a></li>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#reviews">Patient Reviews</a></li>
            <li><a href="#pricing">Fees</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:+923204426211">+92 320 4426211</a></li>
            <li><a href="https://wa.me/923204426211">WhatsApp Us</a></li>
            <li><a href="#contact">Book a Session</a></li>
            <li><a href="#contact">Online Sessions</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Dr. Saba Asad. All rights reserved. Lahore, Pakistan.</p>
        <p>Privacy &nbsp;|&nbsp; Confidentiality Policy</p>
      </div>
    </footer>
  );
}
