import { motion } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1546708973-c15147eb8cba?auto=format&fit=crop&w=600&q=80', span: 'md:col-span-2 md:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1544320954-d6215eb37edb?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', span: 'md:col-span-2 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1599084990807-3ea5c1db06a6?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80', span: 'md:col-span-2 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1565557613262-d266ff83e743?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-sans tracking-tight"
          >
            A Glimpse of <span className="text-ocean">Paradise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            The vibrant colors, crystal clear waters, and authentic smiles of Sri Lanka's south. Let the pictures speak for themselves.
          </motion.p>
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[250px] gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
