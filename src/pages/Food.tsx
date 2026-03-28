import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import Card, { CardImage, CardContent } from '../components/ui/Card';

const categories = ['All', 'Seafood 🦐', 'Cafe ☕', 'Local food 🍛', 'Fine Dining 🍷'];

const foodSpots = [
  {
    id: 1,
    name: 'Dilie\'s Local Kitchen',
    category: 'Local food 🍛',
    location: 'Unawatuna',
    rating: '4.9',
    description: 'Authentic Sri Lankan street food experience. Best kottu and hoppers in the south.',
    img: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&w=800&q=80',
    tags: ['Spicy', 'Authentic', 'Dinner']
  },
  {
    id: 2,
    name: 'Mirissa Seafood Market',
    category: 'Seafood 🦐',
    location: 'Mirissa Beach',
    rating: '4.8',
    description: 'Fresh catch of the day grilled to perfection right on the beach.',
    img: 'https://images.unsplash.com/photo-1599084990807-3ea5c1db06a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh', 'Beachfront', 'Dinner']
  },
  {
    id: 3,
    name: 'Salty Pelican Cafe',
    category: 'Cafe ☕',
    location: 'Hiriketiya',
    rating: '4.7',
    description: 'Amazing smoothie bowls and artisan coffee. Perfect post-surf breakfast spot.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    tags: ['Coffee', 'Smoothies', 'Breakfast']
  },
  {
    id: 4,
    name: 'The Lighthouse Restaurant',
    category: 'Fine Dining 🍷',
    location: 'Galle Fort',
    rating: '4.9',
    description: 'A fusion of colonial heritage recipes and contemporary culinary techniques.',
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    tags: ['Wine', 'Romantic', 'Dinner']
  },
  {
    id: 5,
    name: 'Ceylon Curry Club',
    category: 'Local food 🍛',
    location: 'Weligama',
    rating: '4.6',
    description: 'Experience the traditional rice and curry with 8 different local vegetable curries.',
    img: 'https://images.unsplash.com/photo-1605333396914-2cbbcdfb0e4c?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional', 'Vegan Options', 'Lunch']
  },
  {
    id: 6,
    name: 'Blue Wave Beach Cafe',
    category: 'Seafood 🦐',
    location: 'Tangalle',
    rating: '4.5',
    description: 'Laid-back vibe offering jumbo prawns and calamari with a sweet chili glaze.',
    img: 'https://images.unsplash.com/photo-1565557613262-d266ff83e743?auto=format&fit=crop&w=800&q=80',
    tags: ['Sunset View', 'Cocktails', 'Dinner']
  }
];

export default function Food() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSpots = activeCategory === 'All' 
    ? foodSpots 
    : foodSpots.filter(spot => spot.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Culinary Journey of the South
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            From authentic Sri Lankan street food to elegant beachside seafood dining, discover the flavors that make the southern coast a foodie's paradise.
          </motion.p>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-ocean text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Food Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSpots.map((spot) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={spot.id}
              >
                <Card hoverEffect className="h-full flex flex-col group border-none shadow-lg rounded-3xl overflow-hidden cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <CardImage src={spot.img} alt={spot.name} className="h-full" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1">
                       {spot.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-lg text-sm font-bold text-gray-900 flex items-center gap-1 shadow-md">
                       <Star className="w-4 h-4 fill-ocean text-ocean" /> {spot.rating}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-20" />
                  </div>
                  <CardContent className="bg-white p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-ocean transition-colors">{spot.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm flex items-center gap-1.5 mb-5 font-medium">
                       <MapPin className="w-4 h-4 text-ocean" /> {spot.location}
                    </p>
                    <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed text-[15px]">{spot.description}</p>
                    
                    <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {spot.tags.map(tag => (
                         <span key={tag} className="bg-sand/60 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800">
                           {tag}
                         </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
