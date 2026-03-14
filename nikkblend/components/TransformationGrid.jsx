import { motion } from 'framer-motion';

const TransformationGrid = () => {
  // These would be the actual Instagram Post/Reel URLs from @nikkblends
  const transformations = [
    { id: 1, title: "Classic Fade", type: "video" },
    { id: 2, title: "Gold Balayage", type: "image" },
    { id: 3, title: "Beard Sculpture", type: "video" },
    { id: 4, title: "Keratin Glow", type: "video" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {transformations.map((item) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group"
        >
          {/* Video/Image Container */}
          <div className="relative aspect-[9/16] md:aspect-video bg-neutral-900 overflow-hidden border border-gold/10 group-hover:border-gold/50 transition-all duration-500">
            {/* Placeholder for Instagram Embed */}
            <div className="absolute inset-0 flex items-center justify-center">
               <p className="text-gold/20 italic tracking-widest text-xs uppercase">
                 {item.type === 'video' ? 'Reel Preview' : 'Photo Preview'}
               </p>
            </div>
            
            {/* We will eventually put the Instagram Embed Code Here */}
          </div>

          {/* Description below the media */}
          <div className="mt-4 flex justify-between items-center">
            <h4 className="text-white uppercase tracking-widest text-sm font-bold">{item.title}</h4>
            <span className="text-gold text-[10px] uppercase tracking-widest border border-gold/30 px-2 py-1">
              View on Instagram
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TransformationGrid;