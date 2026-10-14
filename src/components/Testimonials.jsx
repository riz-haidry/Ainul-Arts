import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { name: 'Rahul Kumar', location: 'Kamptee, Nagpur', rating: 5, text: 'Excellent radium work on my vehicle! The reflective plates look amazing at night. Highly recommended for anyone looking for quality radium art.' },
  { name: 'Priya Sharma', location: 'Nagpur', rating: 5, text: 'The vehicle wrapping was done perfectly. Premium quality material and fantastic finish. The team at Ainul Arts knows their craft!' },
  { name: 'Amit Patel', location: 'Nagpur', rating: 5, text: 'Custom number plate with radium finishing is simply outstanding. Everyone asks about it. Worth every penny!' },
  { name: 'Sneha Joshi', location: 'Nagpur', rating: 4, text: 'Great painting work on my portrait. The artist captured the details beautifully. Excellent service and very professional.' },
];

const Testimonials = () => (
  <section className="section testimonial-section">
    <div className="page-shell">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow"><span className="eyebrow-dot" /> KIND WORDS, FROM KIND PEOPLE</p>
        <h2>Made with care.<br /><span className="gradient-text">Remembered fondly.</span></h2>
      </motion.div>
      <div className="testimonials-grid">
        {testimonials.map(({ name, location, rating, text }, index) => (
          <motion.article
            key={name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testimonial-top"><Quote size={21} aria-hidden="true" /><div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, star) => <Star key={star} size={13} fill={star < rating ? 'currentColor' : 'none'} aria-hidden="true" />)}</div></div>
            <p>“{text}”</p>
            <div className="testimonial-author"><span className="author-avatar" aria-hidden="true">{name.charAt(0)}</span><span><strong>{name}</strong><small>{location}</small></span></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
