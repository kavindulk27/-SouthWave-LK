import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardImage, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const HERO_IMG = "https://images.unsplash.com/photo-1546708973-c15147eb8cba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const destinations = [
  { name: 'Galle Fort', img: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80', description: 'Historic Dutch fortress by the sea with charming streets.' },
  { name: 'Mirissa', img: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80', description: 'World-class whale watching and pristine palm-fringed beaches.' },
  { name: 'Hiriketiya', img: 'https://images.unsplash.com/photo-1544320954-d6215eb37edb?auto=format&fit=crop&w=800&q=80', description: 'Surfer\'s paradise tucked in a picturesque horseshoe bay.' }
];

const hotels = [
  { name: 'Ocean View Villas', img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80', price: '$120/night', rating: '4.9 ⭐' },
  { name: 'The Galle Retreat', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', price: '$200/night', rating: '4.8 ⭐' },
  { name: 'Weligama Surf Camp', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', price: '$85/night', rating: '4.7 ⭐' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={HERO_IMG} alt="Sri Lanka Southern Coast" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 w-full px-4 max-w-6xl mx-auto flex flex-col items-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl text-center"
          >
            Discover Sri Lanka’s <br className="hidden md:block"/> <span className="text-ocean-light">Southern Paradise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-100 mb-16 drop-shadow-md text-center max-w-3xl"
          >
            Authentic experiences, pristine beaches, and exotic flavors await.
          </motion.p>

          {/* Search Bar (Fake UI) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 shadow-2xl w-full max-w-4xl"
          >
            <div className="flex items-center gap-3 px-6 py-3 md:py-4 w-full border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="text-ocean w-6 h-6 shrink-0" />
              <div className="flex flex-col items-start w-full">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-widest hidden md:block">Location</span>
                <input type="text" placeholder="Where to?" className="w-full outline-none text-gray-700 bg-transparent text-lg placeholder:text-gray-400 font-medium" />
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 md:py-4 w-full border-b md:border-b-0 md:border-r border-gray-200">
              <Calendar className="text-ocean w-6 h-6 shrink-0" />
              <div className="flex flex-col items-start w-full">
                 <span className="text-xs font-bold text-gray-800 uppercase tracking-widest hidden md:block">Dates</span>
                 <input type="text" placeholder="Add dates" className="w-full outline-none text-gray-700 bg-transparent text-lg placeholder:text-gray-400 font-medium" />
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 md:py-4 w-full">
              <Users className="text-ocean w-6 h-6 shrink-0" />
              <div className="flex flex-col items-start w-full">
                 <span className="text-xs font-bold text-gray-800 uppercase tracking-widest hidden md:block">Guests</span>
                 <input type="text" placeholder="Add guests" className="w-full outline-none text-gray-700 bg-transparent text-lg placeholder:text-gray-400 font-medium" />
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto mt-2 md:mt-0 px-10 py-5 md:py-0 md:h-[64px] rounded-xl md:rounded-full text-lg shadow-ocean/30 shadow-lg">
              <Search className="w-6 h-6 md:mr-2" /> <span className="md:hidden">Search</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-24 bg-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Top Destinations</h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Discover the most loved locations across the southern coast, from historic forts to secret surf spots.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div key={dest.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
                <Card hoverEffect className="h-full border-none shadow-lg group cursor-pointer overflow-hidden rounded-3xl">
                  <div className="relative h-72 overflow-hidden">
                     <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                     <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{dest.name}</h3>
                     </div>
                  </div>
                  <CardContent className="bg-white p-6">
                    <p className="text-gray-600 mb-6 text-lg">{dest.description}</p>
                    <Link to="/destinations" className="text-ocean font-bold hover:text-ocean-dark flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit">
                      Discover <span className="text-2xl leading-none">&rarr;</span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="border-2 rounded-full px-8 py-4">View All Destinations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Hotels */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Exceptional Stays</h2>
               <p className="text-xl text-gray-600">Find the perfect place to rest after a day of tropical adventures. From luxury villas to surf camps.</p>
             </div>
             <Link to="/hotels" className="hidden md:inline-flex items-center gap-2 text-ocean font-bold text-lg hover:underline transition-all hover:translate-x-1">
               View All Hotels <span className="text-xl">&rarr;</span>
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotels.map((hotel, i) => (
              <motion.div key={hotel.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }}>
                <Card className="border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-3xl group">
                  <div className="relative overflow-hidden rounded-t-3xl">
                     <CardImage src={hotel.img} alt={hotel.name} className="h-64 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                       <h3 className="font-bold text-xl text-gray-900 leading-tight">{hotel.name}</h3>
                       <span className="bg-sand-dark/40 text-gray-900 text-sm font-bold px-3 py-1 rounded-lg flex items-center gap-1">{hotel.rating}</span>
                    </div>
                    <p className="text-gray-500 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4"/> Southern Province</p>
                    <div className="flex justify-between items-center border-t border-gray-100 pt-5 mt-auto">
                      <div>
                         <span className="text-xs text-gray-500 uppercase tracking-widest font-bold block mb-1">Starting from</span>
                         <span className="font-bold text-2xl text-gray-900">{hotel.price}</span>
                      </div>
                      <Link to="/hotels">
                         <Button size="md" variant="secondary" className="px-6 rounded-xl font-bold">Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/hotels">
               <Button variant="outline" size="lg" className="w-full">View All Hotels</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-ocean">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1544320954-d6215eb37edb?auto=format&fit=crop&w=2000&q=80" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-ocean/90 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-xl"
          >
            Ready for your Southern Adventure?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-ocean-100 mb-12 drop-shadow max-w-2xl mx-auto"
          >
            Use our smart trip generator to plan the perfect itinerary tailored to your budget and time.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
             <Link to="/plan">
               <Button size="lg" className="bg-white text-ocean hover:text-white hover:bg-black/20 border-2 border-white px-12 py-5 rounded-full shadow-2xl text-xl font-bold transform hover:scale-105 transition-all">
                 Plan Your Trip Now
               </Button>
             </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
