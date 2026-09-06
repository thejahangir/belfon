import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Database, PenTool, ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'CYBERSECURITY',
    desc: 'Protect your organization with security strategies designed to identify risks, strengthen resilience, and safeguard critical digital assets.',
    icon: ShieldCheck,
    link: '/services',
    color: 'from-purple-500/20 to-purple-600/5',
    accent: 'bg-purple-500'
  },
  {
    num: '02',
    title: 'ORACLE ERP',
    desc: 'Transform enterprise operations with Oracle ERP solutions that connect processes, data, and decision-making.',
    icon: Database,
    link: '/services',
    color: 'from-pink-500/20 to-pink-600/5',
    accent: 'bg-pink-500'
  },
  {
    num: '03',
    title: 'DIGITAL EXPERIENCE DESIGN',
    desc: 'Design intuitive digital experiences that connect business goals with the needs of real people.',
    icon: PenTool,
    link: '/services',
    color: 'from-red-500/20 to-red-600/5',
    accent: 'bg-red-500'
  }
];

export default function CoreServices() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Our Core Expertise
            </span>
            <div className="h-[2px] w-12 bg-slate-200 rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
            Deep technology expertise where businesses need it most.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative bg-slate-50 rounded-3xl p-10 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-light text-slate-200 group-hover:text-slate-300 transition-colors">
                    {svc.num}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-700 group-hover:${svc.accent} group-hover:text-white transition-colors duration-300`}>
                    <svc.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {svc.title}
                </h3>
                
                <p className="text-slate-600 mb-12 flex-grow">
                  {svc.desc}
                </p>

                <Link
                  to={svc.link}
                  className="inline-flex items-center font-semibold text-slate-900 group-hover:text-brand-purple transition-colors"
                >
                  Explore {svc.title}
                  <div className="ml-3 w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:translate-x-2">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
