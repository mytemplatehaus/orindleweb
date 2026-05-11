'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { pricingData } from '@/data/pricing';
import { WhatsAppCTA } from './whatsapp-cta';

export function PricingCards({ category }: { category: string }) {
  const plans = pricingData[category] || [];

  return (
    <section id="pricing" className="py-24 bg-charcoal-700 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Choose the perfect growth engine for your business stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative glass-card rounded-3xl p-8 border flex flex-col ${
                plan.popular 
                  ? 'border-electric-blue/50 bg-white/[0.05] shadow-[0_0_50px_-12px_rgba(0,240,255,0.2)]' 
                  : 'border-white/10 bg-black/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-electric-blue text-charcoal-800 text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400 text-sm h-10">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-display font-light text-white">{plan.price}</span>
                <span className="text-neutral-500 font-medium"> {plan.interval}</span>
              </div>
              
              <div className="mb-10 flex-grow">
                <div className="text-sm font-medium text-white mb-4">What&apos;s included:</div>
                <ul className="space-y-4">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                      <Check className="w-5 h-5 text-electric-blue shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <Button href="#embed-booking" variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                  Book Free Consultation
                </Button>
                <div className="text-center">
                  <WhatsAppCTA text="Discuss This Plan" className="!bg-transparent border-none text-sm px-0 py-0 hover:!bg-transparent hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-xs text-neutral-500 max-w-2xl mx-auto">
          Final pricing may vary based on scope, content volume, integrations, timeline, and custom requirements. For digital marketing, ad spend is completely separate.
        </div>
      </div>
    </section>
  );
}
