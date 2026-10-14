import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import Artwork from '../assets/painting-and-sketch.webp';
import Lettering from '../assets/writing.webp';
import Radium from '../assets/redium-works-and-arts.webp';
import mapLocation from '../location';

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-orb hero-orb-one" aria-hidden="true" />
    <div className="hero-orb hero-orb-two" aria-hidden="true" />
    <div className="hero-layout page-shell">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <a className="location-pill" href={mapLocation} target="_blank" rel="noreferrer">
          <MapPin size={14} aria-hidden="true" />
          Independent art studio · Kamptee, Nagpur
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <p className="eyebrow"><span className="eyebrow-dot" /> MADE BY HAND, MADE TO MATTER</p>
        <h1>Ideas made<br />beautifully <span className="gradient-text">yours.</span></h1>
        <p className="hero-description">
          Custom Redium (radium) works, reflective art and vehicle graphics in Kamptee, Maharashtra. We also create portraits, calligraphy and more for customers across Nagpur.
        </p>
        <div className="hero-actions">
          <a href="#gallery" className="button-primary">Explore our work <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href="https://wa.me/9326999432" target="_blank" rel="noreferrer" className="button-text">Let’s create something <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-note">
          <span className="hero-note-icon"><Sparkles size={17} aria-hidden="true" /></span>
          <span><strong>A little bit of everything,</strong><br />with an artist’s eye for detail.</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-artwork"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="artwork-frame">
          <img className="artwork-main" src={Artwork} alt="Hand-created portrait artwork by Ainul Arts" />
          <div className="artwork-stamp"><span>AA</span><small>ART<br />WITH SOUL</small></div>
        </div>
        <motion.div className="artwork-float artwork-float-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <img src={Lettering} alt="" />
          <span>Hand-lettered<br /><strong>with love</strong></span>
        </motion.div>
        <motion.div className="artwork-float artwork-float-bottom" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
          <img src={Radium} alt="" />
          <span>Made to<br /><strong>stand out</strong></span>
        </motion.div>
        <span className="artwork-caption">A studio for curious minds and creative things <ArrowDown size={14} aria-hidden="true" /></span>
      </motion.div>
    </div>
    <div className="hero-bottom page-shell">
      <span>ARTWORK THAT FEELS LIKE YOU</span>
      <span className="hero-bottom-line" />
      <span>PAINT · PRINT · PERSONALISE</span>
    </div>
  </section>
);

export default Hero;
