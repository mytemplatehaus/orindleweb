'use client';

import { motion } from 'motion/react';

export function Logos() {
  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Trusted Clients' },
    { value: '10M+', label: 'Reach Generated' },
  ];

  // Dummy logo names for placeholders
  const logos = ['Acme Corp', 'GlobalTech', 'Nexus', 'Starlight', 'Quantum', 'Horizon', 'Summit'];

  return (
    <section className="py-12 md:py-20 border-b border-white/5 bg-charcoal-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="md:w-1/3">
            <h2 className="text-xl font-display font-medium text-white/90">
              Trusted by modern businesses to drive digital growth
            </h2>
            <div className="h-px w-12 bg-electric-blue mt-6"></div>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap gap-8 md:gap-16 justify-start md:justify-end">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-display font-light text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden flex">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal-800 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1035] }} // Adjust width based on actual content width to make loop smooth
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            }}
            className="flex gap-20 items-center whitespace-nowrap min-w-max"
          >
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div 
                key={idx} 
                className="font-display text-xl font-semibold text-neutral-600 uppercase tracking-widest select-none hover:text-white/50 transition-colors"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
