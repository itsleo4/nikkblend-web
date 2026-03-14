import Sidebar from './Sidebar';
import NavbarMobile from './NavbarMobile'; // We will create this next
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-void min-h-screen flex flex-col selection:bg-ion-gold selection:text-black">
      {/* 1. Desktop Sidebar - Fixed Right */}
      <Sidebar />

      {/* 2. Mobile Navbar - Fixed Top (Only visible on small screens) */}
      <NavbarMobile />

      {/* 3. Main Content Area */}
      {/* Note: 'lg:pr-20' creates the perfect gap for the sidebar on desktop */}
      <main className="flex-grow lg:pr-20 pt-20 lg:pt-0">
        {children}
      </main>

      {/* 4. Global Floating Actions */}
      <WhatsAppButton />

      {/* 5. Global Footer */}
      <div className="lg:pr-20">
        <Footer />
      </div>
    </div>
  );
}