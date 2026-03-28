import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, Search, Filter, X } from 'lucide-react';
import Card, { CardImage, CardContent } from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import { destinationsData } from '../data/destinationsData';
import type { Destination } from '../data/destinationsData';

const districts = ['All', 'Galle', 'Matara', 'Deniyaya', 'Hambantota'];

export default function Destinations() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [activeDistrict, setActiveDistrict] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter(dest => {
      const matchesDistrict = activeDistrict === 'All' || dest.district === activeDistrict;
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           dest.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDistrict && matchesSearch;
    });
  }, [activeDistrict, searchQuery]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 drop-shadow-sm tracking-tight"
          >
            Explore <span className="text-ocean">Southern</span> Wonders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From golden beaches and historic forts to misty rainforests and spiritual temples, discover the heart of Sri Lanka's south.
          </motion.p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/60 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-white/50">
            {/* District Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Filter className="w-5 h-5 text-ocean mr-2 hidden sm:block" />
              {districts.map((district) => (
                <button
                  key={district}
                  onClick={() => setActiveDistrict(district)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeDistrict === district 
                      ? 'bg-ocean text-white shadow-md scale-105' 
                      : 'bg-white/80 text-gray-600 hover:bg-ocean/10 hover:text-ocean'
                  }`}
                >
                  {district}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-ocean transition-colors" />
              <input 
                type="text" 
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/90 border-transparent focus:border-ocean focus:ring-0 shadow-sm transition-all text-gray-700 placeholder:text-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 px-2 flex items-center justify-between">
          <p className="text-gray-500 font-medium">
            Found <span className="text-ocean font-bold">{filteredDestinations.length}</span> amazing places
          </p>
          {(activeDistrict !== 'All' || searchQuery) && (
            <button 
              onClick={() => {setActiveDistrict('All'); setSearchQuery('');}}
              className="text-ocean text-sm font-bold flex items-center gap-1 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div 
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  hoverEffect 
                  className="h-full cursor-pointer group rounded-[2.5rem] overflow-hidden shadow-lg border-none flex flex-col bg-white"
                  onClick={() => setSelectedDest(dest)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <CardImage src={dest.img} alt={dest.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[0.7rem] font-black text-ocean flex items-center gap-1.5 shadow-lg uppercase tracking-wider">
                      <MapPin className="w-3 h-3" /> {dest.district}
                    </div>
                  </div>
                  <CardContent className="flex flex-col flex-grow p-6 pt-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-ocean transition-colors">{dest.name}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">{dest.shortDesc}</p>
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-ocean font-bold text-sm tracking-wide">View Details</span>
                      <div className="w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center group-hover:bg-ocean group-hover:text-white transition-all">
                        <Info className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/40 rounded-[3rem] border-2 border-dashed border-gray-200"
          >
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
            <p className="text-gray-500">We couldn't find any locations matching your search or filters.</p>
            <button 
              onClick={() => {setActiveDistrict('All'); setSearchQuery('');}}
              className="mt-6 text-ocean font-bold hover:underline"
            >
              Reset all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Destination Detail Modal */}
      <Modal isOpen={!!selectedDest} onClose={() => setSelectedDest(null)} title={selectedDest?.name} className="max-w-5xl bg-sand/5 overflow-hidden">
        {selectedDest && (
          <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
            <div className="relative w-full h-80 sm:h-[450px] overflow-hidden">
              <img src={selectedDest.img} alt={selectedDest.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-2xl">
                <div className="bg-ocean/90 text-white text-[0.65rem] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-[0.2em] shadow-lg">
                  {selectedDest.district} District
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl leading-none">{selectedDest.name}</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-12">
              <div className="lg:col-span-2 space-y-10">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-ocean/5 border border-gray-50">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-ocean/10 flex items-center justify-center">
                       <Info className="w-6 h-6 text-ocean" />
                    </div>
                    Discovery
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">{selectedDest.fullDesc}</p>
                </div>

                {selectedDest.thingsToDo && selectedDest.thingsToDo.length > 0 && (
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-ocean/5 border border-gray-50">
                    <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                       <div className="w-10 h-10 rounded-2xl bg-ocean/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-ocean" />
                       </div>
                       Experiences
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedDest.thingsToDo.map((thing, idx) => (
                        <div key={idx} className="bg-sand/40 rounded-3xl p-6 flex items-center gap-5 border border-white hover:bg-ocean/5 transition-colors group">
                          <span className="bg-white text-ocean font-black rounded-2xl w-10 h-10 flex items-center justify-center shrink-0 text-sm shadow-sm group-hover:bg-ocean group-hover:text-white transition-colors">{idx + 1}</span>
                          <span className="text-gray-800 font-bold text-lg leading-tight">{thing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-ocean rounded-[2.5rem] p-8 text-white shadow-2xl shadow-ocean/30 relative overflow-hidden">
                   <div className="relative z-10">
                      <h4 className="text-xl font-black mb-4 uppercase tracking-widest opacity-80">Quick Travel Tip</h4>
                      <p className="font-medium text-ocean-light leading-relaxed mb-6">Best visited during the morning hours to avoid the peak tropical sun and experience the tranquility.</p>
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-ocean py-4 rounded-2xl">Book A Guide</Button>
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </div>

                {selectedDest.gallery && selectedDest.gallery.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-gray-900 ml-2">Snapshots</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedDest.gallery.map((imgUrl, idx) => (
                        <div key={idx} className="h-32 rounded-[1.5rem] overflow-hidden shadow-md group">
                          <img src={imgUrl} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
