import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brush, Image, Layers, Palette, Sparkles, Sun, Tag, Type } from 'lucide-react';
import RediumWorks from '../assets/redium-works-and-arts.webp';
import Graphics from '../assets/graphics.webp';
import WrappingLamination from '../assets/wrapping-lamination.webp';
import SunControlFilm from '../assets/sun-control-film.webp';
import NumberNamePlates from '../assets/number-and-name-plate.webp';
import PaintingSketch from '../assets/painting-and-sketch.webp';
import Writing from '../assets/writing.webp';
import FlexBanner from '../assets/flexBanner.webp';
import ThermocolNames from '../assets/thermacolNames.webp';

const services = [
  { title: 'Painting & portraits', type: 'Fine art', image: PaintingSketch, icon: Brush, description: 'Personal portraits, expressive sketches and original paintings made just for you.' },
  { title: 'Vehicle graphics', type: 'Custom design', image: Graphics, icon: Palette, description: 'Distinctive custom graphics and visual details that make your ride your own.' },
  { title: 'Redium Works & Arts', type: 'Radium & reflective art', image: RediumWorks, icon: Sparkles, description: 'Custom Redium (radium) works in Kamptee: reflective stickers, cutting, glow designs and plates. Serving customers across Nagpur.' },
  { title: 'Wrapping & lamination', type: 'Surface design', image: WrappingLamination, icon: Layers, description: 'Carefully applied wraps and laminations with a clean, considered finish.' },
  { title: 'Sun control film', type: 'Auto styling', image: SunControlFilm, icon: Sun, description: 'Window films for a little more comfort, privacy and everyday protection.' },
  { title: 'Name & number plates', type: 'Made personal', image: NumberNamePlates, icon: Tag, description: 'Custom plates with thoughtful lettering and a finish made to feel like yours.' },
  { title: 'Calligraphy & writing', type: 'Hand lettering', image: Writing, icon: Type, description: 'Handwritten details and expressive lettering for meaningful moments.' },
  { title: 'Flex banners', type: 'Print & display', image: FlexBanner, icon: Image, description: 'Colourful banners and signage for celebrations, shops and special events.' },
  { title: '3D thermocol letters', type: 'Event styling', image: ThermocolNames, icon: Type, description: 'Custom-cut dimensional lettering to make your next celebration feel special.' },
];

const Services = () => (
  <section id="services" className="section section-soft">
    <div className="page-shell">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow"><span className="eyebrow-dot" /> A CREATIVE LITTLE UNIVERSE</p>
        <h2>Different crafts.<br /><span className="gradient-text">One artist’s touch.</span></h2>
        <p>Bring us your idea, big or small. We’ll make it feel like it could only belong to you.</p>
      </motion.div>

      <div className="services-grid">
        {services.map(({ title, type, image, icon: Icon, description }, index) => (
          <motion.article
            key={title}
            className="service-card"
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.16 }}
            transition={{ duration: 0.65, delay: (index % 3) * 0.075, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="service-image-wrap">
              <img src={image} alt={`${title} by Ainul Arts`} loading="lazy" />
              <span className="service-icon"><Icon size={17} strokeWidth={1.8} aria-hidden="true" /></span>
            </div>
            <div className="service-content">
              <span className="service-type">{type}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="https://wa.me/9326999432" target="_blank" rel="noreferrer" aria-label={`Enquire about ${title}`}>
                Ask about this <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
