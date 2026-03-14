import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden">
      {/* Background Branding Overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[40vw] leading-none">NB</h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ion-gold text-[10px] tracking-[0.6em] uppercase mb-6 block">
              Independent Grooming Atelier
            </span>
            <h1 className="text-7xl md:text-[130px] leading-[0.8] mb-12">
              Nikk<br/><span className="text-ion-gold italic">Blend</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-sm mb-12 leading-relaxed">
              Precision hair and skin architecture tailored for the modern individual. Available by appointment only.
            </p>
            <div className="flex items-center gap-10">
              <button className="bg-ion-gold text-black px-12 py-5 text-xs font-bold uppercase tracking-widest hover:invert transition-all">
                Reserve Now
              </button>
              <div className="h-[1px] w-20 bg-white/10 hidden md:block"></div>
            </div>
          </motion.div>
        </div>

        {/* Right: Editorial Image */}
        <div className="lg:col-span-5 relative pt-12 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="aspect-[3/4] bg-surface relative overflow-hidden border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1599351431247-f5d6f81c43b2?q=80&w=800" 
              alt="Artisanal Barbering"
              className="editorial-img w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}