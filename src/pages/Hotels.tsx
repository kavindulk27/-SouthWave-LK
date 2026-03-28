import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

// Mock Data
const hotels = [
  {
    id: 'h1',
    name: 'Ocean View Villas',
    location: 'Mirissa, Southern Province',
    price: '$120',
    rating: '4.9',
    reviews: 128,
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    amenities: ['Pool', 'Beachfront', 'Free WiFi', 'Breakfast included'],
    type: 'Villa'
  },
  {
    id: 'h2',
    name: 'The Galle Retreat',
    location: 'Galle Fort, Southern Province',
    price: '$200',
    rating: '4.8',
    reviews: 84,
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    amenities: ['Spa', 'Air Conditioning', 'Restaurant', 'Bar'],
    type: 'Boutique Hotel'
  },
  {
    id: 'h3',
    name: 'Weligama Surf Camp',
    location: 'Weligama, Southern Province',
    price: '$85',
    rating: '4.7',
    reviews: 256,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    amenities: ['Surf Lessons', 'Shared Kitchen', 'Yoga Deck', 'Cafe'],
    type: 'Hostel'
  },
  {
    id: 'h4',
    name: 'Hiriketiya Beach Haven',
    location: 'Hiriketiya, Southern Province',
    price: '$150',
    rating: '4.9',
    reviews: 95,
    img: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80',
    amenities: ['Ocean View', 'Infinity Pool', 'King Bed'],
    type: 'Resort'
  },
  {
    id: 'h5',
    name: 'Tangalle Secret Cove',
    location: 'Tangalle, Southern Province',
    price: '$180',
    rating: '4.6',
    reviews: 62,
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
    amenities: ['Private Beach', 'Eco-friendly', 'Breakfast'],
    type: 'Eco Lodge'
  },
  {
    id: 'h6',
    name: 'Unawatuna Paradise Resort',
    location: 'Unawatuna, Southern Province',
    price: '$110',
    rating: '4.5',
    reviews: 312,
    img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
    amenities: ['Pool', 'Bar', 'Live Music', 'Gym'],
    type: 'Resort'
  }
];

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState<typeof hotels[0] | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters (Airbnb Style) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Stays in Southern Sri Lanka</h1>
            <p className="text-gray-500 font-medium">Over 1,000 stays • Jan 12 - Jan 18 • 2 Guests</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:border-gray-900 hover:shadow-md transition-all whitespace-nowrap bg-white font-medium text-sm">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:border-gray-900 hover:shadow-md transition-all whitespace-nowrap bg-white font-medium text-sm">
              Price <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:border-gray-900 hover:shadow-md transition-all whitespace-nowrap bg-white font-medium text-sm">
              Property Type <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:border-gray-900 hover:shadow-md transition-all whitespace-nowrap bg-white font-medium text-sm">
              Amenities <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {hotels.map((hotel, i) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedHotel(hotel)}
              className="cursor-pointer group flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4">
                <img 
                  src={hotel.img} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-gray-900 shadow-sm">
                  {hotel.type}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center gap-1 leading-tight">{hotel.location.split(',')[0]}</h3>
                  <p className="text-gray-500 text-sm mt-1">{hotel.name}</p>
                  <p className="text-gray-500 text-sm mt-0.5">Jan 12 - Jan 18</p>
                  <p className="mt-2 text-gray-900"><span className="font-semibold">{hotel.price}</span> <span className="text-gray-900 font-normal">night</span></p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
                  <span className="text-sm font-medium">{hotel.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal isOpen={!!selectedHotel} onClose={() => setSelectedHotel(null)} className="max-w-5xl bg-white p-0">
        {selectedHotel && (
          <div className="w-full flex flex-col custom-scrollbar">
            <div className="w-full h-64 sm:h-96 relative shrink-0">
               <img src={selectedHotel.img} alt={selectedHotel.name} className="w-full h-full object-cover" />
               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-gray-900 shadow-md">
                  {selectedHotel.type}
               </div>
            </div>
            <div className="p-6 md:p-10 flex-grow">
               <div className="flex flex-col lg:flex-row justify-between items-start gap-10 border-b border-gray-200 pb-10 mb-10">
                  <div className="flex-1">
                     <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedHotel.name}</h2>
                     <p className="text-gray-600 flex items-center gap-2 text-lg mb-6 font-medium">
                       <MapPin className="w-5 h-5 text-ocean" /> {selectedHotel.location}
                     </p>
                     <div className="flex items-center gap-6 text-base text-gray-700 bg-gray-50 w-fit px-4 py-2 rounded-xl">
                        <span className="flex items-center gap-1.5 font-bold"><Star className="w-5 h-5 fill-gray-900 text-gray-900" /> {selectedHotel.rating}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span className="underline font-medium hover:text-ocean cursor-pointer">{selectedHotel.reviews} reviews</span>
                     </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 w-full lg:w-[380px] shadow-2xl flex-shrink-0">
                     <div className="text-2xl font-bold text-gray-900 mb-6">{selectedHotel.price} <span className="text-base font-normal text-gray-500">/ night</span></div>
                     <Button size="lg" className="w-full rounded-xl py-6 text-lg shadow-ocean/30 shadow-lg">Reserve now</Button>
                     <p className="text-center text-sm text-gray-500 mt-4 font-medium">You won't be charged yet</p>
                  </div>
               </div>

               <div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">What this place offers</h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                    {selectedHotel.amenities.map(amenity => (
                       <div key={amenity} className="flex items-center gap-3 text-gray-700 text-lg">
                          <div className="w-2 h-2 rounded-full bg-ocean" /> {amenity}
                       </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
