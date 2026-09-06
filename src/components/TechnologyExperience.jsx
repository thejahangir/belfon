import { motion } from 'framer-motion';

export default function TechnologyExperience() {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Where Technology Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Human Experience</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            "Great technology doesn't simply work. It works for people."
          </p>
        </div>

        {/* Visual Diagram */}
        <div className="relative h-[600px] max-w-4xl mx-auto hidden md:block">
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              d="M450 300 L250 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" 
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              d="M450 300 L650 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" 
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              d="M450 300 L450 500" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" 
            />
          </svg>

          {/* Nodes */}
          {/* Node 1: SECURE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-[100px] left-[150px] w-48 h-48 rounded-full border border-purple-500/30 bg-slate-900/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(57,0,153,0.3)]"
          >
            <div className="text-center">
              <span className="block text-xl font-bold tracking-widest text-purple-300">SECURE</span>
              <span className="text-xs text-slate-500 uppercase mt-2 block">Cybersecurity</span>
            </div>
          </motion.div>

          {/* Node 2: OPTIMIZE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[100px] right-[150px] w-48 h-48 rounded-full border border-pink-500/30 bg-slate-900/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(158,0,89,0.3)]"
          >
            <div className="text-center">
              <span className="block text-xl font-bold tracking-widest text-pink-300">OPTIMIZE</span>
              <span className="text-xs text-slate-500 uppercase mt-2 block">Oracle ERP</span>
            </div>
          </motion.div>

          {/* Node 3: EXPERIENCE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-red-500/30 bg-slate-900/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,0,84,0.3)]"
          >
            <div className="text-center">
              <span className="block text-xl font-bold tracking-widest text-red-300">EXPERIENCE</span>
              <span className="text-xs text-slate-500 uppercase mt-2 block">Digital Experience Design</span>
            </div>
          </motion.div>

          {/* Center: Belfon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] w-64 h-64 rounded-full brand-gradient flex items-center justify-center shadow-2xl z-20 p-1"
          >
            <div className="w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20" />
              <span className="relative z-10 text-2xl font-bold tracking-wider">BELFON</span>
              <span className="relative z-10 text-[10px] tracking-widest text-slate-400 mt-1 uppercase">Technologies</span>
            </div>
          </motion.div>
          
        </div>

        {/* Mobile View alternative (hidden on md) */}
        <div className="md:hidden space-y-6">
          <div className="p-8 border border-purple-500/30 rounded-3xl text-center bg-slate-900/50">
            <span className="block text-xl font-bold tracking-widest text-purple-300">SECURE</span>
          </div>
          <div className="p-8 border border-pink-500/30 rounded-3xl text-center bg-slate-900/50">
            <span className="block text-xl font-bold tracking-widest text-pink-300">OPTIMIZE</span>
          </div>
          <div className="p-8 border border-red-500/30 rounded-3xl text-center bg-slate-900/50">
            <span className="block text-xl font-bold tracking-widest text-red-300">EXPERIENCE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
