'use client';

import { motion } from 'motion/react';

export function Process() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'We dive deep into your brand, audience, and operational bottlenecks.' },
    { num: '02', title: 'Strategy', desc: 'Crafting a tailored roadmap for design, marketing, and automation.' },
    { num: '03', title: 'Design & Dev', desc: 'Building premium digital assets and scalable websites.' },
    { num: '04', title: 'Growth', desc: 'Deploying campaigns, AI chatbots, and optimizing for scale.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-b border-white/5 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
            The ORINDLE Framework
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A precise, robust process designed to transition your business from manual chaos to automated growth.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {/* Decorative connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="w-24 h-24 mb-8 font-display text-5xl font-light text-neutral-600 bg-charcoal-700/50 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-electric-blue/10 group-hover:text-electric-blue group-hover:border-electric-blue/30 transition-all duration-300">
                {step.num}
              </div>
              
              <h3 className="text-xl font-display font-medium text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
