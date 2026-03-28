import { Link } from 'react-router-dom';
import { Waves, Globe, Map, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
               <Waves className="h-7 w-7 text-ocean" />
               <span className="font-bold text-2xl text-white">SouthWave <span className="text-ocean">LK</span></span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Discover Sri Lanka's Southern Paradise. Experience the authentic culture, pristine beaches, and exotic flavors uniquely tailored for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ocean transition-all"><Globe className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ocean transition-all"><Map className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ocean transition-all"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/destinations" className="hover:text-ocean transition-colors">Top Destinations</Link></li>
              <li><Link to="/hotels" className="hover:text-ocean transition-colors">Where to Stay</Link></li>
              <li><Link to="/food" className="hover:text-ocean transition-colors">Food & Cafes</Link></li>
              <li><Link to="/experience" className="hover:text-ocean transition-colors">Experiences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Plan Trip</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/plan" className="hover:text-ocean transition-colors">Trip Generator</Link></li>
              <li><Link to="/gallery" className="hover:text-ocean transition-colors">Our Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-ocean transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-ocean transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Newsletter</h4>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">Get the best travel tips, hidden gems, and updates direct to your inbox.</p>
             <form className="flex rounded-lg overflow-hidden shadow-sm" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-ocean text-sm" />
               <button type="submit" className="bg-ocean hover:bg-ocean-dark text-white px-4 flex items-center justify-center transition-colors">
                 <Mail className="h-5 w-5" />
               </button>
             </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SouthWave LK. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
