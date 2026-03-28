import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Get in <span className="text-ocean">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about your southern adventure? We're here to help you plan the perfect tropical getaway.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-stretch">
          
          {/* Contact Info & About */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About SouthWave LK</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                SouthWave LK is your ultimate guide to Sri Lanka's spectacular southern coast. Born from a love for pristine beaches, vibrant culture, and world-class surfing, we aim to connect travelers with the most authentic experiences the south has to offer.
              </p>
              
              <div className="space-y-8 mt-12 border-t border-gray-200 pt-10">
                <div className="flex items-start gap-5">
                   <div className="bg-ocean/10 p-4 rounded-2xl text-ocean shadow-sm"><MapPin className="w-6 h-6" /></div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900">Our Office</h4>
                     <p className="text-gray-600 mt-2 leading-relaxed">124 Galle Road, Mirissa<br/>Southern Province, Sri Lanka</p>
                   </div>
                </div>
                <div className="flex items-start gap-5">
                   <div className="bg-ocean/10 p-4 rounded-2xl text-ocean shadow-sm"><Mail className="w-6 h-6" /></div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900">Email Us</h4>
                     <p className="text-gray-600 mt-2 hover:text-ocean transition-colors cursor-pointer">hello@southwavelk.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-5">
                   <div className="bg-ocean/10 p-4 rounded-2xl text-ocean shadow-sm"><Phone className="w-6 h-6" /></div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900">Call Us</h4>
                     <p className="text-gray-600 mt-2 hover:text-ocean transition-colors cursor-pointer">+94 77 123 4567</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/50 focus:border-ocean transition-all text-lg" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/50 focus:border-ocean transition-all text-lg" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2 uppercase tracking-wide">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/50 focus:border-ocean transition-all text-lg" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2 uppercase tracking-wide">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ocean/50 focus:border-ocean transition-all resize-none text-lg" placeholder="How can we help you plan your trip?"></textarea>
              </div>

              <Button size="lg" className="w-full rounded-2xl py-5 shadow-ocean/30 shadow-xl text-xl mt-4">
                Send Message <Send className="w-6 h-6 ml-3" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
