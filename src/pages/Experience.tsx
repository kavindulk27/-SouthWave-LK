import { motion } from 'framer-motion';
import { Compass, Clock, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const experiences = [
  {
    id: 1,
    title: 'Whale Watching in Mirissa',
    location: 'Mirissa Harbor',
    duration: '4-5 Hours',
    description: 'Set sail into the deep blue ocean to witness the majestic blue whales and playful dolphins in their natural habitat. The southern coast of Sri Lanka is one of the best places in the world for whale watching.',
    img: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
    tags: ['Wildlife', 'Boat Tour', 'Morning']
  },
  {
    id: 2,
    title: 'Catch the Waves at Hiriketiya',
    location: 'Hiriketiya Beach',
    duration: '2-3 Hours',
    description: 'Whether you are a beginner or an experienced surfer, Hiriketiya\'s horseshoe bay offers consistent waves all year round. Grab a board, hit the waves, and relax under the palm trees afterward.',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Surfing', 'Adventure', 'Beach']
  },
  {
    id: 3,
    title: 'Wander Through Galle Fort',
    location: 'Galle',
    duration: 'Half Day',
    description: 'Step back in time as you explore the cobblestone streets of this UNESCO World Heritage site. Admire the Dutch colonial architecture, visit artisan boutiques, and watch the sunset from the iconic fort walls.',
    img: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    tags: ['Culture', 'History', 'Walking Tour']
  },
  {
    id: 4,
    title: 'Visit the Secret Beaches',
    location: 'Tangalle / Mirissa',
    duration: 'Full Day',
    description: 'Escape the crowds and discover hidden coves with pristine sand and crystal-clear waters. Perfect for swimming, sunbathing, and enjoying a quiet slice of tropical paradise.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Relaxation', 'Nature', 'Photography']
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white"
          >
            Unforgettable <span className="text-ocean-light">Experiences</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Dive into the adventures that make the southern coast truly magical. Curated experiences for every type of traveler.
          </motion.p>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative group rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-ocean/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={exp.img} 
                  alt={exp.title} 
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-[4/5] object-center transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-6 lg:px-6">
                 <div className="flex flex-wrap gap-3 mb-4">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-widest text-ocean-light bg-ocean/10 px-4 py-1.5 rounded-full border border-ocean/20">
                        {tag}
                      </span>
                    ))}
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold leading-tight">{exp.title}</h2>
                 
                 <div className="flex flex-wrap items-center gap-6 text-gray-400 font-medium py-4 border-y border-gray-800 my-6">
                    <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-500" /> {exp.location}</div>
                    <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-gray-500" /> {exp.duration}</div>
                 </div>

                 <p className="text-lg text-gray-300 leading-relaxed mb-8">{exp.description}</p>
                 
                 <Button size="lg" className="rounded-full px-8 shadow-ocean/20 shadow-lg text-lg bg-white text-ocean hover:bg-gray-100">
                    <Compass className="w-5 h-5 mr-2" /> Book Experience
                 </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
