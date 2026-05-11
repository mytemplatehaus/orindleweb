'use client';

import { WhatsAppCTA } from './whatsapp-cta';
import { motion } from 'motion/react';
import { ContactForm } from './contact-form';

export function EmbedBookingSection() {
  return (
    <section id="embed-booking" className="py-16 md:py-24 bg-charcoal-800 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
          Ready to Build, Grow, or Automate?
        </h2>
        <p className="text-neutral-400 mb-12 text-lg">
          Book a quick consultation with ORINDLE and get a clear plan for your business.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-4 md:p-8 rounded-3xl border border-electric-blue/20 bg-charcoal-700/50 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(0,240,255,0.1)] mb-12 text-left"
        >
          <ContactForm />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-neutral-500 text-sm">Or prefer to chat directly?</p>
          <WhatsAppCTA text="WhatsApp Us" />
        </div>
      </div>
    </section>
  );
}
