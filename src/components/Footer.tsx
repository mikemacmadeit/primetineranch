import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-olive relative text-tan">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          {/* Logo + Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <img
                src="/images/primetan.png?preset=webp"
                alt="PrimeTine Ranch Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-xl"
              />
            </div>
            <p className="text-tan/90 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Elite Texas Trophy Whitetail and Exotic Hunts on 900+ Acres of Private Land.
Superior genetics, record-class game, and a 100% opportunity rate.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/primetine_ranch/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group bg-charcoal hover:bg-bronze p-3 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-tan group-hover:text-charcoal transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://www.facebook.com/p/PrimeTine-Ranch-100092571288050/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group bg-charcoal hover:bg-bronze p-3 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-tan group-hover:text-charcoal transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-tan font-black mb-6 tracking-[0.2em] text-base sm:text-lg font-heading uppercase">
              Navigation
            </h4>
            <ul className="space-y-4 pl-1">
              {[
                { to: '/hunts', label: 'Trophy Hunts' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/genetics', label: 'Genetics' },
                { to: '/lodging', label: 'Lodge' },
                { to: '/booking', label: 'Book Hunt' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-tan/70 hover:text-tan transition-colors duration-300 text-sm font-medium tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-tan font-black mb-6 tracking-[0.2em] text-base sm:text-lg font-heading uppercase">
              Contact
            </h4>
            <div className="space-y-5 pl-1">
              <div className="space-y-4">
  <div className="flex items-start space-x-3">
    <Phone className="w-4 h-4 mt-1 text-bronze flex-shrink-0" />
    <div>
      <p className="text-tan text-sm font-semibold leading-tight">
        Contact Manager – <span className="text-tan/80 font-medium">Heath Lovell</span>
      </p>
      <a
        href="tel:+19365455097"
        className="text-tan/70 hover:text-tan text-sm font-medium transition-colors duration-300"
      >
        (936) 545-5097
      </a>
    </div>
  </div>

</div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-bronze" />
                <a
                  href="mailto:info@primetineranch.com"
                  className="text-tan/80 hover:text-tan text-sm font-medium transition-colors duration-300"
                >
                  info@primetineranch.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-bronze" />
                <span className="text-tan/80 text-sm font-medium">
                  Crockett, Texas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Newsletter Signup (hidden for now) */}
        {/* 
        <div className="mt-16 text-center">
          <h5 className="text-tan text-xl font-bold mb-4">Stay in the Loop</h5>
          <input
            type="email"
            placeholder="Your email address"
            className="bg-charcoal border border-bronze px-4 py-3 text-sm text-tan placeholder-tan/50 focus:outline-none focus:border-olive"
          />
          <button className="ml-2 px-6 py-3 bg-bronze text-charcoal font-bold text-sm hover:bg-olive transition-all">
            Subscribe
          </button>
        </div>
        */}

        {/* Bottom Bar */}
        <div className="border-t border-tan/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-tan/80 text-sm font-medium">
            © 2025 PrimeTine Ranch. All rights reserved.
          </p>
          <p className="text-tan/60 text-xs">
            Elite hunting experiences since 1995
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
