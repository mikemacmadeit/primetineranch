import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Users, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const huntImages: { [key: string]: string } = {
  'Whitetail Hunts': '/images/whitetail_7.avif',
  'Axis Deer Hunts': '/optimized-images/axis_11.webp',
  'Fallow Deer Hunts': '/images/fallow.jpeg?preset=webp',
  'Exotic Hunts': '/images/blackbuck_1.jpg?preset=webp',
};

const huntTypes = [
  {
    title: 'Whitetail Hunts',
    icon: Trophy,
    price: '$8,500 – $12,500',
    description:
      'Trophy whitetail hunting on 900+ acres in East Texas. Superior genetics, 100% success rates, and world-class lodging.',
    inclusions: [
      'Up to 3 Day, 2 Night Hunt',
      'Lodging and all meals and beverages',
      'Professional guide service',
      'Caping and quartering included',
      'In-house processing available',
      'In-house taxidermy services on request',
    ],
    featured: true,
  },
  {
    title: 'Axis Deer Hunts',
    icon: Target,
    price: '$5,500',
    description:
      'Gold Medal Axis Deer hunting. These beautiful and challenging animals provide an excellent hunting experience year-round in their natural habitat.',
    inclusions: [
      'Year-round availability',
      'Lodging and all meals and beverages',
      'Professional guide service',
      'Field processing and Trophy Prep',
      'In-house processing available',
      'In-house taxidermy services available',
    ],
  },
  {
    title: 'Fallow Deer Hunts',
    icon: Users,
    price: '$7,000+',
    description:
      'Experience the thrill of hunting these magnificent European deer. Known for their impressive antlers and challenging nature.',
    inclusions: [
      'Year-round availability',
      'Guided hunting experience',
      'Lodging and all meals and beverages',
      'Field processing and Trophy Prep',
      'In-house processing available',
      'In-house taxidermy services available',
    ],
  },
  {
    title: 'Exotic Hunts',
    icon: Target,
    price: 'From $4,500+',
    description:
      'From standard exotics to super exotics like Addax, Wildebeest, and Gemsbok. World-class hunting opportunities for a variety of exotic species in their prime habitat.',
    inclusions: [
      'Year-round availability',
      'Multiple species opportunities',
      'Scimitar Horned Oryx available',
      'Blackbuck, Addax, Wildebeest, and More',
      'Professional guide service',
      'Field processing and Trophy Prep',
      'In-house processing available',
      'In-house taxidermy services available',
    ],
  },
];



const OurHunts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-charcoal text-tan"
    >
      <Helmet>
  <title>Trophy Whitetail & Exotic Hunts in Texas | PrimeTine Ranch</title>
  <meta
    name="description"
    content="Explore trophy Whitetail, Axis, Fallow, and Exotic hunt packages at PrimeTine Ranch. Over 900+ acres in East Texas with luxury lodging, professional guides, and guaranteed experiences."
  />
  <meta
    name="keywords"
    content="Texas whitetail hunts, exotic game ranch, axis deer hunting, fallow deer Texas, guided trophy hunts, PrimeTine Ranch hunts, big game hunting East Texas"
  />
  <link rel="canonical" href="https://primetineranch.com/hunts" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Trophy Whitetail & Exotic Hunts in Texas | PrimeTine Ranch" />
  <meta
    property="og:description"
    content="Book your next trophy hunt in Texas. PrimeTine Ranch offers Whitetail, Axis, and Exotic game hunts with all-inclusive packages and top-tier amenities."
  />
  <meta property="og:url" content="https://primetineranch.com/hunts" />
  <meta property="og:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Book a Trophy Hunt in Texas | PrimeTine Ranch" />
  <meta
    name="twitter:description"
    content="Guided Whitetail and Exotic hunts on 900+ private acres in East Texas. Transparent pricing, year-round availability, and premium lodging."
  />
  <meta name="twitter:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />
</Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage: 'url("/images/deer_2.JPG?preset=webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-topo-pattern opacity-10" />
        <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="hidden md:inline-block bg-black/30 backdrop-blur-sm rounded-xl px-6 py-8">
            <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">
              WORLD CLASS HUNTING EXPERIENCES
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-tan mb-6 tracking-wider font-heading">
              THE <span className="text-bronze">HUNT</span>
            </h1>
            <p className="text-tan/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              At PrimeTine and Coal Creek Ranch, we are committed to providing you with a hunting experience
              that exceeds your expectations.
              <br />
              <span className="text-bronze">Come join us for an unforgettable hunt of a lifetime.</span>
            </p>
          </div>
          <div className="md:hidden bg-black/40 backdrop-blur-sm rounded-xl px-4 py-6 inline-block">
            <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">
              WORLD CLASS HUNTING EXPERIENCES
            </span>
            <h1 className="text-4xl font-black text-tan mb-4 tracking-wider font-heading">
              THE <span className="text-bronze">HUNT</span>
            </h1>
            <p className="text-tan/90 text-base leading-relaxed">
              At PrimeTine and Coal Creek Ranch, we are committed to providing you with a hunting experience
              that exceeds your expectations.
              <br />
              <span className="text-bronze">Come join us for an unforgettable hunt of a lifetime.</span>
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Hunt Grid Sections */}
      {huntTypes.map((hunt, index) => {
        const Icon = hunt.icon;
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-gunmetal' : 'bg-charcoal';
        const image = huntImages[hunt.title] || '/images/fallback.jpg?preset=webp';

        const ImageSection = (
          <div>
            <div className="relative group overflow-hidden rounded-xl border border-olive/20">
              <img
                src={image}
                alt={`Hunter with ${hunt.title.replace(' Hunts', '')}`}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
              {hunt.featured && (
                <div className="absolute top-4 left-4 bg-bronze px-4 py-2">
                  <span className="text-charcoal text-sm font-black tracking-[0.1em]">FEATURED</span>
                </div>
              )}
            </div>
          </div>
        );

        const TextSection = (
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-bronze p-4 rounded-full">
                <Icon className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-tan tracking-wide font-heading">{hunt.title}</h2>
                {hunt.featured && (
                  <span className="text-bronze text-sm font-bold tracking-[0.1em] mt-1 block">MOST POPULAR</span>
                )}
              </div>
            </div>

            <div className="text-3xl font-black text-bronze mb-6 tracking-wide">{hunt.price}</div>

            <p className="text-tan/80 text-xl leading-relaxed mb-10">{hunt.description}</p>

            <div className={`${['Axis Deer Hunts', 'Exotic Hunts'].includes(hunt.title) ? 'bg-gunmetal' : 'bg-charcoal'} p-8 mb-10 border border-olive/20 rounded-xl`}>
              <h3 className="text-tan font-black mb-6 tracking-[0.1em] text-lg font-heading">HUNT INCLUDES:</h3>
              <ul className="space-y-3">
                {hunt.inclusions.map((item, i) => (
                  <li key={i} className="text-tan/70 flex items-center text-lg">
                    <CheckCircle className="w-5 h-5 text-olive mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/booking"
                className="group bg-olive hover:bg-bronze text-charcoal px-10 py-5 text-lg font-black tracking-[0.1em] transition-all duration-300 inline-flex items-center space-x-3 rounded-full shadow-md"
              >
                <span>BOOK THIS HUNT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        );

        return (
          <motion.section
            key={hunt.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`py-32 ${bgClass} relative`}
          >
            <div className="absolute inset-0 bg-canvas-texture opacity-5" />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {isEven ? (
                <>
                  {ImageSection}
                  {TextSection}
                </>
              ) : (
                <>
                  {TextSection}
                  {ImageSection}
                </>
              )}
            </div>
          </motion.section>
        );
      })}


      {/*
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-32 bg-gunmetal relative"
>
  <div className="absolute inset-0 bg-canvas-texture opacity-5" />
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
    <div>
      <div className="relative group overflow-hidden rounded-xl border border-olive/20">
        <img
          src="/images/fishing_package.jpg"
          alt="Bass fishing at PrimeTine Ranch on 14-acre private lake"
          className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-bronze px-4 py-2">
          <span className="text-charcoal text-sm font-black tracking-[0.1em]">NEW FOR 2025</span>
        </div>
      </div>
    </div>

    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-bronze p-4 rounded-full">
          <Target className="w-8 h-8 text-charcoal" />
        </div>
        <div>
          <h2 className="text-4xl font-black text-tan tracking-wide font-heading">
            Bass Fishing Package
          </h2>
          <span className="text-bronze text-sm font-bold tracking-[0.1em] mt-1 block">14-ACRE PRIVATE LAKE</span>
        </div>
      </div>

      <div className="text-3xl font-black text-bronze mb-6 tracking-wide">$950 Add-On</div>

      <p className="text-tan/80 text-xl leading-relaxed mb-10">
        A relaxing, fully guided bass fishing experience on our private lake. Great for families, corporate guests, or non-hunters.
      </p>

      <div className="bg-charcoal p-8 mb-10 border border-olive/20 rounded-xl">
        <h3 className="text-tan font-black mb-6 tracking-[0.1em] text-lg font-heading">PACKAGE INCLUDES:</h3>
        <ul className="space-y-3">
          <li className="text-tan/70 flex items-center text-lg">
            <CheckCircle className="w-5 h-5 text-olive mr-4 flex-shrink-0" />
            14-acre stocked lake access
          </li>
          <li className="text-tan/70 flex items-center text-lg">
            <CheckCircle className="w-5 h-5 text-olive mr-4 flex-shrink-0" />
            Kayak and bank fishing available
          </li>
          <li className="text-tan/70 flex items-center text-lg">
            <CheckCircle className="w-5 h-5 text-olive mr-4 flex-shrink-0" />
            All gear and tackle provided
          </li>
          <li className="text-tan/70 flex items-center text-lg">
            <CheckCircle className="w-5 h-5 text-olive mr-4 flex-shrink-0" />
            Catch and release encouraged
          </li>
          <li className="text-tan/70 flex items-center text-lg">
            <CheckCircle className="w-5 h-5 text-olive mr-4 flex-shrink-0" />
            Optional lodging and meals
          </li>
        </ul>
      </div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/booking"
          className="group bg-olive hover:bg-bronze text-charcoal px-10 py-5 text-lg font-black tracking-[0.1em] transition-all duration-300 inline-flex items-center space-x-3 rounded-full shadow-md"
        >
          <span>BOOK FISHING</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  </div>
</motion.section>
*/}


 
<section className="bg-gunmetal py-40 relative border-t border-olive/20">
  <div className="absolute inset-0 bg-topo-pattern opacity-5" />
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
    <div className="w-16 h-[2px] bg-bronze mx-auto mb-10" />
    <h2 className="text-6xl sm:text-7xl font-black text-tan mb-4 tracking-[0.25em] font-heading">
      PRICE LIST
    </h2>
    <p className="text-tan/60 text-lg mb-20 max-w-2xl mx-auto">
      Transparent pricing for trophy whitetail, exotic species, lodging, and more.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-tan text-lg font-medium">

      {/* Whitetail Deer */}
      <div className="bg-charcoal/80 rounded-2xl p-10 shadow-inner border border-olive/30 hover:shadow-bronze/30 transition-all">
        <h3 className="text-xl font-bold text-bronze uppercase tracking-wide mb-6">Whitetail Deer</h3>
        <div className="space-y-4 font-light tracking-wide font-mono">
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>&lt;180"</span><span className="font-semibold">$8,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>180–199"</span><span className="font-semibold">$10,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>200–230"</span><span className="font-semibold">$11,500</span></div>
          <div className="flex justify-between"><span>230"+</span><span className="font-semibold">$12,500</span></div>
        </div>
      </div>

      {/* Exotic Antelope */}
      <div className="bg-charcoal/80 rounded-2xl p-10 shadow-inner border border-olive/30 hover:shadow-bronze/30 transition-all">
        <h3 className="text-xl font-bold text-bronze uppercase tracking-wide mb-6">Exotic Antelope</h3>
        <div className="space-y-4 font-light tracking-wide font-mono">
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Addax</span><span>$9,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Blackbuck</span><span>$5,500</span></div>
          <div className="flex justify-between"><span>Scimitar Oryx</span><span>$6,500</span></div>
        </div>
      </div>

      {/* Rams & Sheep */}
      <div className="bg-charcoal/80 rounded-2xl p-10 shadow-inner border border-olive/30 hover:shadow-bronze/30 transition-all">
        <h3 className="text-xl font-bold text-bronze uppercase tracking-wide mb-6">Rams & Sheep</h3>
        <div className="space-y-4 font-light tracking-wide font-mono">
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Corsican Ram</span><span>$4,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Four-Horn Ram</span><span>$4,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Texas Dall Sheep</span><span>$4,500</span></div>
          <div className="flex justify-between"><span>Black Hawaiian</span><span>$4,500</span></div>
        </div>
      </div>

      {/* Safari & Exotic Game */}
      <div className="bg-charcoal/80 rounded-2xl p-10 shadow-inner border border-olive/30 hover:shadow-bronze/30 transition-all">
        <h3 className="text-xl font-bold text-bronze uppercase tracking-wide mb-6">Safari & Exotic Game</h3>
        <div className="space-y-4 font-light tracking-wide font-mono">
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Blue Wildebeest</span><span>$9,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Gemsbok</span><span>$9,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Kudu</span><span>POR</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Sable</span><span>POR</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Ibex</span><span>POR</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Zebra</span><span>$8,000</span></div>
       </div>
      </div>

      {/* Big Game & Exotic Deer */}
      <div className="bg-charcoal/80 rounded-2xl p-10 shadow-inner border border-olive/30 hover:shadow-bronze/30 transition-all">
        <h3 className="text-xl font-bold text-bronze uppercase tracking-wide mb-6">Big Game & Exotic Deer</h3>
        <div className="space-y-4 font-light tracking-wide font-mono">
          <div className="flex justify-between"><span>Axis Deer</span><span>$5,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Bison Cow</span><span>$4,500</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Bison Bull</span><span>$8,000</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Pere David</span><span>$9,000</span></div>
          <div className="flex justify-between"><span>Red Stag</span><span>POR</span></div>
        </div>
      </div>

      {/* Lodging & Enhancements */}
      <div className="bg-charcoal/80 rounded-2xl p-10 shadow-inner border border-olive/30 hover:shadow-bronze/30 transition-all">
        <h3 className="text-xl font-bold text-bronze uppercase tracking-wide mb-6">Lodging & Enhancements</h3>
        <div className="space-y-4 font-light tracking-wide font-mono">
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Lodging (PP/PN)</span><span>$200</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Recommended Tips</span><span>10–15%</span></div>
          <div className="flex justify-between border-b border-olive/20 pb-2"><span>Group/Corporate</span><span>—</span></div>
          <div className="flex justify-between"><span>Discounts</span><span>Available</span></div>
        </div>
      </div>
    </div>

    <p className="text-tan/50 text-sm mt-20 max-w-xl mx-auto italic">
      More options available. Contact us for custom hunts, additional species, and group pricing.
    </p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 flex justify-center"
    >
      <Link
        to="/booking"
        className="group bg-bronze hover:bg-tan text-charcoal px-10 py-5 sm:px-14 sm:py-6 text-lg sm:text-xl font-black tracking-wide transition-all duration-300 inline-flex items-center space-x-4 transform hover:scale-105 active:scale-95 rounded-full shadow-md"
      >
        <span>BOOK NOW</span>
        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </motion.div>
  </div>
</section>


{/* Gradient into footer */}
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-olive pointer-events-none" />


    </motion.div>
  );
};

export default OurHunts;
