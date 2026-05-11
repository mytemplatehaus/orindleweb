'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-electric-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-6 leading-tight">
              Let&apos;s Build <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">Something Exceptional</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-md">
              Ready to automate your operations and scale your brand? Drop us a line. We reply within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-neutral-400">
                  @
                </div>
                <div>
                  <div className="text-sm text-neutral-500 mb-1">Email Us</div>
                  <div className="text-white font-medium tracking-wide">tejas@orindle.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-neutral-400">
                  hq
                </div>
                <div>
                  <div className="text-sm text-neutral-500 mb-1">Location</div>
                  <div className="text-white font-medium tracking-wide">Mumbai, India (Remote Global)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl border border-white/10 bg-charcoal-700/50 backdrop-blur-3xl shadow-2xl relative"
          >
            {/* Subtle glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/20 to-electric-purple/20 rounded-[inherit] blur-2xl -z-10 opacity-50" />
            
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
