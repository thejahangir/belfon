import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Business-Focused',
    desc: 'Technology aligned with business objectives.'
  },
  {
    title: 'Deep Expertise',
    desc: 'Specialized knowledge across cybersecurity, Oracle ERP, and Digital Experience Design.'
  },
  {
    title: 'Human-Centered',
    desc: 'Solutions designed around people as well as technology.'
  },
  {
    title: 'Scalable',
    desc: 'Approaches designed to evolve as organizations grow.'
  },
  {
    title: 'Reliable Delivery',
    desc: 'From strategy through deployment and ongoing support.'
  }
];

export default function WhyBelfon() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div className="lg:pr-8">
            <div className="mb-6 flex items-center space-x-4">
              <span className="text-sm font-bold tracking-widest text-brand-purple uppercase">
                Why Belfon Technologies
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] sticky top-32">
              Technology is only valuable when it creates real <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">business impact.</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start group hover:shadow-md hover:border-purple-100 transition-all"
              >
                <CheckCircle2 className="w-8 h-8 text-purple-200 group-hover:text-brand-purple flex-shrink-0 transition-colors" />
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
