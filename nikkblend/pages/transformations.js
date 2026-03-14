import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ImageCard = ({ src, title, category }) => (
  <motion.div 
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="group relative overflow-hidden bg-[#101010] border border-gold/5"
  >
    <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
      <img 
        src={src} 
        alt={title} 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
        loading="lazy"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
      <p className="text-gold text-[8px] uppercase tracking-widest">{category}</p>
      <h3 className="text-white text-[10px] uppercase tracking-tighter leading-tight">{title}</h3>
    </div>
  </motion.div>
);

export default function Transformations() {
  const [filter, setFilter] = useState('All');

  const galleryData = {
    Hair: [
      { title: "Executive Side Part", src: "https://i.ibb.co/FLkqbYyR/image.jpg" },
      { title: "Modern Textured Crop", src: "https://i.ibb.co/wZSX141w/image.jpg" },
      { title: "Classic Pompadour", src: "https://i.ibb.co/Vp269NWj/image.jpg" },
      { title: "Burst Fade", src: "https://i.ibb.co/Q3MKbCgr/image.jpg" },
      { title: "Long Layered Men's Cut", src: "https://i.ibb.co/xq19N9jL/image.jpg" },
      { title: "Modern Mullet Fade", src: "https://i.ibb.co/VWYXSrXt/image.jpg" },
      { title: "Buzz Cut Taper", src: "https://i.ibb.co/CpTgxJ8z/image.jpg" },
      { title: "Slick Back Undercut", src: "https://i.ibb.co/v6gwCcHg/image.jpg" },
      { title: "Wavy Texture Flow", src: "https://i.ibb.co/gbBDkx7r/image.jpg" },
      { title: "High and Tight", src: "https://i.ibb.co/XxJTBb5y/image.jpg" }
    ],
    Beard: [
      { title: "Full Viking Beard", src: "https://i.ibb.co/kggGs1tR/image.jpg" },
      { title: "Heavy Stubble", src: "https://i.ibb.co/Vc1qZQzf/image.jpg" },
      { title: "Sharp Goatee Sculpture", src: "https://i.ibb.co/VpQywSMK/image.jpg" },
      { title: "Beard Lineup", src: "https://i.ibb.co/XxRW1LY0/image.jpg" },
      { title: "Groomed Corporate Beard", src: "https://i.ibb.co/XkrB3TXK/image.jpg" },
      { title: "Van Dyke Style", src: "https://i.ibb.co/d4b2g0m0/image.jpg" },
      { title: "Fade into Beard", src: "https://i.ibb.co/gZvdbyn8/image.jpg" },
      { title: "Detailed Handlebar Moustache", src: "https://i.ibb.co/p63Z1bKR/image.jpg" },
      { title: "Beard Hot Towel Shave", src: "https://i.ibb.co/4G85xby/image.jpg" },
      { title: "Short Boxed Beard", src: "https://i.ibb.co/XkLYS20L/image.jpg" }
    ],
    Skin: [
      { title: "Gold Facial Mask", src: "https://i.ibb.co/7xPPyPHm/image.jpg" },
      { title: "Black Charcoal Peel", src: "https://i.ibb.co/27BfHpCw/image.jpg" },
      { title: "Face Steam Treatment", src: "https://i.ibb.co/C5qwpGbB/image.jpg" },
      { title: "Pore Extraction Mask", src: "https://i.ibb.co/qYYrmN9h/image.jpg" },
      { title: "Hydrating Eye Patches", src: "https://i.ibb.co/TMk30sgH/image.jpg" },
      { title: "Exfoliating Scrub", src: "https://i.ibb.co/RnYNpdv/image.jpg" },
      { title: "Sheet Mask Application", src: "https://i.ibb.co/C5cTsw1J/image.jpg" },
      { title: "Scalp Massage", src: "https://i.ibb.co/MxKHyYb2/image.jpg" },
      { title: "After-Shave Balm", src: "https://i.ibb.co/7N43jh2C/image.jpg" },
      { title: "Skin Glow Result", src: "https://i.ibb.co/9HTNF3B0/image.jpg" }
    ]
  };

  const allImages = [...galleryData.Hair, ...galleryData.Beard, ...galleryData.Skin];
  const displayItems = filter === 'All' ? allImages : galleryData[filter];

  return (
    <div className="bg-dark min-h-screen pt-32 pb-20 px-6">
      <Head>
        <title>Portfolio | Nikkblend Luxury</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] mb-4">Volume I</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase font-playfair leading-tight">Masterpieces</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mt-10">
            {['All', 'Hair', 'Beard', 'Skin'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 ${
                  filter === cat ? 'bg-gold text-dark border-gold' : 'text-gray-500 border-white/5 hover:border-gold/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <AnimatePresence mode='popLayout'>
            {displayItems.map((item) => (
              <ImageCard 
                key={item.src} 
                title={item.title} 
                category={filter === 'All' ? 'Nikkblend' : filter} 
                src={item.src} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Section */}
        <section className="mt-40 border-t border-gold/10 pt-20">
          <h2 className="text-gold uppercase tracking-[0.4em] text-[10px] mb-4 text-center">The Toolkit</h2>
          <h3 className="text-white text-4xl text-center uppercase font-playfair mb-16">Premium Essentials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-gray-400 font-light leading-relaxed">
            <div className="bg-[#101010] p-8 border border-white/5">
               <h4 className="text-white uppercase tracking-widest text-sm mb-4 font-bold">Professional Tools</h4>
               <p className="text-sm">We use <strong>BaBylissPRO GoldFX</strong> and <strong>Andis Professional</strong> cordless clippers. These high-torque tools ensure every fade and lineup is executed with surgical precision without causing skin irritation.</p>
            </div>
            <div className="bg-[#101010] p-8 border border-white/5">
               <h4 className="text-white uppercase tracking-widest text-sm mb-4 font-bold">Skin & Beard Care</h4>
               <p className="text-sm">Our skin treatments feature <strong>Kiehl’s</strong> and <strong>Jack Black</strong> botanical blends. From hot towel shaves to deep charcoal peels, we only use products that nourish and protect your natural barrier.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}