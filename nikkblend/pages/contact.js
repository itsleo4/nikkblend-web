import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: ''
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phone = "919518210623";
    const text = `Hi Nikkblend! My name is ${formData.name}. I'm interested in ${formData.service}. %0A%0AOrder details: ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-dark min-h-screen pt-32 pb-20 px-6">
      <Head>
        <title>Contact | Nikkblend</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-[0.5em] text-xs mb-4">Connect With Us</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase font-playfair">Contact</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Contact Details & Socials */}
          <div className="space-y-6">
            <div className="bg-[#101010] p-8 border border-gold/10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-gold uppercase tracking-widest text-sm mb-8 font-bold">Official Channels</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 group">
                    <FaPhone className="text-gold" />
                    <span className="text-gray-300">9518210623</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <FaEnvelope className="text-gold" />
                    <span className="text-gray-300">nikkchopra9@gmail.com</span>
                  </div>
                  
                  {/* Fixed Instagram Link */}
                  <a 
                    href="https://www.instagram.com/nikkblends" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group hover:text-gold transition"
                  >
                    <FaInstagram className="text-gold group-hover:scale-110 transition" />
                    <span className="text-gray-300 group-hover:text-gold">@nikkblends</span>
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">Preferred Chat</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://wa.me/919518210623" 
                    className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 py-3 hover:bg-[#25D366] hover:text-white transition duration-300 uppercase text-xs tracking-widest font-bold"
                  >
                    <FaWhatsapp /> WhatsApp Now
                  </a>
                  <a 
                    href="https://www.instagram.com/nikkblends" 
                    className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 py-3 hover:bg-white hover:text-dark transition duration-300 uppercase text-xs tracking-widest font-bold"
                  >
                    <FaInstagram /> Instagram DM
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Redirect Form */}
          <div className="bg-[#101010] p-8 border border-gold/10">
            <h3 className="text-gold uppercase tracking-widest text-sm mb-6 font-bold">Quick Booking Form</h3>
            <p className="text-gray-500 text-xs mb-8">Fill this out and it will automatically open your WhatsApp to send the message.</p>
            
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <input 
                required
                type="text" 
                placeholder="YOUR NAME" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-dark border border-white/10 p-4 text-sm text-white focus:border-gold outline-none transition" 
              />
              <input 
                required
                type="text" 
                placeholder="SERVICE (e.g. Haircut, Skin Care)" 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-dark border border-white/10 p-4 text-sm text-white focus:border-gold outline-none transition" 
              />
              <textarea 
                required
                rows="4" 
                placeholder="ANY SPECIFIC REQUIREMENTS?" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-dark border border-white/10 p-4 text-sm text-white focus:border-gold outline-none transition"
              ></textarea>
              
              <button type="submit" className="btn-gold w-full mt-4 flex items-center justify-center gap-2">
                Send to WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}