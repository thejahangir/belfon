import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center space-x-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full" />
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                Who We Are
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Technology expertise built around <span className="gradient-text">business outcomes.</span>
            </h2>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Small abstract element */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-purple/5 rounded-full blur-xl" />
            
            <div className="relative z-10 text-lg text-slate-600 space-y-6">
              <p>
                Belfon Technologies brings together technology, strategy, and user experience to help organizations solve complex business challenges.
              </p>
              <p>
                From securing critical systems to modernizing enterprise operations and creating better digital experiences, Belfon delivers practical technology solutions designed around real business needs.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/about"
                  className="inline-flex items-center font-semibold text-brand-purple hover:text-brand-pink transition-colors group"
                >
                  Discover Belfon Technologies
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
