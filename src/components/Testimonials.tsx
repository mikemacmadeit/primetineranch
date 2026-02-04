import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Karissa Cordell',
    date: '6 months ago',
    review:
      'Our family had the best time at PrimeTine Ranch! We were treated like royalty, shot animals that exceeded our expectations, fed great food, went fishing, and had the best guide (Cody). We have three teenagers who loved the basketball court and sporting equipment as well as the indoor fun! The accommodations were very clean, comfortable, and relaxing. We will most definitely be back soon.',
    meta: '18 reviews · 2 photos',
    rating: 5,
  },
  {
    name: 'Jason',
    date: '1 year ago',
    review:
      'From the hunt to the accommodations, my time at PrimeTine was amazing! Great food, great hunting. Highly recommend to anyone looking for a whitetail or exotic hunt in East Texas.',
    meta: '',
    rating: 5,
  },
  {
    name: 'Chris T.',
    date: '1 year ago',
    review:
      'A hidden gem so close to Houston. The trophy exotics are an incredible experience to hunt or just watch and take pictures. The facilities are 5 star, and the ranch manager is a pleasure to work with.',
    meta: '',
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 6000); // ⏱ 6 seconds per testimonial
  return () => clearInterval(interval);
}, []);


  const current = testimonials[index];

  return (
    <div className="relative h-[340px] sm:h-[300px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-gunmetal/80 border border-tan/20 p-10 sm:p-12 rounded-2xl max-w-3xl w-full mx-auto relative shadow-xl text-left"
        >
          <div className="absolute top-4 left-4 text-tan/20 text-[6rem] leading-none pointer-events-none select-none font-serif z-0">
            “
          </div>

          <div className="flex space-x-1 mb-4 z-10 relative">
            {Array(current.rating)
              .fill(0)
              .map((_, idx) => (
                <Star key={idx} size={18} className="text-bronze fill-bronze" />
              ))}
          </div>

          <blockquote className="text-tan text-lg sm:text-xl leading-relaxed font-medium relative z-10">
            {current.review}
          </blockquote>

          <div className="mt-6 text-tan/90 text-lg font-bold relative z-10">{current.name}</div>
          {(current.meta || current.date) && (
            <div className="text-tan/60 text-sm relative z-10">
              {[current.meta, current.date].filter(Boolean).join(' — ')}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
