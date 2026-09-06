import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Database, PenTool, Lightbulb, Rocket, Settings, Users, ArrowRight } from 'lucide-react';

const coreServices = [
  {
    name: 'Cybersecurity',
    desc: 'Protecting digital infrastructure, applications, identities, and data.',
    icon: ShieldCheck,
  },
  {
    name: 'Oracle ERP',
    desc: 'Enterprise ERP consulting, implementation, optimization, and support.',
    icon: Database,
  },
  {
    name: 'Digital Experience Design',
    desc: 'Human-centered design and digital experience transformation.',
    icon: PenTool,
  }
];

const additionalServices = [
  { name: 'Consulting Services', icon: Lightbulb },
  { name: 'Solutions Deployment', icon: Rocket },
  { name: 'Managed Services', icon: Settings },
  { name: 'Staff Augmentation', icon: Users },
];

export default function ServicesMegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100 z-50"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="bg-slate-50 p-10 lg:w-1/3 flex flex-col justify-center">
          <h3 className="text-sm font-bold tracking-widest text-slate-400 mb-4 uppercase">Our Services</h3>
          <p className="text-2xl font-medium text-slate-800 leading-tight mb-8">
            Technology expertise that transforms complex business challenges into scalable digital solutions.
          </p>
          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex items-center font-semibold text-brand-purple hover:text-brand-pink transition-colors"
          >
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="p-10 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Services */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Core Expertise</h4>
            {coreServices.map((svc) => (
              <Link
                key={svc.name}
                to="/services"
                onClick={onClose}
                className="group flex items-start p-4 -m-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-50 text-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <svc.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h5 className="font-semibold text-slate-900 group-hover:text-brand-purple transition-colors flex items-center">
                    {svc.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h5>
                  <p className="text-sm text-slate-500 mt-1">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Extended Capabilities</h4>
            <div className="grid grid-cols-1 gap-2">
              {additionalServices.map((svc) => (
                <Link
                  key={svc.name}
                  to="/services"
                  onClick={onClose}
                  className="group flex items-center p-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <svc.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-pink transition-colors" />
                  <span className="ml-3 font-medium text-slate-700 group-hover:text-brand-pink transition-colors">
                    {svc.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
