import { useEffect, useState } from 'react';


import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Trophy, Target, ArrowRight, Play } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Testimonials from '../components/Testimonials';
import StatCard from '../components/StatCard';





const HomePage = () => {
  


  return (
    <>
      <Helmet>
<title>PrimeTine Ranch | Texas Trophy Whitetail & Exotic Hunts</title>
<meta
  name="description"
  content="Located in East Texas, PrimeTine Ranch offers world-class Whitetail, Axis, Fallow, and Exotic game hunts on 900+ acres. Book your trophy hunt today with luxury lodging included."
/>
<meta
  name="keywords"
  content="Texas hunting ranch, whitetail hunts Texas, axis deer hunting, exotic game ranch, fallow deer hunts Texas, trophy hunting East Texas, PrimeTine Ranch, hunting lodge Texas"
/>

<meta property="og:title" content="PrimeTine Ranch | Texas Trophy Whitetail & Exotic Hunts" />
<meta
  property="og:description"
  content="Texas's premier destination for Whitetail and Exotic game hunts. 900+ acres in East Texas with luxury lodging and top-tier genetics."
/>
<meta
  property="og:image"
  content="https://primetineranch.com/images/og-image.jpg"
/>
<meta property="og:url" content="https://primetineranch.com" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PrimeTine Ranch | Texas Trophy Hunts" />
<meta
  name="twitter:description"
  content="Book your next trophy Whitetail or Exotic hunt at PrimeTine Ranch in East Texas. Luxury lodging, elite herd genetics, and unforgettable experiences."
/>
<meta name="twitter:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

<link rel="canonical" href="https://primetineranch.com/" />
<link rel="icon" type="image/png" href="https://www.primetineranch.com/primetan_favicon.png" />
<link rel="shortcut icon" href="https://www.primetineranch.com/primetan_favicon.png" />
<link rel="apple-touch-icon" href="https://www.primetineranch.com/primetan_favicon.png" />
<meta name="theme-color" content="#1a1a1a" />




</Helmet>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-charcoal text-tan"
      >
     <section className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
  {/* Background YouTube Video */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 w-[250vw] h-[140vh] md:w-[140vw] md:h-[120vh] -translate-x-1/2 -translate-y-1/2">
      <iframe
        src="https://www.youtube.com/embed/-RR7K7Gbc9I?autoplay=1&mute=1&loop=1&playlist=-RR7K7Gbc9I&controls=0&modestbranding=1&showinfo=0&rel=0"
        title="PrimeTine Ranch Hero Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        loading="lazy"
        className="w-full h-full pointer-events-none"
      />
    </div>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />
  <div className="absolute inset-0 bg-topo-pattern opacity-20 z-10" />

  {/* Hero Content */}
  <div className="relative z-20 text-center px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
    <img
      src="/images/primetan_4.png"
      alt="PrimeTine Ranch logo"
      className="w-[260px] sm:w-[360px] lg:w-[440px] mx-auto drop-shadow-xl mb-8"
      loading="lazy"
      decoding="async"
    />
    <p className="text-tan/90 text-base sm:text-lg md:text-2xl leading-relaxed font-medium mb-10">
      Located just outside Crockett, Texas, this premier trophy hunting destination offers world-class Whitetail, Axis, Fallow, and exotic game.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link
        to="/booking"
        className="group bg-olive hover:bg-bronze text-charcoal px-8 py-4 text-base sm:text-lg font-black tracking-wide transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 active:scale-95 rounded-full"
      >
        <span>BOOK A HUNT</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
      <Link
        to="/gallery"
        className="group border-2 border-tan text-tan hover:bg-tan hover:text-charcoal px-8 py-4 text-base sm:text-lg font-black tracking-wide transition-all duration-300 flex items-center space-x-3 active:scale-95 rounded-full"
      >
        <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span>TROPHY WALL</span>
      </Link>
    </div>
  </div>
</section>



        {/* Stats Section */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-24 sm:py-32 lg:py-40 bg-gunmetal relative"
>
  <div className="absolute inset-0 bg-canvas-texture opacity-10 animate-slow-pan" />
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StatCard
        icon={<MapPin />}
        value="900+"
        label="HUNTING ACRES"
        description="East Texas Piney Woods"
        delay={0}
      />
      <StatCard
        icon={<Trophy />}
        value="9"
        label="SPECIES"
        description="Whitetail, Axis, Fallow & Exotics"
        delay={0.2}
      />
      <StatCard
        icon={<Target />}
        value="12"
        label="GUEST CAPACITY"
        description="4,000 sq ft Lodge"
        delay={0.4}
      />
    </div>
  </div>
</motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 sm:py-32 lg:py-40 bg-charcoal relative"
        >
          <div className="absolute inset-0 bg-topo-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-bronze text-sm font-bold tracking-[0.2em] mb-4 block">
                  EAST TEXAS PREMIER
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-tan tracking-wide leading-tight font-heading mb-6">
                  WHERE HERITAGE MEETS <br />
                  <span className="text-bronze">TROPHY HUNTING</span>
                </h2>
                <p className="text-tan/80 text-lg leading-relaxed mb-6">
                  Welcome to PrimeTine Ranch — located in the pine-drenched hills of Houston County, Texas. Just outside Crockett, our properties offer elite Whitetail, Axis, Fallow, and exotic hunts on sprawling, meticulously managed land.
                </p>
                <p className="text-tan/70 text-lg leading-relaxed mb-10">
                  Together with our sister operation, Coal Creek, we offer unforgettable experiences for hunters of all levels — whether you're chasing a world-class buck, entertaining clients, or making lifelong memories with family. Your stay will be just as impressive as your hunt.
                </p>
                <Link
                  to="/hunts"
                  className="group bg-bronze hover:bg-bronze/80 text-charcoal px-8 py-4 text-base sm:text-lg font-black tracking-wide transition-all duration-300 inline-flex items-center space-x-3 active:scale-95 rounded-full"
                >
                  <span>EXPLORE HUNTS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: '/images/whitetail_3.PNG?preset=webp', alt: 'Trophy Whitetail Buck', delay: false },
                  { src: '/images/fallow.jpeg?preset=webp', alt: 'Fallow Deer in East Texas', delay: false },
                  { src: '/images/webp/all/axis_3.webp?preset=webp', alt: 'Axis Deer Trophy Shot', delay: true },
                  { src: '/optimized-images/bb_10.webp', alt: 'Blackbuck Antelope', delay: true },
                ].map(({ src, alt, delay }, i) => (
                  <div
                    key={i}
                    className={`aspect-square overflow-hidden border border-olive/20 rounded-lg ${delay ? 'mt-12' : ''}`}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hunt Types Section */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-24 sm:py-32 lg:py-40 bg-gunmetal relative"
>
  <div className="absolute inset-0 bg-canvas-texture opacity-10" />
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-black text-tan mb-8 tracking-wide font-heading">OUR HUNTS</h2>
      <p className="text-tan/90 text-base sm:text-xl max-w-4xl mx-auto leading-relaxed">
        From Whitetail to Axis, Fallow, and other Exotics.<br />
        <span className="text-bronze">World-class trophy hunting in the heart of East Texas.</span>
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
         {
  title: 'WHITETAIL',
  label: 'Premier trophy hunts with 200–300+ class bucks and top genetics',
  image: '/images/whitetail_8.avif',
  to: '/hunts#whitetail',
},
{
  title: 'AXIS DEER',
  label: 'Year-round Axis hunts with Gold Medal potential and spot-and-stalk action',
  image: '/images/axis_7.JPG?preset=webp',
  to: '/hunts#axis',
},
{
  title: 'FALLOW',
  label: 'European-style trophies in scenic East Texas guided by seasoned pros',
  image: '/images/fallow.jpeg?preset=webp',
  to: '/hunts#fallow',
},
{
  title: 'OTHER EXOTICS',
  label: 'Blackbuck, Oryx, and more — global game with custom hunting packages',
  image: '/images/animal_2.PNG?preset=webp',
  to: '/hunts#exotics',
},

      ].map((hunt) => (
        <Link to={hunt.to} key={hunt.title} className="text-center group">
          <div className="bg-charcoal p-10 transition-all duration-500 group-hover:bg-olive group-hover:scale-105 border border-olive/20">
            <div className="aspect-square bg-gunmetal mb-6 border border-olive/20 overflow-hidden">
              <img
                src={hunt.image}
                alt={hunt.title}
                width={400}
                height={400}
                className="w-full h-full object-cover object-center aspect-square"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-tan mb-3 tracking-wide font-heading">{hunt.title}</h3>
            <p className="text-tan/70 text-sm font-medium mb-1">{hunt.label}</p>
           
          </div>
        </Link>
      ))}
    </div>
  </div>
</motion.section>


        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 sm:py-32 lg:py-40 bg-charcoal relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-canvas-texture opacity-15" />
          <div className="absolute inset-0 bg-topo-pattern opacity-10" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-black text-tan mb-12 tracking-wide font-heading">TESTIMONIALS</h2>
              <Testimonials />
            </div>
          </div>
        </motion.section>

        {/* Partners */}
<section className="py-24 bg-gunmetal relative">
  <div className="absolute inset-0 bg-canvas-texture opacity-5" />
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-tan mb-8 tracking-wide font-heading">
        OUR PARTNERS
      </h2>
      <p className="text-tan/70 text-lg max-w-2xl mx-auto leading-relaxed">
        Trusted brands, sponsors, and collaborators who support PrimeTine Ranch.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
      {[
        { name: 'EWA', src: '/images/EWA.png?preset=webp' },
        { name: 'Zerotech', src: '/images/zerotech.webp' },
        { name: 'Kuiu', src: '/images/kuiu_2.png?preset=webp' },
        { name: 'SCI', src: '/images/sci.png' },
        { name: 'Chene', src: '/images/chene_2.avif' },
        { name: 'Heavy Rack', src: '/images/heavyrack_white.png' },
        { name: 'Stealth Vision', src: '/images/stealth_2.png' },
      ].map((partner) => (
        <div
          key={partner.name}
          className="bg-charcoal border border-olive/20 p-6 rounded-lg flex items-center justify-center hover:bg-olive transition duration-300"
        >
          <img
  src={partner.src}
  alt={`${partner.name} Logo`}
  className="h-24 sm:h-28 md:h-32 object-contain mx-auto transition duration-300"
  loading="lazy"
  decoding="async"
/>

        </div>
      ))}
    </div>
  </div>
</section>




        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 sm:py-32 lg:py-40 bg-charcoal relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-canvas-texture opacity-15" />
          <div className="absolute inset-0 bg-topo-pattern opacity-10" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-olive pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-tan mb-8 tracking-wide font-heading">
              READY TO HUNT?
            </h2>
            <p className="text-tan/90 text-base sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Book your world-class hunting experience today. Whether you're looking for a corporate gathering, a family outing, or a solo adventure, we're conveniently located between Houston and Dallas.
            </p>
            <Link
              to="/booking"
              className="group bg-bronze hover:bg-tan text-charcoal px-10 py-5 sm:px-16 sm:py-6 text-lg sm:text-xl font-black tracking-wide transition-all duration-300 inline-flex items-center space-x-4 transform hover:scale-105 active:scale-95 rounded-full"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default HomePage;
