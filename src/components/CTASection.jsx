import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="brand-gradient rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-purple-500/20"
        >
          {/* Decorative background elements inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to solve your next technology challenge?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
              Let's turn complex technology challenges into practical, scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-black transition-colors shadow-lg group"
              >
                Talk to Belfon
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 text-white font-semibold hover:bg-white/30 backdrop-blur-md transition-colors border border-white/30"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
