'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export function RelatedServices({ currentServiceId }: { currentServiceId: string }) {
  const related = servicesData.filter(s => s.id !== currentServiceId).slice(0, 3);

  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-display font-light text-white mb-12">Related Services</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service, idx) => (
            <Link key={idx} href={service.href}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-electric-blue/30 transition-all h-full flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-glow-blue transition-all">{service.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-8">{service.description}</p>
                </div>
                <div className="flex items-center gap-2 text-electric-blue text-sm font-medium">
                  Explore Service <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
