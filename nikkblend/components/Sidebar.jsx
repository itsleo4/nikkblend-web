import Link from 'next/link';

export default function Sidebar() {
  const links = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/transformations' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <aside className="fixed right-0 top-0 h-full w-20 border-l border-white/5 hidden lg:flex flex-col items-center justify-between py-12 z-[100] bg-void">
      
      {/* BRANDING: Minimalist vertical text instead of that giant circle */}
      <Link href="/" className="flex flex-col items-center group">
        <span className="text-ion-gold font-black text-xl tracking-tighter leading-none mb-1">N</span>
        <span className="text-white font-black text-xl tracking-tighter leading-none group-hover:text-ion-gold transition-colors">B</span>
        <div className="w-[1px] h-8 bg-ion-gold/30 mt-4 group-hover:h-12 transition-all duration-700"></div>
      </Link>

      {/* NAVIGATION: Cleanly spaced */}
      <nav className="flex flex-col gap-14 vertical-text items-center uppercase text-[9px] tracking-[0.5em] text-gray-500 font-medium">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="hover:text-white hover:translate-x-1 transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* FOOTER STAMP */}
      <div className="flex flex-col items-center">
        <span className="vertical-text text-[7px] tracking-[0.4em] text-gray-800 uppercase font-black">
          © 26
        </span>
      </div>
    </aside>
  );
}