import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bed,
  Utensils,
  Gamepad2,
  Trophy,
  Fish,
  Coffee,
  Home,
  Users,
  Flame,
  MapPin
} from 'lucide-react';

import { Helmet } from 'react-helmet';

<Helmet>
  <title>Texas Hunting Lodge with Luxury Amenities | PrimeTine Ranch</title>
  <meta
    name="description"
    content="Stay at PrimeTine Ranch’s 4,000 sq ft hunting lodge in East Texas. Enjoy chef-prepared meals, a full game room, private lake access, and high-end accommodations for up to 12 guests."
  />
  <meta
    name="keywords"
    content="Texas hunting lodge, luxury hunting accommodations, East Texas hunting, lodge with lake, hunting lodge near Houston, PrimeTine Ranch lodging, whitetail hunting lodge"
  />
  <link rel="canonical" href="https://primetineranch.com/lodging" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Texas Hunting Lodge with Luxury Amenities | PrimeTine Ranch" />
  <meta
    property="og:description"
    content="Relax after your hunt in our spacious 4,000 sq ft lodge featuring chef-prepared meals, a game room, private lake access, and room for 12 guests."
  />
  <meta property="og:url" content="https://primetineranch.com/lodging" />
  <meta property="og:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Texas Hunting Lodge | PrimeTine Ranch" />
  <meta
    name="twitter:description"
    content="Book your stay at PrimeTine Ranch’s elite Texas hunting lodge. Comfort, cuisine, and world-class hunting come together under one roof."
  />
  <meta name="twitter:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />
</Helmet>



const amenities = [
  {
    icon: Home,
    title: "4,000 Sq Ft Lodge",
    description: "Spacious accommodations that comfortably sleep 12 guests"
  },
  {
    icon: Utensils,
    title: "World Class Dining",
    description: "Exquisite meals using the freshest ingredients and Texas flavors"
  },
  {
    icon: Gamepad2,
    title: "Full Game Room",
    description: "Shuffleboard, pool table, ping-pong, half court basketball and batting cages"
  },
  {
    icon: Users,
    title: "Group Accommodations",
    description: "Perfect for corporate gatherings and family outings"
  },
  {
    icon: Flame,
    title: "Outdoor Relaxation",
    description: "Unwind in peace and quiet next to our firepit under the vast Texas sky"
  },
  {
    icon: Coffee,
    title: "5-Star Treatment",
    description: "Complete hospitality ensuring no one leaves disappointed"
  }
];

const lodgeFeatures = [
  {
    icon: Bed,
    title: "PREMIUM LODGING",
    description: "Our 4,000 sq ft lodge sleeps 12 guests in comfort and style—perfect for unwinding after a successful day in the field."
  },
  {
    icon: Utensils,
    title: "CHEF-PREPARED MEALS",
    description: "Enjoy handcrafted meals made with fresh ingredients and bold Texas flavors, served daily by our in-house team."
  },
  {
    icon: Gamepad2,
    title: "INDOOR GAME ROOM",
    description: "Ping pong, pool, shuffleboard, and more—our fully equipped rec room is designed to help you relax and recharge."
  },
  {
    icon: Trophy,
    title: "OUTDOOR REC ZONE",
    description: "Dial up the energy with our private batting cages and half-court basketball setup—exclusive to guests."
  },
  {
  icon: Fish,
  title: "14-ACRE STOCKED LAKE",
  description: "Our private lake is stocked with bass and catfish and offers kayak access, shoreline casting, and full guest access."
},

  {
    icon: Coffee,
    title: "5-STAR HOSPITALITY",
    description: "From personalized service to pristine spaces, every part of your stay is crafted to deliver a high-end experience."
  }
];


