import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <Head>
        <title>About | NIKKBLEND Luxury Atelier</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 border-l-2 border-ion-gold pl-8">
          <h2 className="text-ion-gold text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">The Story</h2>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white">
            Hair <br/><span className="italic text-ion-gold text-4xl md:text-6xl font-light">Architecture</span>
          </h1>
        </div>

        {/* Main Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-surface overflow-hidden border border-white/5">
              <img 
                src="https://i.ibb.co/XkxhxDgj/precision.jpg" 
                alt="The Artist" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
            </div>
          </div>

          <div className="lg:col-span-7 pt-10">
            <h3 className="text-white text-2xl uppercase tracking-tighter font-bold mb-8">
              Redefining the standard of <br/> Indian grooming.
            </h3>
            <div className="space-y-6 text-gray-400 font-light text-sm leading-relaxed max-w-xl">
              <p>
                NIKKBLEND was born out of a desire to merge international hair architecture with the personalized needs of the modern Indian individual. We engineer a transformation tailored to you.
              </p>
              <p>
                Our philosophy is rooted in precision. From the angle of the blade to the selection of premium nutrients, every detail is intentional. We believe luxury is an uncompromising commitment to the craft.
              </p>
              <p className="text-ion-gold font-medium italic">
                "We bring the atelier to you, ensuring that luxury has no boundaries."
              </p>
            </div>
          </div>
        </div>

        {/* --- SIDE-BY-SIDE 1:1 VALUES SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
          
          {/* Precision Block */}
          <div className="bg-void p-8 lg:p-12 group">
            <div className="aspect-square w-full mb-10 overflow-hidden bg-surface border border-white/5">
              <img 
                src="https://i.ibb.co/jYWJLdj/tools.jpg" 
                alt="Precision Tools" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-ion-gold"></div>
              <p className="text-white font-bold text-xs uppercase tracking-widest">Precision</p>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed max-w-xs uppercase tracking-tighter">
              Architectural hair design tailored to bone structure and personal style.
            </p>
          </div>

          {/* Privacy Block */}
          <div className="bg-void p-8 lg:p-12 group">
            <div className="aspect-square w-full mb-10 overflow-hidden bg-surface border border-white/5">
              <img 
                src="https://i.ibb.co/twkWYCBR/lounge.jpg" 
                alt="Privacy/Elite" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-ion-gold"></div>
              <p className="text-white font-bold text-xs uppercase tracking-widest">Privacy</p>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed max-w-xs uppercase tracking-tighter">
              Exclusive doorstep services for the elite, ensuring complete discretion.
            </p>
          </div>

        </div>

        {/* --- FINAL TINY SEAL --- */}
        <footer className="mt-40 flex flex-col items-center">
          <div className="w-px h-20 bg-white/10 mb-12"></div>
          <div className="group flex flex-col items-center">
             <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-ion-gold transition-colors duration-700">
                <span className="text-[8px] font-black text-gray-700 group-hover:text-ion-gold transition-colors">NB</span>
             </div>
             <p className="mt-4 text-[6px] uppercase tracking-[1em] text-gray-800 font-bold">Atelier Standard</p>
          </div>
        </footer>

      </div>
    </div>
  );
}