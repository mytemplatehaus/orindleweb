import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingCards } from '@/components/pricing-cards';
import { FAQAccordion } from '@/components/faq-accordion';
import { EmbedBookingSection } from '@/components/embed-booking-section';
import { RelatedServices } from '@/components/related-services';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Scissors, PlaySquare, Film, Camera } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Video Editing & Content Production Services | ORINDLE',
  description: 'Scroll-Stopping Video Editing for Reels, Shorts, Ads, and Brand Content.',
};

export default function VideoEditing() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              Cinematic Production
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6 leading-tight">
              Scroll-Stopping Video Editing for <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Reels & Brands</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
              ORINDLE turns raw footage into clean, engaging short-form and long-form content for businesses, creators, and modern brands.
            </p>
            <Button href="#pricing" variant="primary">
              Edit My Videos <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative">
             <div className="glass-card p-4 border border-white/10 shadow-2xl relative z-10 bg-charcoal-800/80 rounded-2xl overflow-hidden group">
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex gap-2">
                    <Scissors className="w-4 h-4 text-neutral-400" />
                    <Film className="w-4 h-4 text-neutral-400" />
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">timeline_v2.prproj</div>
                </div>
                
                {/* Fake video timeline */}
                <div className="space-y-2">
                  <div className="h-12 w-full bg-charcoal-900 rounded flex items-center relative overflow-hidden">
                    <div className="absolute left-0 w-1/4 h-full bg-blue-500/20 border-r border-blue-500/50"></div>
                    <div className="absolute left-1/4 w-1/2 h-full bg-pink-500/20 border-r border-pink-500/50"></div>
                    <div className="absolute left-3/4 w-1/4 h-full bg-blue-500/20"></div>
                    {/* Playhead */}
                    <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-red-500 z-10 shadow-[0_0_10px_rgba(239,68,68,1)]"></div>
                  </div>
                  <div className="h-8 w-full bg-charcoal-900 rounded flex items-center relative overflow-hidden">
                    <div className="absolute left-1/4 w-1/3 h-full bg-green-500/20 rounded mx-1"></div>
                    <div className="absolute right-10 w-1/4 h-full bg-green-500/20 rounded mx-1"></div>
                  </div>
                </div>
                
             </div>
          </div>
        </div>
      </section>
      
      {/* 1 Shoot -> 30 videos */}
      <section className="py-24 bg-charcoal-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display text-white mb-6">Turn 1 podcast or shoot into 30 content pieces.</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-16">Stop struggling to record every day. We use content multipliers to give you a month of content from a single 2-hour recording session.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="glass-card p-6 rounded-full w-48 h-48 flex flex-col items-center justify-center border-white/10">
              <Camera className="w-10 h-10 text-white mb-2" />
              <div className="text-sm text-neutral-300">1 Long Video</div>
            </div>
            
            <div className="hidden md:flex gap-2 text-pink-500">
              <ArrowRight className="w-6 h-6 animate-pulse" />
              <ArrowRight className="w-6 h-6 animate-pulse delay-75" />
              <ArrowRight className="w-6 h-6 animate-pulse delay-150" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="glass-card px-6 py-4 rounded-xl border border-white/5 flex items-center gap-3">
                 <PlaySquare className="w-5 h-5 text-pink-500" />
                 <span className="text-sm text-white">4 YouTube Shorts</span>
               </div>
               <div className="glass-card px-6 py-4 rounded-xl border border-white/5 flex items-center gap-3">
                 <PlaySquare className="w-5 h-5 text-pink-500" />
                 <span className="text-sm text-white">8 Instagram Reels</span>
               </div>
               <div className="glass-card px-6 py-4 rounded-xl border border-white/5 flex items-center gap-3">
                 <PlaySquare className="w-5 h-5 text-blue-500" />
                 <span className="text-sm text-white">4 LinkedIn Clips</span>
               </div>
               <div className="glass-card px-6 py-4 rounded-xl border border-white/5 flex items-center gap-3">
                 <PlaySquare className="w-5 h-5 text-electric-blue" />
                 <span className="text-sm text-white">Ad Creatives</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editing features */}
      <section className="py-24 bg-background border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-light text-white mb-6">What makes our edits premium?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Dynamic Captions</h3>
              <p className="text-sm text-neutral-400">Hormozi-style animated text that keeps eyes glued to the screen, even on mute.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Pattern Interrupts</h3>
              <p className="text-sm text-neutral-400">B-roll, zoom-ins, and visual pop-ups every 3 seconds to reset viewer attention.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl text-white font-medium mb-3">Sound Design</h3>
              <p className="text-sm text-neutral-400">Whooshes, risers, and subtle background music that heightens the emotional impact.</p>
            </div>
          </div>
        </div>
      </section>

      <PricingCards category="video-editing-content-production" />
      <FAQAccordion category="video-editing-content-production" />
      <RelatedServices currentServiceId="video-editing-content-production" />
      <EmbedBookingSection />
      
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </main>
  );
}
