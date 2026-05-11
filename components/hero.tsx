'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-electric-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-electric-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 glass mb-8">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-xs font-medium tracking-wider uppercase text-white/80">Premium AI & Digital Agency</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
            We Build <span className="text-glow-blue text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">Modern Brands</span> That Scale Online
          </h1>
          
          <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-sans max-w-xl">
            ORINDLE helps businesses grow using high-converting websites, 
            data-driven marketing, content creation, and intelligent AI automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" variant="primary">
              Book Free Consultation
            </Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block z-20"
        >
          {/* Main Dashboard Mockup */}
          <div className="relative z-20 glass-card p-2 rounded-2xl shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <div className="rounded-xl overflow-hidden bg-charcoal-700 border border-white/10 aspect-[4/3] relative">
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center px-4 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="p-6 pt-12 text-sm text-neutral-500 font-mono">
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Total Revenue Growth</div>
                    <div className="text-3xl font-display text-white">+248.5%</div>
                  </div>
                  <div className="text-electric-blue text-xs uppercase tracking-wider px-2 py-1 rounded bg-electric-blue/10">Active</div>
                </div>
                {/* Fake chart bars */}
                <div className="flex items-end gap-2 h-32 mt-4">
                  {[40, 60, 30, 80, 50, 90, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                      className="flex-1 bg-gradient-to-t from-electric-blue/20 to-electric-blue/80 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -left-12 z-30 glass-card p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-4 bg-charcoal-800/80"
          >
            <div className="w-10 h-10 rounded-full bg-electric-purple/20 flex items-center justify-center text-electric-purple">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 capitalize">AI Automation Enabled</div>
              <div className="text-sm font-semibold text-white">Workflows Optimized</div>
            </div>
          </motion.div>
          
          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-8 -right-8 z-50 glass-card p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 bg-charcoal-700/80"
          >
            <div className="text-sm font-medium text-white px-2 py-1 bg-white/10 rounded">SEO Score</div>
            <div className="text-green-400 font-mono font-bold text-lg text-glow">98/100</div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
