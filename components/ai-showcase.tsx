'use client';

import { motion } from 'motion/react';
import { Bot, MessageSquare, Database, Zap, Cpu } from 'lucide-react';

export function AIShowcase() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-white/5 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-electric-purple/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue text-xs font-medium tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Cpu className="w-4 h-4" />
            AI Automation Core
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6">
            Work smart, not hard.
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
            Our custom AI chatbots and automated CRM workflows operate 24/7, answering queries, qualifying leads, and closing deals while you sleep.
          </p>
        </div>

        {/* Visual Workflow Diagram */}
        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-3xl glass-card border border-white/10 bg-charcoal-700/40 backdrop-blur-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center relative">
            
            {/* Connecting line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-white/10 via-electric-blue/50 to-white/10 -translate-y-1/2" />
            
             {/* Node 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-center mb-4 shadow-xl">
                <MessageSquare className="w-8 h-8 text-neutral-400" />
              </div>
              <div className="text-white font-medium mb-1">Customer Inquiry</div>
              <div className="text-xs text-neutral-500">WhatsApp / Website</div>
            </motion.div>

            {/* Node 2 - AI Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-electric-purple p-0.5 animate-pulse-slow shadow-[0_0_40px_rgba(0,240,255,0.4)] mb-4">
                <div className="w-full h-full rounded-full bg-charcoal-800 flex items-center justify-center">
                  <Bot className="w-10 h-10 text-electric-blue" />
                </div>
              </div>
              <div className="text-white font-medium mb-1 text-glow">ORINDLE AI Agent</div>
              <div className="text-xs text-electric-blue">Qualifies & Solves</div>
            </motion.div>

            {/* Node 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-center mb-4 shadow-xl relative overflow-hidden">
                <Database className="w-8 h-8 text-neutral-400 relative z-10" />
                <div className="absolute inset-0 bg-green-500/10" />
              </div>
              <div className="text-white font-medium mb-1">CRM Sync</div>
              <div className="text-xs text-neutral-500">Lead logged automatically</div>
            </motion.div>

          </div>

          {/* Animated Particles/Data flows could be added here in a more complex setup */}
        </div>
      </div>
    </section>
  );
}
