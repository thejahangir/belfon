import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Rocket, Settings, Users, ArrowUpRight } from 'lucide-react';

const additionalServices = [
  {
    num: '04',
    title: 'Consulting Services',
    desc: 'Strategic guidance to help organizations make smarter technology decisions.',
    icon: Lightbulb
  },
  {
    num: '05',
    title: 'Solutions Deployment',
    desc: 'From strategy to implementation, turning technology plans into working solutions.',
    icon: Rocket
  },
  {
    num: '06',
    title: 'Managed Services',
    desc: 'Reliable ongoing technology support designed to improve performance and continuity.',
    icon: Settings
  },
  {
    num: '07',
    title: 'Staff Augmentation',
    desc: 'Access specialized technology talent when and where your organization needs it.',
    icon: Users
  }
];

export default function AdditionalServices() {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm font-bold tracking-widest text-brand-pink uppercase">
                Extended Capabilities
              </span>
              <div className="h-[2px] w-12 bg-white/10 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-xl">
              Flexible technology services for every stage of your journey.
            </h2>
          </div>
          <div className="flex lg:justify-end">
            <Link 
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {additionalServices.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-purple-300 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300">
                  <svc.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {svc.title}
                  </h3>
                  <span className="text-sm font-mono text-white/20 group-hover:text-white/40">{svc.num}</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <Link 
                  to="/services"
                  className="inline-flex items-center text-sm font-semibold text-purple-300 hover:text-pink-400 transition-colors"
                >
                  Learn More 
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              
              {/* Subtle gradient blob on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
