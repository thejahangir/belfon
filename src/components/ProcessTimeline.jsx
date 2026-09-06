import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Understand', desc: 'Understand business goals, challenges, users, and technology landscape.' },
  { num: '02', title: 'Strategize', desc: 'Develop the right technology and experience strategy.' },
  { num: '03', title: 'Design', desc: 'Create practical, scalable solutions.' },
  { num: '04', title: 'Deploy', desc: 'Implement and integrate the solution.' },
  { num: '05', title: 'Optimize', desc: 'Continuously improve performance and business outcomes.' }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            From Challenge to Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven methodology ensures that every technology initiative delivers measurable business value.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex flex-col md:items-center md:text-center group"
              >
                <div className="flex items-center md:justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-lg font-bold text-slate-400 group-hover:border-brand-purple group-hover:text-brand-purple group-hover:shadow-[0_0_20px_rgba(57,0,153,0.2)] transition-all duration-300">
                    {step.num}
                  </div>
                </div>
                
                <div className="pl-16 md:pl-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {step.desc}
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
