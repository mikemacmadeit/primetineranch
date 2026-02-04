import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Helmet } from 'react-helmet';







const Contact = () => {
 return (
    <>
      <Helmet>
        <title>Contact PrimeTine Ranch | Texas Trophy Hunt Booking & Info</title>
        <meta
          name="description"
          content="Contact PrimeTine Ranch to book your Texas Whitetail or exotic hunt..."
        />
        <meta
          name="keywords"
          content="contact PrimeTine Ranch, hunting ranch phone number, book trophy hunt..."
        />
        <link rel="canonical" href="https://primetineranch.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact PrimeTine Ranch | Texas Trophy Hunt Info" />
        <meta
          property="og:description"
          content="Reach out to PrimeTine Ranch in Crockett, TX..."
        />
        <meta property="og:url" content="https://primetineranch.com/contact" />
        <meta property="og:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact PrimeTine Ranch | Book Your Texas Hunt" />
        <meta
          name="twitter:description"
          content="Call or email PrimeTine Ranch to reserve your hunt..."
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
        <div
          className="absolute inset-0 w-full h-full object-cover animate-zoomPan"
          style={{
           backgroundImage: 'url("/images/looking.jpg?preset=webp")',

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-topo-pattern opacity-20" />
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 text-center max-w-5xl mx-auto px-6"
>
  {/* Desktop Panel */}
  <div className="hidden md:inline-block bg-black/30 backdrop-blur-sm rounded-xl px-6 py-8">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">GET IN TOUCH</span>
    <h1 className="text-5xl md:text-7xl font-black text-tan mb-6 tracking-wider font-heading">
      REACH OUT &<br />
      <span className="text-bronze">BOOK YOUR EXPERIENCE</span>
    </h1>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto text-tan/80 leading-relaxed">
      Ready to plan your world-class hunting adventure? Let's talk.
      <br />
      <span className="text-bronze">We're conveniently located between Houston and Dallas.</span>
    </p>
  </div>

  {/* Mobile: compact blurred panel */}
  <div className="md:hidden bg-black/40 backdrop-blur-sm rounded-xl px-4 py-6 inline-block">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4">GET IN TOUCH</span>
    <h1 className="text-4xl font-black text-tan mb-4 tracking-wider font-heading">
      REACH OUT &<br />
      <span className="text-bronze">BOOK YOUR EXPERIENCE</span>
    </h1>
    <p className="text-base text-tan/90 leading-relaxed">
      Ready to plan your world-class hunting adventure? Let's talk.
      <br />
      <span className="text-bronze">We're conveniently located between Houston and Dallas.</span>
    </p>
  </div>
</motion.div>

      </motion.section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-gunmetal relative"
      >
        <div className="absolute inset-0 bg-topo-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black text-tan mb-12 tracking-wide font-heading">GET IN TOUCH</h2>
            <div className="space-y-10">
              {/* Custom Phone Section with Two Contacts */}
              <div className="flex items-start space-x-6 group">
                <div className="bg-bronze p-6 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-tan" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-tan mb-2 font-heading">Phone</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-tan text-lg font-semibold leading-tight">
                        Ranch Manager – <span className="text-tan/80 font-medium">Kamiryn Winters</span>
                      </p>
                      <a
                        href="tel:+19363337592"
                        className="text-tan/70 hover:text-bronze text-lg font-medium transition-colors duration-300"
                      >
                        (936) 333-7592
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6 group">
                <div className="bg-bronze p-6 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-tan" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-tan mb-2 font-heading">Email</h3>
                  <a href="mailto:info@primetineranch.com" className="text-tan/80 text-xl hover:text-bronze transition-colors font-medium block mb-2">
                    primetinehunts@gmail.com
                  </a>
                  <p className="text-tan/60 text-lg">Send us a detailed message</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-6 group">
                <div className="bg-bronze p-6 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-tan" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-tan mb-2 font-heading">Location</h3>
                  <span className="text-tan/80 text-xl block mb-2">Crockett, Texas</span>
                  <p className="text-tan/60 text-lg">Beautiful Houston County, East Texas</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-tan/10">
              <h3 className="text-2xl font-black text-tan mb-8 font-heading">CONNECT WITH US</h3>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group bg-charcoal p-4 hover:bg-bronze text-tan border border-olive/20 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Panel */}
          <div>
            <h2 className="text-5xl font-black text-tan mb-12 tracking-wide font-heading">FIND US</h2>
            <div className="bg-charcoal p-16 h-96 flex items-center justify-center border border-olive/20 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-canvas-texture opacity-10" />
              <div className="text-center relative z-10">
                <MapPin className="w-20 h-20 text-bronze mx-auto mb-6" />
                <h3 className="text-3xl font-black text-tan mb-2 font-heading">Crockett, Texas</h3>
                <p className="text-tan/70 text-xl mb-4">Beautiful Houston County, East Texas</p>
                <p className="text-tan/60 text-lg leading-relaxed">
                  Located outside of Crockett, Texas in the heart of East Texas.
                  <br />
                  Over 900+ acres of premier hunting grounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hours & Availability */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-charcoal relative"
      >
        <div className="absolute inset-0 bg-topo-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Clock className="w-16 h-16 text-bronze mx-auto mb-6" />,
              title: 'OFFICE HOURS',
              content: [
                { label: 'Mon–Fri', value: '8:00 AM – 6:00 PM' },
                { label: 'Saturday', value: '8:00 AM – 4:00 PM' },
                { label: 'Sunday', value: 'By Appointment' },
              ],
            },
            {
              icon: <MapPin className="w-16 h-16 text-bronze mx-auto mb-6" />,
              title: 'HUNTING SEASONS',
              content: [
                { label: 'Whitetail', value: 'Oct – Feb' },
                { label: 'Exotics', value: 'Year-Round' },
                { label: 'Special Hunts', value: 'Contact Us' },
              ],
            },
            {
              icon: <Phone className="w-16 h-16 text-bronze mx-auto mb-6" />,
              title: 'RESPONSE TIME',
              content: [
                { label: 'Phone', value: 'Immediate' },
                { label: 'Email', value: 'Within 24 Hours' },
                { label: 'Booking', value: 'Same Day Confirmation' },
              ],
            },
          ].map(({ icon, title, content }, idx) => (
            <div key={idx} className="text-center group">
              <div className="bg-gunmetal p-12 border border-olive/20 rounded-xl group-hover:bg-gunmetal/80 transition-all duration-300">
                {icon}
                <h3 className="text-2xl font-black text-tan mb-6 font-heading">{title}</h3>
                <div className="space-y-3 text-tan/70 text-lg">
                  {content.map((row, i) => (
                    <p key={i}>
                      <strong className="text-tan">{row.label}:</strong> {row.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA with Gradient to Footer */}
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-tan mb-8 tracking-wide font-heading">
            READY TO HUNT?
          </h2>
          <p className="text-tan/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Don’t wait—world-class hunting opportunities are booking fast.
            Contact us today to secure your dates for the experience of a lifetime.
          </p>
          <motion.a
            href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-bronze hover:bg-tan text-charcoal px-10 py-5 sm:px-16 sm:py-6 text-lg sm:text-xl font-black tracking-wide transition-all duration-300 inline-flex items-center space-x-4 rounded-full shadow-md"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
    </>
  );
};

export default Contact;
