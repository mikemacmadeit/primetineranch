import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Target, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';




const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    huntType: '',
    preferredDates: '',
    groupSize: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  huntType: formData.huntType,
  preferredDates: formData.preferredDates,
  groupSize: formData.groupSize,
  message: formData.message
};


    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_qzags1g';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_61pr01g';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '3ORLYf4J9bygRkvVs';

    emailjs.send(serviceId, templateId, templateParams, publicKey)
.then(() => {
      setIsSubmitted(true);
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Book Your Trophy Hunt in Texas | PrimeTine Ranch</title>
          <meta
            name="description"
            content="Ready to hunt world-class Whitetail or exotic game in East Texas? ..."
          />
          <meta
            name="keywords"
            content="book whitetail hunt Texas, reserve exotic game ranch, ..."
          />
          <link rel="canonical" href="https://primetineranch.com/booking" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Book Your Trophy Hunt in Texas | PrimeTine Ranch" />
          <meta
            property="og:description"
            content="Reserve your Texas Whitetail or exotic game hunt online..."
          />
          <meta property="og:url" content="https://primetineranch.com/booking" />
          <meta property="og:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Book Your Hunt | PrimeTine Ranch" />
          <meta
            name="twitter:description"
            content="Book your Whitetail or exotic game hunt at PrimeTine Ranch in East Texas..."
          />
          <meta name="twitter:image" content="https://primetineranch.com/optimized-images/wt_10.webp" />
        </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-charcoal min-h-screen flex items-center justify-center text-tan"
      >
        <div className="text-center max-w-3xl mx-auto px-6">
          <div className="bg-gunmetal p-16 shadow-2xl border border-olive/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-topo-pattern opacity-10" />
            <div className="relative z-10">
              <CheckCircle className="w-32 h-32 text-bronze mx-auto mb-10" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-wider font-heading">
                YOU'RE <span className="text-bronze">LOCKED IN</span>
              </h1>
              <p className="text-tan/80 text-xl mb-10 leading-relaxed">
                Thank you for choosing PrimeTine Ranch. We've received your booking request 
                and will contact you within 24 hours to confirm your hunt details and 
                finalize your reservation.
              </p>
              <div className="bg-olive/20 p-8 border-l-4 border-bronze">
                <p className="text-tan text-lg font-medium">
                  Get ready for the hunting experience of a lifetime. We'll be in touch soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
     </>
    );
  }

  return (
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
            backgroundImage: 'url("/images/walk.jpg?preset=webp")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-topo-pattern opacity-20" />

        <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6">

  {/* Desktop Panel */}
  <div className="hidden md:inline-block bg-black/30 backdrop-blur-sm rounded-xl px-6 py-8">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4 uppercase">
      RESERVE YOUR SPOT
    </span>
    <h1 className="text-6xl md:text-7xl font-black text-tan tracking-wide drop-shadow-md">
      BOOK YOUR <span className="text-bronze">HUNT</span>
    </h1>
    <p className="text-tan/80 text-xl sm:text-2xl leading-relaxed mt-4">
      Ready to experience trophy whitetail and exotic hunting at its finest?
      <br />
      <span className="text-bronze">Let’s get you locked in for the hunt of a lifetime.</span>
    </p>
  </div>

  {/* Mobile Text w/ local blur box */}
  <div className="md:hidden bg-black/40 backdrop-blur-sm rounded-xl px-4 py-6 inline-block">
    <span className="text-bronze text-sm font-bold tracking-[0.2em] block mb-4 uppercase drop-shadow-sm">
      RESERVE YOUR SPOT
    </span>
    <h1 className="text-4xl font-black text-tan tracking-wide drop-shadow-lg">
      BOOK YOUR <span className="text-bronze">HUNT</span>
    </h1>
    <p className="text-tan/90 text-base leading-relaxed mt-4 drop-shadow-sm">
      Ready to experience trophy whitetail hunting at its finest?
      <br />
      <span className="text-bronze">Let’s get you locked in for the hunt of a lifetime.</span>
    </p>
  </div>
</motion.div>


      </motion.section>

      {/* Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32 bg-gunmetal relative"
      >
        <div className="absolute inset-0 bg-topo-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-black text-tan mb-10 tracking-wide font-heading">
                RESERVE YOUR SPOT
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-tan font-bold mb-3 tracking-[0.1em]">FULL NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-tan font-bold mb-3 tracking-[0.1em]">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-tan font-bold mb-3 tracking-[0.1em]">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-tan font-bold mb-3 tracking-[0.1em]">HUNT TYPE</label>
                  <select
                    name="huntType"
                    value={formData.huntType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Select Hunt Type</option>
                    <option value="trophy-whitetail">Trophy Whitetail Hunt</option>
                    <option value="exotic-hunt">Exotic Hunt</option>
                    <option value="youth-package">Youth Package</option>
                    <option value="corporate-package">Corporate Package</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-tan font-bold mb-3 tracking-[0.1em]">PREFERRED DATES</label>
                    <input
                      type="date"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-tan font-bold mb-3 tracking-[0.1em]">GROUP SIZE</label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 text-lg"
                    >
                      <option value="">Select Group Size</option>
                      <option value="1">1 Hunter</option>
                      <option value="2">2 Hunters</option>
                      <option value="3">3 Hunters</option>
                      <option value="4">4 Hunters</option>
                      <option value="5+">5+ Hunters</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-tan font-bold mb-3 tracking-[0.1em]">ADDITIONAL MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-charcoal border-2 border-gunmetal/50 text-tan focus:border-bronze focus:outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="Any special requests or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-bronze hover:bg-olive text-charcoal px-10 py-6 text-xl font-black tracking-[0.1em] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <span>SUBMIT BOOKING REQUEST</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-10">
              {[
                {
                  icon: <Target className="w-6 h-6 text-tan" />,
                  title: 'CONFIRMATION',
                  text: 'We’ll contact you within 24 hours to confirm availability and discuss your hunt details.'
                },
                {
                  icon: <Calendar className="w-6 h-6 text-tan" />,
                  title: 'SCHEDULING',
                  text: 'Finalize dates, review hunt packages, and coordinate all logistics for your trip.'
                },
                {
                  icon: <Users className="w-6 h-6 text-tan" />,
                  title: 'PREPARATION',
                  text: 'Receive detailed information about your hunt, packing lists, and arrival instructions.'
                }
              ].map(({ icon, title, text }) => (
                <div key={title} className="flex items-start space-x-4 bg-charcoal p-6 border border-olive/20">
                  <div className="bg-bronze p-3 flex-shrink-0">{icon}</div>
                  <div>
                    <h4 className="text-tan font-bold text-lg mb-2">{title}</h4>
                    <p className="text-tan/70 text-lg leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}

              <div className="bg-olive/20 p-10 border-l-4 border-bronze">
                <h3 className="text-2xl font-black text-tan mb-6 font-heading">NEED HELP?</h3>
                <p className="text-tan/90 text-lg mb-6 leading-relaxed">
                  Have questions about your hunt? Our team is here to help you plan the perfect hunting experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-bronze" />
                    <a href="mailto:info@primetineranch.com" className="text-tan hover:text-bronze transition-colors text-lg font-medium">
                      primetinehunts@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Booking;
