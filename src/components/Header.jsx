import React from 'react';
import { ArrowUpRight, Brush, Grid2X2, Home, Images, MapPin, Phone } from 'lucide-react';
import Logo from '../assets/logo.webp';

const navigation = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Services', href: '#services', icon: Grid2X2 },
  { label: 'Gallery', href: '#gallery', icon: Images },
  { label: 'Contact', href: '#contact', icon: MapPin },
];

const Header = () => (
  <>
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#home" className="brand" aria-label="Ainul Arts home">
          <img src={Logo} alt="" className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-name">Ainul Arts</span>
            <span className="brand-caption">ART · DESIGN · CRAFT</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="tel:9326999432">
          <Phone size={16} aria-hidden="true" />
          <span>Let’s talk</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </header>

    <nav className="mobile-dock" aria-label="Mobile navigation">
      {navigation.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href}>
          <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  </>
);

export default Header;
