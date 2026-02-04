import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const OurHunts = lazy(() => import('./pages/OurHunts'));
const TrophyGallery = lazy(() => import('./pages/TrophyGallery'));
const Genetics = lazy(() => import('./pages/Genetics'));
const Lodging = lazy(() => import('./pages/Lodging'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <div className="min-h-screen bg-charcoal text-tan flex flex-col">
        <Header />

        <main className="pt-[80px] flex-1 relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-screen flex"
            >
              <div className="w-full">
                <Suspense fallback={<div className="h-screen bg-charcoal" />}>
                  <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hunts" element={<OurHunts />} />
                    <Route path="/gallery" element={<TrophyGallery />} />
                    <Route path="/genetics" element={<Genetics />} />
                    <Route path="/lodging" element={<Lodging />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    // Load Google Analytics script
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID ?? 'G-T74BPT3RG7';
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(script2);

    window.dispatchEvent(new Event('render-event'));

  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
