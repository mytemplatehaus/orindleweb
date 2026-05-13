import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingCards } from '@/components/pricing-cards';
import { FAQAccordion } from '@/components/faq-accordion';
import { EmbedBookingSection } from '@/components/embed-booking-section';
import { RelatedServices } from '@/components/related-services';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Smartphone, Gauge, Search, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Website Design & Development Services in India | ORINDLE',
  description: 'Built for businesses that want a professional online presence. We build fast, responsive, SEO-ready websites.',
};

export default function WebsiteDesign() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Digital Platforms
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6 leading-tight">
              Websites Built to Look Premium, Load Fast, and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-electric-blue">Convert Visitors</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
              ORINDLE designs and develops modern websites for startups, local businesses, creators, and online brands.
            </p>
            <Button href="#pricing" variant="primary">
              View Website Packages <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="glass-card p-2 border border-white/10 shadow-2xl relative z-10 bg-charcoal-800/80 rounded-2xl overflow-hidden group">
               <div className="bg-charcoal-900 border-b border-white/10 p-3 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="relative aspect-[16/10] w-full">
                 <Image src="https://i.imgur.com/MhFcXOb.jpeg" alt="Website Design" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
               </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 z-20 glass-card p-4 rounded-xl border border-white/10 bg-charcoal-700/90 shadow-xl flex items-center gap-4">
              <Gauge className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-sm font-medium text-white">Performance Score</div>
                <div className="text-xs text-green-400 font-mono">100/100</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Is your website losing leads? */}
      <section className="py-16 md:py-24 bg-charcoal-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display text-white mb-4">Is your current website losing leads?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">A bad website tells customers you operate a bad business. We fix that.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <Smartphone className="w-8 h-8 text-neutral-400 mb-6" />
              <h3 className="text-white text-lg font-medium mb-3">Not Mobile Optimized</h3>
              <p className="text-sm text-neutral-400">80% of your traffic comes from phones. If it looks broken on mobile, they leave immediately.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <Gauge className="w-8 h-8 text-neutral-400 mb-6" />
              <h3 className="text-white text-lg font-medium mb-3">Slow Loading Speeds</h3>
              <p className="text-sm text-neutral-400">Visitors bounce if a site takes more than 3 seconds to load. Speed equals revenue.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <Monitor className="w-8 h-8 text-neutral-400 mb-6" />
              <h3 className="text-white text-lg font-medium mb-3">Looks Outdated</h3>
              <p className="text-sm text-neutral-400">Generic templates destroy trust. A premium design justifies premium pricing for your services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 md:py-24 bg-background border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 border border-electric-blue/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-electric-purple/20 rounded-full animate-reverse-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-display font-light text-white mb-6">Built for businesses that want a professional online presence.</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Every website we build is engineered from the ground up to serve as your hardest-working salesperson.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Mobile-First Responsive Design',
                  'Lightning Fast Loading Speeds (Next.js/React)',
                  'Basic On-Page SEO Structure included',
                  'WhatsApp & Lead Form Integrations',
                  'Premium Animations & Glassmorphism UI'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-electric-blue shrink-0" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PricingCards category="website-design-development" />
      <FAQAccordion category="website-design-development" />
      <RelatedServices currentServiceId="website-design-development" />
      <EmbedBookingSection />
      
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </main>
  );
}
