import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, TrendingUp, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';



const Genetics = () => {

 return (
    <>
      <Helmet>
        <title>Elite Herd Genetics & Breeding Program | PrimeTine Ranch</title>
        <meta
          name="description"
          content="Explore PrimeTine Ranch's world-class genetic breeding program. We produce trophy-class Whitetail, Axis, Fallow, and Blackbuck through responsible wildlife management in East Texas."
        />
        <meta
          name="keywords"
          content="trophy deer genetics, whitetail breeding program Texas, axis deer genetics, exotic game ranch East Texas, responsible game management, sustainable deer herds, fallow deer genetics"
        />
        <link rel="canonical" href="https://primetineranch.com/genetics" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elite Herd Genetics & Breeding Program | PrimeTine Ranch" />
        <meta
          property="og:description"
          content="Discover our elite breeding program focused on sustainable, high-performance genetics. PrimeTine Ranch is shaping the future of Whitetail and exotic hunting in East Texas."
        />
        <meta property="og:url" content="https://primetineranch.com/genetics" />
        <meta property="og:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elite Deer & Exotic Genetics | PrimeTine Ranch" />
        <meta
          name="twitter:description"
          content="Sustainability, trophy potential, and habitat harmony — all bred into our Whitetail, Axis, Fallow, and Blackbuck herds at PrimeTine Ranch."
        />
        <meta name="twitter:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />
      </Helmet>

   
  


    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-charcoal text-tan"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <>

{/* YOUTUBE EMBED: Fullscreen Hero for Genetics */}
<div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
  <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2">
    <iframe
      src="https://www.youtube.com/embed/o-GkN9axsR8?autoplay=1&mute=1&loop=1&playlist=o-GkN9axsR8&controls=0&modestbranding=1&showinfo=0&rel=0"
      title="PrimeTine Genetics Hero Video"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      loading="lazy"
      className="w-full h-full pointer-events-none"
    />
  </div>
</div>


  {/* Mobile fallback image */}
  <div className="block md:hidden absolute inset-0 w-full h-full">
    <img
      src="/images/breed_axis.jpg?preset=webp"
      alt="Genetics Hero"
      className="w-full h-full object-cover"
    />
  </div>
</>


        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-topo-pattern opacity-20" />

        {/* Text Content */}
        <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-6">

  {/* Desktop Panel */}
  <div className="hidden md:inline-block bg-black/30 backdrop-blur-sm rounded-xl px-6 py-8">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">
      STEWARDSHIP IN ACTION
    </span>
    <h1 className="text-5xl md:text-7xl font-black text-tan mb-6 tracking-wider font-heading">
      ELITE <span className="text-bronze">GENETICS</span>
    </h1>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto text-tan/80 leading-relaxed">
      Health. Heritage. Habitat.
      <br />
      <span className="text-bronze">
        PrimeTine's commitment to conservation through breeding excellence.
      </span>
    </p>
  </div>

  {/* Mobile: compact blurred panel */}
  <div className="md:hidden bg-black/40 backdrop-blur-sm rounded-xl px-4 py-6 inline-block">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">
      STEWARDSHIP IN ACTION
    </span>
    <h1 className="text-4xl font-black text-tan mb-4 tracking-wider font-heading">
      ELITE <span className="text-bronze">GENETICS</span>
    </h1>
    <p className="text-base text-tan/90 leading-relaxed">
      Health. Heritage. Habitat.
      <br />
      <span className="text-bronze">
        PrimeTine's commitment to conservation through breeding excellence.
      </span>
    </p>
  </div>
</motion.div>

      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gunmetal relative"
      >
        <div className="absolute inset-0 bg-topo-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              {
                icon: Shield,
                title: 'RESPONSIBLE BREEDING',
                description: 'Genetic health and diversity prioritized',
                detail: 'Stewardship-driven herd management',
              },
              {
                icon: TrendingUp,
                title: 'TROPHY POTENTIAL',
                description: 'Naturally developed mass and frame',
                detail: '200–300+ class typicals',
              },
          
              {
                icon: Award,
                title: 'SUSTAINABLE HERDS',
                description: 'Balanced habitat + herd dynamics',
                detail: 'Healthy populations across species',
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-charcoal p-10 transition-all duration-500 group-hover:bg-olive group-hover:scale-105 border border-olive/20 rounded-xl">
                  <stat.icon className="w-16 h-16 text-bronze mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-black text-tan mb-3 tracking-[0.1em] font-heading">{stat.title}</h3>
                  <p className="text-tan/70 text-sm mb-2">{stat.description}</p>
                  <p className="text-tan/50 text-xs">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Genetics Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-charcoal relative"
      >
        <div className="absolute inset-0 bg-canvas-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">WILDLIFE STEWARDSHIP</span>
            <h2 className="text-4xl sm:text-5xl font-black text-tan tracking-[0.1em] font-heading mb-8">
              A LASTING <br />
              <span className="text-bronze">LEGACY</span>
            </h2>
            <div className="space-y-8 text-tan/80 text-xl leading-relaxed">
              <p>
                At PrimeTine Ranch, wildlife stewardship is at the heart of everything we do. We're committed to preserving
                the rich heritage of Texas hunting while promoting healthy, thriving game populations for generations to come.
              </p>
              <p>
                Our breeding program isn’t just about producing trophy-quality animals — it’s about respecting the land and
                the balance of the ecosystem. We carefully manage our herd genetics to enhance health, diversity, and sustainability,
                allowing each species to flourish naturally across our East Texas ranch.
              </p>
              <p>
                This hands-on conservation approach ensures that every hunt at PrimeTine is not only world-class, but also deeply
                connected to the land, the animals, and a lasting legacy of responsible game management.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {['bb_genetics.jpg', 'genetics.jpg'].map((img, i) => (
                <div key={i} className="overflow-hidden aspect-square rounded-lg border border-olive/20 group">
                  <img
                    src={`/images/${img}`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gunmetal p-10 border border-olive/20 rounded-xl">
              <h3 className="text-2xl font-black text-tan mb-6 tracking-wide font-heading">OUR COMMITMENT</h3>
              <ul className="space-y-4 text-tan/80 text-lg">
                {[
                  'Selective breeding for genetic strength',
                  'Year-round supplemental feeding',
                  'Habitat preservation and enhancement',
                  'Natural age and gender balance',
                  'Herd monitoring and responsible harvests',
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Target className="w-5 h-5 text-bronze mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Species We Breed Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-gunmetal relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-topo-pattern opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-olive pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-tan mb-6 tracking-[0.1em] font-heading">
              SPECIES WE BREED
            </h2>
            <p className="text-xl text-tan/80 max-w-3xl mx-auto">
              Our breeding program focuses on three world-class exotics—each raised with attention to genetics, environment, and trophy potential.
            </p>
          </div>

          {[
            {
              title: 'Fallow Deer',
              image: '/images/fallow_breed.jpg?preset=webp',
              description:
                'Our fallow herd represents some of the most impressive antler genetics in Texas. We’ve bred legendary sires like Bullwinkle, Hammertime, Big Money, and EZ Money to achieve mass, palmation, and symmetry that dominate any pasture. Their offspring are show-stoppers.',
            },
            {
              title: 'Axis Deer',
              image: '/images/breed_axis.jpg?preset=webp',
              description:
                'Known for their sleek coats and elegant velvet racks, Axis deer are a staple of our operation. Trophy sires like Max Payne and Stickers consistently pass on the traits that matter: clean beams, balance, and aggressive growth—perfect for any high-end hunt or breeding program.',
            },
            {
              title: 'Blackbuck Antelope',
              image: '/images/blackbuck_genetics.jpg?preset=webp',
              description:
                'From classic spirals to elite posture and frame, our blackbuck program is built around speed, symmetry, and visual appeal. Whether you’re stocking a ranch or elevating your hunting experience, our blackbuck are bred to perform and turn heads.',
            },
          ].map((animal, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={animal.image}
                  alt={animal.title}
                  className="rounded-xl shadow-lg border border-olive/20 object-cover w-full h-[400px]"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-bronze mb-4 font-heading tracking-wide">
                  {animal.title}
                </h3>
                <p className="text-lg text-tan/80 leading-relaxed">{animal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
    </>
  );
};


export default Genetics;
