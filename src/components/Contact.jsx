import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import mapLocation, { mapAddress, mapEmbedLocation } from '../location';

const Contact = () => (
  <section id="contact" className="section contact-section">
    <div className="page-shell">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 38, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> GOOD THINGS START WITH A HELLO</p>
          <h2>Have an idea?<br /><span className="gradient-text">Let’s make it.</span></h2>
          <p className="contact-intro">Visit Ainul Arts at 657X+9FX, Sanjay Nagar Bengali Colony, Kamptee, Maharashtra 441001. We welcome enquiries from across Nagpur.</p>
          <a className="button-primary contact-whatsapp" href="https://wa.me/9326999432" target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" /> Start a WhatsApp chat <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="contact-details">
            <a href="tel:9326999432"><span className="contact-detail-icon"><Phone size={17} aria-hidden="true" /></span><span><small>CALL US</small><strong>+91 93269 99432</strong></span></a>
            <a href="https://instagram.com/sd_writer_79" target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Instagram size={17} aria-hidden="true" /></span><span><small>FOLLOW ALONG</small><strong>@sd_writer_79</strong></span></a>
            <a href={mapLocation} target="_blank" rel="noreferrer"><span className="contact-detail-icon"><MapPin size={17} aria-hidden="true" /></span><span><small>COME BY</small><strong>{mapAddress}</strong></span></a>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title={`Map showing ${mapAddress}`}
            src={mapEmbedLocation}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-open-card" href={mapLocation} target="_blank" rel="noreferrer">
            <span className="map-open-icon"><MapPin size={19} aria-hidden="true" /></span>
            <span><strong>Open our location</strong><small>Municipal Hospital · Sanjay Nagar, Kamptee</small></span>
            <span className="map-open-action">Open map <ArrowUpRight size={15} aria-hidden="true" /></span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
