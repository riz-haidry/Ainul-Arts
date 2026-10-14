import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import RediumWorks from '../assets/redium-works-and-arts.webp';
import Graphics from '../assets/graphics.webp';
import WrappingLamination from '../assets/wrapping-lamination.webp';
import SunControlFilm from '../assets/sun-control-film.webp';
import NumberNamePlates from '../assets/number-and-name-plate.webp';
import PaintingSketch from '../assets/painting-and-sketch.webp';
import Writing from '../assets/writing.webp';
import FlexBanner from '../assets/flexBanner.webp';
import ThermocolNames from '../assets/thermacolNames.webp';

const artworks = [
  { title: 'A portrait, made personal', category: 'Painting', image: PaintingSketch },
  { title: 'Reflective details', category: 'Radium art', image: RediumWorks },
  { title: 'A fresh look for your ride', category: 'Vehicle art', image: Graphics },
  { title: 'The finishing touch', category: 'Custom pieces', image: NumberNamePlates },
  { title: 'Words with a little more feeling', category: 'Lettering', image: Writing },
  { title: 'A clean new finish', category: 'Vehicle art', image: WrappingLamination },
  { title: 'Colour for the occasion', category: 'Print & events', image: FlexBanner },
  { title: 'Made for sunny days', category: 'Vehicle art', image: SunControlFilm },
  { title: 'A little something extra', category: 'Print & events', image: ThermocolNames },
];

const categories = ['Everything', ...new Set(artworks.map(({ category }) => category))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Everything');
  const visibleArtworks = artworks.filter(({ category }) => activeCategory === 'Everything' || category === activeCategory);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="page-shell">
        <div className="gallery-heading">
          <motion.div
            className="section-heading section-heading-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow"><span className="eyebrow-dot" /> A FEW THINGS WE’VE MADE</p>
            <h2>Little glimpses<br />of <span className="gradient-text">our world.</span></h2>
            <p>Every piece starts with an idea and ends with something uniquely yours.</p>
          </motion.div>
          <a className="gallery-contact-link" href="https://instagram.com/sd_writer_79" target="_blank" rel="noreferrer">
            More on Instagram <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="gallery-filters" role="group" aria-label="Filter artworks by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'gallery-filter is-active' : 'gallery-filter'}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="gallery-grid">
          {visibleArtworks.map(({ title, category, image }, index) => (
            <motion.figure
              key={title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.16 }}
              transition={{ duration: 0.62, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              className={`gallery-card gallery-card-${index % 5}`}
            >
              <div className="gallery-image-wrap">
                <img src={image} alt={title} loading="lazy" />
                <span className="gallery-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
              <figcaption><span>{category}</span><strong>{title}</strong></figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
