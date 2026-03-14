import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Services() {
  const maleServices = [
    { name: "The Signature Fade", img: "https://i.ibb.co/SX2hB43J/fade.jpg", desc: "Architectural precision cutting tailored to your unique bone structure." },
    { name: "Executive Beard Sculpture", img: "https://i.ibb.co/RTsKgVch/beard.jpg", desc: "Traditional straight-razor shaping with a luxury hot towel ritual." },
    { name: "The Royal Ritual", img: "https://i.ibb.co/7x1g97sp/ritual.jpg", desc: "The ultimate skin and hair rejuvenation treatment for gentlemen." },
    { name: "Clipper Architecture", img: "https://i.ibb.co/Hf8BVVqs/clipper.jpg", desc: "High-definition buzz and crop work for a sharp, minimalist look." },
  ];

  const femaleServices = [
    { name: "Editorial Cut & Style", img: "https://i.ibb.co/FvT2Yqz/editorial.jpg", desc: "Advanced texturizing and high-fashion styling for a premium finish." },
    { name: "Artisanal Color Blending", img: "https://i.ibb.co/6JsfXxwL/color.jpg", desc: "Global standards in tonal blending and creative hair color." },
    { name: "Botanical Hair Spa", img: "https://i.ibb.co/fVRLkkWv/spa.jpg", desc: "Deep hydration and scalp nutrition using organic essential oils." },
    { name: "The Glow Treatment", img: "https://i.ibb.co/RVTHwRC/glow.jpg", desc: "Advanced facial steam and hydration for a red-carpet radiance." },
  ];

  const mobileElite = [
    { name: "The Atelier Doorstep", img: "https://i.ibb.co/dwJ2ndf9/doorstep.jpg", desc: "The full luxury grooming experience brought to your private residence." }
  ];

  return (
    <div className="bg-void min-h-screen pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <Head>
        <title>Menu | NIKKBLEND Luxury Atelier</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-24 border-l-2 border-ion-gold pl-8">
          <h2 className="text-ion-gold text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">The Selection</h2>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white">
            Signature <br/><span className="italic text-ion-gold text-4xl md:text-6xl font-light">Treatments</span>
          </h1>
        </div>

        {/* SECTION: GENTLEMEN */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Gentlemen's Collection</h3>
            <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {maleServices.map((s, i) => (
              <ServiceCard key={i} data={s} />
            ))}
          </div>
        </section>

        {/* SECTION: LADIES */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Ladies' Selection</h3>
            <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {femaleServices.map((s, i) => (
              <ServiceCard key={i} data={s} />
            ))}
          </div>
        </section>

        {/* SECTION: MOBILE ELITE */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Mobile Elite</h3>
            <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>
          <div className="max-w-3xl">
             {mobileElite.map((s, i) => (
              <ServiceCard key={i} data={s} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// --- CINEMATIC SERVICE CARD ---
function ServiceCard({ data }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group cursor-default"
    >
      <div className="aspect-video overflow-hidden bg-surface relative mb-6 border border-white/5 shadow-2xl">
        <img 
          src={data.img} 
          alt={data.name} 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-50 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent"></div>
        
        {/* Subtle Decorative Corner */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-ion-gold/0 group-hover:border-ion-gold/40 transition-all duration-700"></div>
      </div>

      <div className="px-2">
        <h4 className="text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-ion-gold transition-colors mb-3">
          {data.name}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed font-light max-w-md">
          {data.desc}
        </p>
      </div>
    </motion.div>
  );
}