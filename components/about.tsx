'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-charcoal-700 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card relative border border-white/10 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src="https://i.imgur.com/SEQOY3a.png"
                  alt="Modern office"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-2xl font-display text-white font-medium mb-2">Our Mission</h3>
                <p className="text-neutral-300 text-sm">
                  To empower modern businesses with AI and digital systems that operate like elite growth engines.
                </p>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-electric-purple/10 blur-[100px] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xs uppercase tracking-widest text-electric-blue mb-4">About Orindle</div>
            
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8 leading-tight text-white">
              We aren&apos;t just an agency. <br />
              <span className="font-semibold">We are your growth partner.</span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 text-lg">
              <p>
                The digital landscape is crowded with generic templates and disconnected marketing efforts. We saw a need for premium, holistic solutions that combine cutting-edge design with actual operational automation.
              </p>
              <p>
                Founded on the principle of <span className="text-white font-medium">modern minimalism and AI leverage</span>, ORINDLE replaces fragmented teams with a unified approach. We design your brand, build your platform, attract your audience, and automate your back-office.
              </p>
              <p>
                We serve businesses across India that refuse to settle for average, helping them scale fast and look exceptional doing it.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
