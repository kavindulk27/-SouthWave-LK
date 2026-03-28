import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Wallet, CheckCircle2, ChevronRight, Map, Coffee, Waves } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

const budgets = ['Budget', 'Standard', 'Luxury'];
const durations = [2, 3, 4, 5];

type PlanType = {
  day: number;
  morning: { title: string; desc: string; icon: any };
  afternoon: { title: string; desc: string; icon: any };
  evening: { title: string; desc: string; icon: any };
};

const DUMMY_PLAN: PlanType[] = [
  {
    day: 1,
    morning: { title: 'Arrival & Beach Time', desc: 'Check in and head straight to Hiriketiya Beach for a relaxing morning swim.', icon: Waves },
    afternoon: { title: 'Surf Lesson', desc: 'Catch your first waves with a local instructor.', icon: Map },
    evening: { title: 'Beachfront Dinner', desc: 'Enjoy fresh seafood at the Salty Pelican.', icon: Coffee },
  },
  {
    day: 2,
    morning: { title: 'Whale Watching', desc: 'Set sail early from Mirissa harbor to spot blue whales.', icon: Map },
    afternoon: { title: 'Secret Beach', desc: 'Relax at the hidden gems of Mirissa.', icon: Waves },
    evening: { title: 'Sunset Cocktails', desc: 'Watch the sunset from Coconut Tree Hill.', icon: Coffee },
  },
  {
    day: 3,
    morning: { title: 'Galle Fort Tour', desc: 'Explore the historic Dutch colonial streets.', icon: Map },
    afternoon: { title: 'Boutique Shopping', desc: 'Shop for local crafts and gems inside the fort.', icon: Coffee },
    evening: { title: 'Fine Dining', desc: 'Dinner at a heritage restaurant in Galle.', icon: Coffee },
  },
  {
    day: 4,
    morning: { title: 'Turtle Hatchery', desc: 'Visit the conservation project in Habaraduwa.', icon: Map },
    afternoon: { title: 'Unawatuna Swing', desc: 'Get that famous Instagram shot at Dalawella Beach.', icon: Waves },
    evening: { title: 'Beach Party', desc: 'Experience the vibrant nightlife of Unawatuna.', icon: Coffee },
  },
  {
    day: 5,
    morning: { title: 'Yoga & Wellness', desc: 'Start the day with a relaxing yoga session.', icon: Map },
    afternoon: { title: 'Cooking Class', desc: 'Learn to make authentic Sri Lankan rice and curry.', icon: Coffee },
    evening: { title: 'Departure', desc: 'Head back to the airport with amazing memories.', icon: Map },
  }
];

export default function Plan() {
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState('Standard');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<PlanType[] | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setPlan(null);
    
    // Fake loading delay for effect
    setTimeout(() => {
      setPlan(DUMMY_PLAN.slice(0, days));
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-5 py-2.5 rounded-full font-bold text-sm mb-8 border border-ocean/20 shadow-sm"
          >
            <Sparkles className="w-4 h-4" /> AI-Powered Trip Generator
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Design Your <span className="text-ocean">Dream Trip</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Tell us your preferences, and our smart engine will craft the perfect southern itinerary for you in seconds.
          </motion.p>
        </div>

        {/* Generator Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Duration */}
            <div>
               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                 <Calendar className="w-6 h-6 text-ocean" /> How many days?
               </h3>
               <div className="flex flex-wrap gap-3">
                 {durations.map(d => (
                   <button
                     key={d}
                     onClick={() => setDays(d)}
                     className={`px-6 py-3.5 rounded-2xl font-bold transition-all ${
                       days === d 
                         ? 'bg-ocean text-white shadow-lg shadow-ocean/30 transform scale-105' 
                         : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm'
                     }`}
                   >
                     {d} Days
                   </button>
                 ))}
               </div>
            </div>

            {/* Budget */}
            <div>
               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                 <Wallet className="w-6 h-6 text-ocean" /> What's your budget?
               </h3>
               <div className="flex flex-wrap gap-3">
                 {budgets.map(b => (
                   <button
                     key={b}
                     onClick={() => setBudget(b)}
                     className={`px-6 py-3.5 rounded-2xl font-bold transition-all ${
                       budget === b 
                         ? 'bg-ocean text-white shadow-lg shadow-ocean/30 transform scale-105' 
                         : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm'
                     }`}
                   >
                     {b}
                   </button>
                 ))}
               </div>
            </div>
          </div>

          <div className="mt-14 text-center border-t border-gray-100 pt-10">
             <Button 
               size="lg" 
               className="w-full md:w-auto px-12 py-5 rounded-full text-xl shadow-ocean/30 shadow-xl"
               onClick={handleGenerate}
               disabled={isGenerating}
             >
               {isGenerating ? (
                 <span className="flex items-center gap-3 animate-pulse">
                   <Sparkles className="w-6 h-6 animate-spin" /> Generating Magic...
                 </span>
               ) : (
                 <span className="flex items-center gap-3">
                   Generate My Itinerary <ChevronRight className="w-6 h-6" />
                 </span>
               )}
             </Button>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {plan && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans">Your {days}-Day {budget} Trip</h2>
                 <p className="text-ocean font-bold mt-3 text-lg">Curated specially for you</p>
              </div>

              {plan.map((dayPlan, index) => (
                <motion.div 
                  key={dayPlan.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="border-none shadow-xl overflow-hidden rounded-[2rem]">
                    <div className="bg-sand/40 border-b border-sand-dark/20 px-8 py-5 flex items-center gap-4">
                       <span className="bg-ocean text-white font-bold rounded-full w-10 h-10 flex flex-col items-center justify-center text-lg shadow-md">
                         {dayPlan.day}
                       </span>
                       <h3 className="text-2xl font-bold text-gray-900">Day {dayPlan.day}</h3>
                    </div>
                    <CardContent className="p-0">
                       <div className="divide-y divide-gray-100">
                         {['morning', 'afternoon', 'evening'].map((timeStr) => {
                           const time = timeStr as 'morning' | 'afternoon' | 'evening';
                           const Icon = dayPlan[time].icon;
                           return (
                             <div key={time} className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 lg:gap-8 hover:bg-gray-50 transition-colors">
                               <div className="sm:w-32 shrink-0">
                                 <h4 className="font-bold text-gray-400 uppercase tracking-widest text-sm pt-1">{time}</h4>
                               </div>
                               <div className="flex gap-5">
                                 <div className="bg-ocean/10 p-4 rounded-2xl h-fit text-ocean shrink-0 shadow-sm">
                                    <Icon className="w-6 h-6" />
                                 </div>
                                 <div className="pt-1">
                                   <h5 className="text-xl font-bold text-gray-900 mb-2">{dayPlan[time].title}</h5>
                                   <p className="text-gray-600 leading-relaxed text-[16px]">{dayPlan[time].desc}</p>
                                 </div>
                               </div>
                             </div>
                           );
                         })}
                       </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: plan.length * 0.15 + 0.2 }}
                className="mt-12 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-2xl text-center"
              >
                 <CheckCircle2 className="w-20 h-20 text-ocean mx-auto mb-6 drop-shadow-sm" />
                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to book this trip?</h3>
                 <p className="text-gray-600 mb-10 max-w-lg mx-auto text-lg">Save this itinerary to your email or share it with your travel buddies.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <Button variant="outline" size="lg" className="rounded-xl border-2 px-10">Share Link</Button>
                    <Button size="lg" className="rounded-xl shadow-lg shadow-ocean/30 px-10">Book Accommodations</Button>
                 </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
