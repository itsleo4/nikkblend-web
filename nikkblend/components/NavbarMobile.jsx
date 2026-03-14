import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/transformations' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="lg:hidden fixed top-0 w-full z-[150] bg-void border-b border-white/5 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-white font-bold tracking-tighter text-lg">
        NIKK<span className="text-ion-gold">BLEND</span>
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className="text-ion-gold p-2">
        {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[60px] bg-void z-[140] p-10 flex flex-col justify-center gap-10"
          >
            {/* Added a subtle gold divider for that "Atelier" look */}
            <div className="w-10 h-[1px] bg-ion-gold/50 mb-4" />
            
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold uppercase tracking-tighter text-white hover:text-ion-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}