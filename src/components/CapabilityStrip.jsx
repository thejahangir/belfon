import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'CYBERSECURITY',
    points: ['Secure', 'Detect', 'Respond']
  },
  {
    title: 'ORACLE ERP',
    points: ['Optimize', 'Integrate', 'Scale']
  },
  {
    title: 'DIGITAL EXPERIENCE DESIGN',
    points: ['Understand', 'Design', 'Transform']
  }
];

export default function CapabilityStrip() {
  return (
    <div className="bg-white border-b border-slate-100 py-8 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 md:pt-0' : ''}`}
            >
              <h3 className="text-sm font-bold text-slate-800 tracking-wider mb-2">{cap.title}</h3>
              <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
                {cap.points.map((point, pIdx) => (
                  <span key={point} className="flex items-center">
                    {point}
                    {pIdx < cap.points.length - 1 && (
                      <span className="mx-2 text-purple-300">•</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
