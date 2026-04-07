'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        📞 Call or WhatsApp: <a href="tel:+923204426211">+92 320 4426211</a>
        &nbsp;|&nbsp; Available for online sessions across Pakistan
      </div>
      <nav>
        <a href="#" className="nav-logo">
          Dr. Saba Asad
          <span>Clinical Psychologist &amp; Mental Health Specialist</span>
        </a>
        
        <div 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#process" onClick={() => setIsOpen(false)}>How It Works</a></li>
          <li><a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a></li>
          <li><a href="#pricing" onClick={() => setIsOpen(false)}>Fees</a></li>
          <li><a href="#blogs" onClick={() => setIsOpen(false)}>Articles</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="mobile-only"><a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Book Session</a></li>
        </ul>
        <a href="#contact" className="nav-cta desktop-only">Book Session</a>
      </nav>
    </>
  );
}
