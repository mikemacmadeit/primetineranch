import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import { Helmet } from 'react-helmet';


const TrophyGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'ALL TROPHIES' },
    { id: 'whitetail', label: 'WHITETAIL' },
    { id: 'axis', label: 'AXIS DEER' },
    { id: 'exotics', label: 'EXOTICS' },
    { id: 'lodge', label: 'THE LODGE' },
  ];

  const images = galleryImages;
  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxImageIndex(index);
  const closeLightbox = () => setLightboxImageIndex(null);
  const nextImage =
    () =>
      lightboxImageIndex !== null &&
      setLightboxImageIndex((lightboxImageIndex + 1) % filteredImages.length);
  const prevImage =
    () =>
      lightboxImageIndex !== null &&
      setLightboxImageIndex(
        (lightboxImageIndex - 1 + filteredImages.length) % filteredImages.length
      );

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="bg-charcoal text-tan"
  >
    {/* ✅ Preload Trophy Wall Hero Image */}
   <Helmet>
  <title>Trophy Photo Gallery | PrimeTine Ranch Hunts in Texas</title>
  <meta
    name="description"
    content="Explore the PrimeTine Ranch Trophy Gallery featuring Whitetail, Axis, and Exotic game hunts. View successful harvests, lodge highlights, and unforgettable East Texas experiences."
  />
  <meta
    name="keywords"
    content="trophy whitetail photos, axis deer hunting images, exotic game ranch Texas, Texas hunting lodge pictures, PrimeTine Ranch gallery, east texas hunt photos"
  />
  <link rel="canonical" href="https://primetineranch.com/gallery" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Trophy Photo Gallery | PrimeTine Ranch Hunts in Texas" />
  <meta
    property="og:description"
    content="View our Trophy Wall: Whitetail, Axis, and Exotic harvests at PrimeTine Ranch. Real hunts, real hunters, and Texas-size results."
  />
  <meta property="og:url" content="https://primetineranch.com/gallery" />
  <meta property="og:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trophy Gallery | PrimeTine Ranch" />
  <meta
    name="twitter:description"
    content="Scroll through epic trophy photos from Whitetail and Exotic hunts in East Texas. Share your story — or be the next one on the wall."
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
      <img
        src="/images/webp/all/bow_2.webp"

        alt="Trophy Wall Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover animate-zoomPan transition-opacity duration-1000"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />


        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-topo-pattern opacity-20" />
       <motion.div className="relative z-10 text-center max-w-5xl mx-auto px-6">

  {/* Desktop Panel */}
  <div className="hidden md:inline-block bg-black/40 backdrop-blur-sm rounded-xl px-6 py-8">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] mb-4 block">
      PROOF OF EXCELLENCE
    </span>
    <h1 className="text-5xl md:text-7xl font-black text-tan mb-6 tracking-wider font-heading">
      TROPHY <span className="text-bronze">WALL</span>
    </h1>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto text-tan/90 leading-relaxed">
      Built for Big Frames. This Is the Proof.
      <br />
      <span className="text-bronze">
        Every trophy tells a story of world-class hunting in East Texas.
      </span>
    </p>
  </div>

  {/* Mobile: compact blurred panel */}
  <div className="md:hidden bg-black/40 backdrop-blur-sm rounded-xl px-4 py-6 inline-block">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] mb-4 block">
      PROOF OF EXCELLENCE
    </span>
    <h1 className="text-4xl font-black text-tan mb-4 tracking-wider font-heading">
      TROPHY <span className="text-bronze">WALL</span>
    </h1>
    <p className="text-base text-tan/90 leading-relaxed">
      Built for Big Frames. This Is the Proof.
      <br />
      <span className="text-bronze">
        Every trophy tells a story of world-class hunting in East Texas.
      </span>
    </p>
  </div>
</motion.div>

      </motion.section>

      {/* Filter Buttons */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gunmetal border-b border-olive/20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-6 h-6 text-bronze mr-3" />
            <span className="text-tan font-bold tracking-[0.1em]">
              FILTER GALLERY
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 text-sm font-black tracking-[0.1em] rounded-full transition-all duration-300 transform ${
                  selectedCategory === category.id
                    ? 'bg-bronze text-charcoal shadow-md'
                    : 'bg-charcoal text-tan hover:bg-olive/80 border border-olive/20'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-charcoal"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-square cursor-pointer overflow-hidden border border-olive/10 hover:border-bronze/50 transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-bronze px-4 py-2 mb-2">
                      <span className="text-charcoal text-sm font-black tracking-[0.1em]">
                        VIEW
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lightbox */}
      {lightboxImageIndex !== null && (
  <>
    {/* Prevent background scroll */}
    <style>{`body { overflow: hidden; }`}</style>

    {/* Fullscreen scrollable overlay */}
    <div
      className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm overflow-y-auto"
      onClick={closeLightbox} // Close when clicking backdrop
    >
      <div
        className="min-h-screen flex flex-col items-center justify-start pt-20 pb-20 px-6"
        onClick={(e) => e.stopPropagation()} // Prevent close on image click
      >
        {/* Close Button — sticky so it stays on top as user scrolls */}
        <div className="w-full flex justify-end sticky top-0 z-50">
          <button
            onClick={closeLightbox}
            className="bg-charcoal/80 p-3 m-2 hover:bg-bronze/20 text-tan hover:text-bronze transition-all"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Scrollable Image */}
        <div className="max-w-full">
          <img
            src={filteredImages[lightboxImageIndex].src}
            alt=""
            className="w-full h-auto max-h-[calc(100vh-10rem)] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Navigation Arrows (fixed to viewport) */}
        <button
          onClick={prevImage}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-charcoal/80 p-3 hover:bg-bronze/20 text-tan hover:text-bronze"
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextImage}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-charcoal/80 p-3 hover:bg-bronze/20 text-tan hover:text-bronze"
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  </>
)}


    </motion.div>
  );
};

export default TrophyGallery;
