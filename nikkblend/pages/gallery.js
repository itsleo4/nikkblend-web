import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Gallery() {
  // You can easily swap these YouTube IDs whenever you upload a new video
  const clips = [
    { id: "VIDEO_ID_1", title: "The Signature Fade Ritual", category: "Grooming" },
    { id: "VIDEO_ID_2", title: "Editorial Styling Session", category: "Ladies" },
    { id: "VIDEO_ID_3", title: "Atelier Doorstep Experience", category: "Lifestyle" },
    { id: "VIDEO_ID_4", title: "Charcoal Skin Therapy", category: "Skin" },
  ];

  return (
    <div className="bg-void min-h-screen pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <Head>
        <title>Gallery | NIKKBLEND Luxury Atelier</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-l-2 border-ion-gold pl-8">
          <h2 className="text-ion-gold text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">Visual Journal</h2>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white">
            The <br/><span className="italic text-ion-gold text-4xl md:text-6xl font-light">Transformations</span>
          </h1>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {clips.map((clip, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video bg-surface overflow-hidden border border-white/5 shadow-2xl">
                {/* We use the YouTube "Background" trick: 
                   Muted, Autoplay, No Controls for a "Live Wallpaper" look
                */}
                <iframe
                  className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                  src={`https://www.youtube.com/embed/${clip.id}?autoplay=1&mute=1&loop=1&playlist=${clip.id}&controls=0&showinfo=0&rel=0`}
                  allow="autoplay; encrypted-media"
                ></iframe>

                <div className="absolute inset-0 bg-void/40 group-hover:bg-transparent transition-all duration-700"></div>
                
                {/* Full View Button */}
                <a 
                  href={`https://youtube.com/watch?v=${clip.id}`}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="bg-ion-gold text-black text-[10px] font-bold uppercase tracking-widest px-8 py-4">
                    View Full Film
                  </div>
                </a>
              </div>

              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-ion-gold text-[9px] uppercase tracking-widest mb-1">{clip.category}</p>
                  <h3 className="text-xl font-bold uppercase tracking-tighter text-white">{clip.title}</h3>
                </div>
                <div className="h-[1px] flex-grow bg-white/5 mx-6 hidden md:block"></div>
                <span className="text-gray-600 font-mono text-xs italic">0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}