import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  // 1. Home Grid Services Data
  const homeServices = [
    { num: "01", title: "Architectural Fade", img: "https://i.ibb.co/XkxhxDgj/precision.jpg", desc: "Precision hair architecture tailored to bone structure." },
    { num: "02", title: "Razor Sculpture", img: "https://i.ibb.co/Ng286VKq/beard.jpg", desc: "Traditional straight-razor shaping with hot towel therapy." },
    { num: "03", title: "Charcoal Detox", img: "https://i.ibb.co/CKfKJ313/skin.jpg", desc: "Deep charcoal rejuvenation and steam treatment." },
    { num: "04", title: "The Signature Blend", img: "https://i.ibb.co/jkwfWKCk/cut.jpg", desc: "The ultimate 90-minute full grooming experience." },
    { num: "05", title: "Tonal Enhancement", img: "https://i.ibb.co/60mSmSbM/color.jpg", desc: "Custom tonal blending and premium gray coverage." },
    { num: "06", title: "Atelier Doorstep", img: "https://i.ibb.co/YTPqRqPL/facial.jpg", desc: "Exclusive luxury grooming at your private residence." },
  ];

  return (
    <div className="relative">
      <Head>
        <title>NIKKBLEND | Luxury Grooming Atelier</title>
      </Head>

      {/* --- HERO SECTION WITH 16:9 CINEMATIC IMAGE --- */}
      <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden relative">
        
        {/* Subtle Watermark NB */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.01] select-none pointer-events-none z-0">
          <h2 className="text-[40vw] font-bold leading-none tracking-tighter text-white">NB</h2>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block text-ion-gold text-[10px] tracking-[0.5em] uppercase mb-6 border-l-2 border-ion-gold pl-4 font-bold">
                Luxury Mobile Atelier
              </span>
              <h1 className="text-6xl md:text-[110px] font-bold leading-[0.85] tracking-tighter uppercase mb-10 text-white">
                Nikk<br/><span className="text-ion-gold italic">blend</span>
              </h1>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-12 font-light">
                Redefining the grooming standard through architectural precision and premium doorstep care.
              </p>
              <button className="bg-ion-gold text-black font-bold px-12 py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-xl shadow-ion-gold/5">
                Book Appointment
              </button>
            </motion.div>
          </div>

          {/* Right Side: 16:9 Cinematic Image with Deep Fades */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-video w-full bg-surface overflow-hidden border border-white/5 shadow-2xl"
            >
              <img 
                src="https://i.ibb.co/M5DBm7X5/barber-work.jpg" 
                alt="The Craft"
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out"
              />
              
              {/* Hygienic Fades: These make the image "bleed" into the site */}
              <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-40"></div>

              {/* Minimalist Corner Label */}
              <div className="absolute top-4 right-4 text-[8px] text-ion-gold/40 tracking-[0.5em] uppercase font-bold">
                Live Session
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICE GRID SECTION --- */}
      <section className="py-32 px-6 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-ion-gold text-[10px] tracking-[0.5em] uppercase mb-4">The Selection</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">Signature Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white/5 gap-[1px] border-[0.5px] border-white/10">
            {homeServices.map((s) => (
              <ServiceItem key={s.num} number={s.num} title={s.title} image={s.img} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- HELPER COMPONENT ---
function ServiceItem({ number, title, desc, image }) {
  return (
    <div className="bg-void group cursor-default overflow-hidden flex flex-col">
      <div className="h-52 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 opacity-40 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-void/40 group-hover:bg-transparent transition-all duration-700"></div>
        <span className="absolute top-4 left-4 text-gray-400 font-bold text-xl opacity-20 group-hover:opacity-100 transition-opacity">{number}</span>
      </div>
      <div className="p-10 border-t border-white/5 flex-grow">
        <h4 className="text-xl font-bold uppercase mb-4 text-white group-hover:text-ion-gold transition-colors">{title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}