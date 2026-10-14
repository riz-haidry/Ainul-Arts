import React from 'react';
import { ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react';
import Logo from '../assets/logo.webp';
import mapLocation from '../location';

const Footer = () => (
  <footer className="site-footer">
    <div className="page-shell footer-main">
      <a href="#home" className="brand footer-brand" aria-label="Ainul Arts home">
        <img src={Logo} alt="" className="brand-logo" />
        <span className="brand-copy"><span className="brand-name">Ainul Arts</span><span className="brand-caption">ART · DESIGN · CRAFT</span></span>
      </a>
      <p className="footer-note">A little studio making thoughtful art and creative things in Kamptee, Nagpur.</p>
      <div className="footer-links">
        <a href="#services">What we do</a><a href="#gallery">Our work</a><a href="#contact">Say hello</a>
        <a href="tel:9326999432"><Phone size={14} aria-hidden="true" /> Call</a>
        <a href="https://instagram.com/sd_writer_79" target="_blank" rel="noreferrer"><Instagram size={14} aria-hidden="true" /> Instagram</a>
        <a href={mapLocation} target="_blank" rel="noreferrer"><MapPin size={14} aria-hidden="true" /> Visit us <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </div>
    <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Ainul Arts. Made with care.</span><a href="#home">Back to the top ↑</a></div>
  </footer>
);

export default Footer;
