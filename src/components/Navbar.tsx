export default function Navbar() {
  return (
    <>
      <div className="topbar">
        📞 Call or WhatsApp: <a href="tel:+923204426211">+92 320 4426211</a>
        &nbsp;|&nbsp; Available for online sessions across Pakistan
      </div>
      <nav>
        <a href="#" className="nav-logo">
          Dr. Saba Asad
          <span>Psychiatrist &amp; Mental Health Specialist</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">How It Works</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#pricing">Fees</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Book Session</a>
      </nav>
    </>
  );
}
