import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gold/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <img src="/logo.png" alt="Nikkblend" className="h-10 w-auto mb-4 mx-auto md:mx-0" />
          <p className="text-gray-400 text-sm max-w-xs">
            Luxury Hair & Skin Services at the comfort of your home.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-400">
          <Link href="/services"><span className="hover:text-gold cursor-pointer transition">Services</span></Link>
          <Link href="/gallery"><span className="hover:text-gold cursor-pointer transition">Gallery</span></Link>
          <Link href="/contact"><span className="hover:text-gold cursor-pointer transition">Contact</span></Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding Rule: Copyright and Subtle Developer Credit */}
        <p className="text-gray-500 text-[10px] uppercase tracking-widest">
          © Nikkblend. Built by 
          <a 
            href="https://instagram.com/odincalm0" 
            target="_blank" 
            className="text-gold/60 hover:text-gold ml-1 transition"
          >
            @odincalm0
          </a>
        </p>
        
        <p className="text-gray-600 text-[10px] uppercase tracking-widest italic">
          Website crafted by Nitin Kumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;