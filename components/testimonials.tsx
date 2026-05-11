'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: 'Anish Minche',
      role: 'CEO, Elevate',
      text: "ORINDLE completely transformed our online presence. The AI chatbot alone saved us countless hours of customer support while increasing our conversion rate. Absolute game-changers.",
      img: 'https://picsum.photos/seed/sarah/100/100',
    },
    {
      name: 'Aditya Darwai',
      role: 'Founder, PixelWell',
      text: "We wanted a website that felt like a premium Silicon Valley startup. They delivered exactly that, and their SEO strategy brought us 3x more qualified leads in just two months.",
      img: 'https://picsum.photos/seed/marcus/100/100',
    },
    {
      name: 'Tejas Sutar',
      role: 'Content Creator, YouTube',
      text: "Their video editing and social media management is top-tier. They understand modern aesthetics and algorithms better than any agency we've worked with.",
      img: 'https://picsum.photos/seed/priya/100/100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-b border-white/5 relative">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
            Client <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow-blue">Success</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here is what leading modern businesses have to say about partnering with ORINDLE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/10 bg-charcoal-700/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-electric-blue">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed mb-8 font-sans">
                  &quot;{review.text}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/20">
                  <Image src={review.img} alt={review.name} fill referrerPolicy="no-referrer" className="object-cover" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{review.name}</div>
                  <div className="text-neutral-500 text-xs">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
