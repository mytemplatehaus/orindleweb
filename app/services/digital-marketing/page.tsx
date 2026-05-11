import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingCards } from '@/components/pricing-cards';
import { FAQAccordion } from '@/components/faq-accordion';
import { EmbedBookingSection } from '@/components/embed-booking-section';
import { RelatedServices } from '@/components/related-services';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Search, Target, Users, MapPin, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing & SEO Services in India | ORINDLE',
  description: 'Generate traffic, leads, and sales. ORINDLE helps businesses grow with SEO, paid ads, lead generation, and email marketing.',
};

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              Growth Engine
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6 leading-tight">
              Digital Marketing Systems Designed to Bring More <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-electric-blue">Visibility & Leads</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
              ORINDLE helps businesses grow with SEO, paid ads, lead generation, email marketing, and conversion-focused strategy.
            </p>
            <Button href="#pricing" variant="primary">
              Get Marketing Plan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            {/* Funnel visual */}
            <div className="flex flex-col items-center w-full max-w-sm gap-2">
              <div className="w-full h-16 bg-gradient-to-r from-charcoal-700 to-charcoal-800 rounded-t-2xl border border-white/10 flex items-center justify-center relative">
                 <div className="text-white font-medium">Traffic (SEO & Ads)</div>
              </div>
              <div className="w-[85%] h-14 bg-gradient-to-r from-charcoal-700 to-charcoal-800 border border-white/10 flex items-center justify-center">
                 <div className="text-white/80 text-sm">Landing Page Capture</div>
              </div>
              <div className="w-[70%] h-14 bg-gradient-to-r from-charcoal-700 to-charcoal-800 border border-white/10 flex items-center justify-center">
                 <div className="text-white/70 text-sm">Lead Nurture</div>
              </div>
              <div className="w-[55%] h-16 bg-gradient-to-r from-electric-blue/20 to-green-500/20 rounded-b-2xl border border-electric-blue/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                 <div className="text-green-400 font-bold">New Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Where are your leads leaking? */}
      <section className="py-24 bg-charcoal-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display text-white mb-4">Where are your leads leaking?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Traffic is useless if it doesn&apos;t convert. We build full-funnel systems.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <Search className="w-6 h-6 text-neutral-500 mb-4" />
              <h3 className="text-white text-base font-medium mb-2">No Visibility</h3>
              <p className="text-xs text-neutral-400">Hidden on page 5 of Google.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <Users className="w-6 h-6 text-neutral-500 mb-4" />
              <h3 className="text-white text-base font-medium mb-2">Wrong Targeting</h3>
              <p className="text-xs text-neutral-400">Paying for clicks that don&apos;t buy.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <Target className="w-6 h-6 text-neutral-500 mb-4" />
              <h3 className="text-white text-base font-medium mb-2">Low Conversion</h3>
              <p className="text-xs text-neutral-400">Visitors arrive but never contact you.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <BarChart3 className="w-6 h-6 text-neutral-500 mb-4" />
              <h3 className="text-white text-base font-medium mb-2">No Follow-up</h3>
              <p className="text-xs text-neutral-400">Leads go cold because of slow replies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-light text-white mb-6">Growth Channels We Master</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">SEO</h3>
              <p className="text-sm text-neutral-400 mb-4">Rank higher on Google for the exact keywords your customers are searching for. Organic, long-term traffic.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Google Ads</h3>
              <p className="text-sm text-neutral-400 mb-4">Capture high-intent buyers exactly when they are ready to purchase with targeted search campaigns.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Meta (FB/IG) Ads</h3>
              <p className="text-sm text-neutral-400 mb-4">Build brand awareness and generate impulse leads using highly visual targeting on social platforms.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Landing Pages</h3>
              <p className="text-sm text-neutral-400 mb-4">Dedicated pages built explicitly to convert ad traffic into captured leads and booked calls.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Local SEO</h3>
              <p className="text-sm text-neutral-400 mb-4">Dominate your local market and Google Maps pack to drive foot traffic and local inquiries.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Analytics</h3>
              <p className="text-sm text-neutral-400 mb-4">Transparent monthly reporting so you know exactly what your Customer Acquisition Cost is.</p>
            </div>
          </div>
        </div>
      </section>

      <PricingCards category="digital-marketing" />
      <FAQAccordion category="digital-marketing" />
      <RelatedServices currentServiceId="digital-marketing" />
      <EmbedBookingSection />
      
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </main>
  );
}
