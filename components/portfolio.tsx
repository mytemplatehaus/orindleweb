'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: 'Stutzer n Flueler',
      category: 'Website & Automation',
      img: 'https://i.imgur.com/uFyY4Mi.jpeg',
      stats: '+140% Conversions',
    },
    {
      title: 'Tejas Sutar',
      category: 'Social Media & Video',
      img: 'https://i.imgur.com/yfmYNXX.png',
      stats: '1.2M Weekly Reach',
    },
    {
      title: 'Elevare',
      category: 'Digital Marketing & Web',
      img: 'https://i.imgur.com/8gGwqBU.png',
      stats: '3x Lead Volume',
    },
    {
      title: 'WA ChatBot',
      category: 'AI Chatbot & CRM',
      img: 'https://i.imgur.com/lZr80VI.png',
      stats: '-80% Support Time',
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-charcoal-700 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
              Featured Work
            </h2>
            <p className="text-neutral-400">Premium execution, measurable results.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-charcoal-800 border border-white/5">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                  {project.stats}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-medium text-white mb-1 group-hover:text-electric-blue transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
