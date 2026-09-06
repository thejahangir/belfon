import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import cyberSecurityImg from '../assets/cyber-security.jpg';
import oracleImg from '../assets/oracle.jpg';
import uxImg from '../assets/ux.jpg';

const slides = [
  {
    image: cyberSecurityImg,
    alt: 'Cybersecurity and Network Protection'
  },
  {
    image: oracleImg,
    alt: 'Oracle ERP and Enterprise Data Analytics'
  },
  {
    image: uxImg,
    alt: 'Digital Experience Design and Human Centered Experiences'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Brand Gradients & Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/50 via-slate-950/40 to-transparent z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase shadow-sm">
              Technology • Strategy • Experience
            </span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-xl">
            Technology That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Secures, Simplifies & Transforms</span> Business
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
            Belfon Technologies helps organizations navigate complex technology challenges through cybersecurity, Oracle ERP, Digital Experience Design, and strategic technology services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors group shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
