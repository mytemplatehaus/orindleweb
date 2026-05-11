'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Typically, a standard modern business website takes 2-4 weeks from discovery to launch. Complex web applications or E-commerce builds may take 6-12 weeks depending on features.',
  },
  {
    q: 'Do you offer monthly management?',
    a: 'Yes, we provide ongoing retainer packages for SEO, Social Media Management, Content Creation, and general digital growth optimization.',
  },
  {
    q: 'Can you automate my specific business?',
    a: 'Almost certainly. Whether it is lead qualification, customer support via WhatsApp, or internal CRM syncing, we build custom AI agents and workflows tailored exactly to your operational bottlenecks.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across various sectors but specialize in scaling B2B service-based businesses, modern E-commerce brands, real estate, and tech startups in India.',
  },
  {
    q: 'Do you provide SEO?',
    a: 'Absolutely. Every website we build is SEO-ready by default. We also offer aggressive ongoing SEO campaigns to capture search intent and drive organic growth.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-charcoal-800 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-white/20 bg-white/5' : 'border-white/5 bg-transparent'}`}
              >
                <button
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none focus:bg-white/[0.02] transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className={`font-medium text-lg ${isOpen ? 'text-white' : 'text-neutral-300'}`}>
                    {faq.q}
                  </span>
                  <div className="ml-4 shrink-0 text-electric-blue">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5 text-neutral-500" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-neutral-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
