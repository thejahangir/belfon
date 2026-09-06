import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import ServicesMegaMenu from './ServicesMegaMenu';
import logoBelfon from '../assets/logo-belfon.png';
import logoBelfon2 from '../assets/logo-belfon-2.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-50 transition-all duration-500 w-full left-0 right-0 flex justify-center ${
        isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'
      }`}
    >
      <div className={`transition-all duration-500 w-full mx-auto ${
        isScrolled 
          ? 'max-w-5xl bg-white/90 backdrop-blur-md shadow-lg py-3 px-6 lg:px-8 rounded-full border border-slate-200/50' 
          : 'max-w-7xl bg-transparent py-6 px-6 lg:px-8'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={isScrolled ? logoBelfon2 : logoBelfon} alt="Belfon Technologies" className="h-8 md:h-10 w-auto transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-brand-purple' : 'text-white/90 hover:text-white'}`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-brand-purple' : 'text-white/90 hover:text-white'}`}>
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button 
                className={`flex items-center font-medium transition-colors py-2 ${isScrolled ? 'text-slate-700 hover:text-brand-purple' : 'text-white/90 hover:text-white'}`}
                aria-expanded={servicesMenuOpen}
              >
                Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesMenuOpen && (
                  <ServicesMegaMenu onClose={() => setServicesMenuOpen(false)} />
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-brand-purple' : 'text-white/90 hover:text-white'}`}>
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-white font-medium brand-gradient hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 inline-block"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              <Link to="/" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Home</Link>
              <Link to="/about" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">About Us</Link>
              <div className="py-2 border-b border-slate-50">
                <div className="text-lg font-medium text-slate-800 mb-2">Services</div>
                <div className="pl-4 space-y-2 flex flex-col">
                  <Link to="/services" className="text-slate-600">Cybersecurity</Link>
                  <Link to="/services" className="text-slate-600">Oracle ERP</Link>
                  <Link to="/services" className="text-slate-600">Digital Experience Design</Link>
                  <Link to="/services" className="text-slate-600">View All Services</Link>
                </div>
              </div>
              <Link to="/contact" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">Contact Us</Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full text-center block px-6 py-3 rounded-xl text-white font-medium brand-gradient"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