const Lodging = () => {
  const [videoReady, setVideoReady] = useState(false);

  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="bg-charcoal text-tan">

  

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <>
          {/* Desktop video with fade-in once ready */}
         <div className="hidden md:block absolute inset-0 w-full h-full bg-black overflow-hidden">
 <iframe
  src="https://www.youtube.com/embed/ZtyOvLt4M3M?autoplay=1&mute=1&loop=1&playlist=ZtyOvLt4M3M&controls=0&modestbranding=1&showinfo=0&rel=0"
  title="PrimeTine Lodge Hero Video"
  className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  loading="lazy"
/>

</div>





          {/* Mobile fallback image */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            <img
              src="/images/lodge/lodge_1.avif"
              alt="Lodge Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </>

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-topo-pattern opacity-20" />

       <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-6">

  {/* Desktop Panel */}
  <div className="hidden md:inline-block bg-black/30 backdrop-blur-sm rounded-xl px-6 py-8">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4 uppercase">
      Hunter's Headquarters
    </span>
    <h1 className="text-6xl md:text-7xl font-black tracking-wide text-tan drop-shadow-md mb-4">
      THE <span className="text-bronze drop-shadow-md">LODGE</span>
    </h1>
    <p className="text-tan/80 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto">
      Comfortable. Spacious. Built for Hunters.
      <br />
      <span className="text-bronze">
        Where world-class hunting meets authentic Texas hospitality.
      </span>
    </p>
  </div>

  {/* Mobile: compact blurred panel */}
  <div className="md:hidden bg-black/40 backdrop-blur-sm rounded-xl px-4 py-6 inline-block">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4 uppercase">
      Hunter's Headquarters
    </span>
    <h1 className="text-4xl font-black tracking-wide text-tan drop-shadow-md mb-4">
      THE <span className="text-bronze drop-shadow-md">LODGE</span>
    </h1>
    <p className="text-tan/90 text-base leading-relaxed">
      Comfortable. Spacious. Built for Hunters.
      <br />
      <span className="text-bronze">
        Where world-class hunting meets authentic Texas hospitality.
      </span>
    </p>
  </div>
</motion.div>

      </motion.section>

      {/* Lodge Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-gunmetal relative"
      >
        <div className="absolute inset-0 bg-canvas-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-xl border border-olive/20 group aspect-video">
              <img
                src="/images/gallery/living.jpg?preset=webp"
                alt="Current Lodge at Coal Creek"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-xl border border-olive/20 group aspect-square">
                <img
                  src="/images/gallery/bedroom.jpg?preset=webp"
                  alt="Game Room at PrimeTine"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-olive/20 group aspect-square">
                <img
                  src="/images/lodge/basketball.avif"
                  alt="Texas Hunting Lodge Exterior"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4 uppercase">
              Premium Accommodations
            </span>
            <h2 className="text-5xl font-black text-tan drop-shadow-sm tracking-wide mb-6">
              WORLD CLASS <br />
              <span className="text-bronze">HOSPITALITY</span>
            </h2>
            <p className="text-tan/80 text-xl leading-relaxed mb-10">
              Our 4,000 square foot lodge at our sister ranch Coal Creek comfortably sleeps 12 guests 
              and is the perfect place to relax and unwind after a day of hunting, offering a wide range 
              of amenities and world class dining options making your stay with us one to remember.
            </p>

            <div className="bg-olive/20 p-8 border-l-4 border-bronze mb-10 rounded-xl">
              <h3 className="text-xl font-black text-tan mb-4 font-heading">COMING SOON</h3>
              <p className="text-tan/80 text-lg leading-relaxed">
                Our brand new lodge at PrimeTine will be completed fall 2026! PrimeTine offers 
                a fully stocked 14-acre fishing lake and kayaking on site along with our brand new lodge.
              </p>
            </div>

            <div className="bg-charcoal p-10 border border-olive/20 rounded-xl">
              <h3 className="text-2xl font-black text-tan mb-8 tracking-wide font-heading">LODGE AMENITIES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-bronze p-3 group-hover:scale-110 transition-transform duration-300 rounded-full">
                      <amenity.icon className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <h4 className="text-tan font-bold text-sm mb-1">{amenity.title}</h4>
                      <p className="text-tan/70 text-sm leading-relaxed">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Lodge Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-charcoal relative"
      >
        <div className="absolute inset-0 bg-topo-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-tan mb-8 tracking-[0.1em] font-heading">
            THE EXPERIENCE
          </h2>
          <p className="text-tan/90 text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
            After a day of hunting, retreat to our comfortable and relaxing lodge where you can unwind in peace and quiet.
            <br />
            <span className="text-tan/70">We offer all the amenities you need to make your stay comfortable and enjoyable.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {lodgeFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gunmetal p-12 transition-all duration-500 group-hover:bg-olive/80 group-hover:scale-105 border border-olive/20 rounded-xl">
                  <div className="bg-bronze p-6 w-fit mx-auto mb-8 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-12 h-12 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-black text-tan mb-6 tracking-[0.1em] font-heading">{feature.title}</h3>
                  <p className="text-tan/70 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-charcoal relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-canvas-texture opacity-15" />
        <div className="absolute inset-0 bg-topo-pattern opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-olive pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-tan mb-8 tracking-[0.1em] font-heading">
            READY FOR YOUR STAY?
          </h2>
          <p className="text-tan/80 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience the perfect combination of comfort, hospitality, and authentic Texas hunting tradition at PrimeTine Ranch.
          </p>
          <motion.a
            href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-bronze hover:bg-tan text-charcoal px-10 py-5 sm:px-16 sm:py-6 text-lg sm:text-xl font-black tracking-wide transition-all duration-300 inline-block rounded-full shadow-md"
          >
            BOOK YOUR HUNT
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Lodging;
