import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingCards } from '@/components/pricing-cards';
import { FAQAccordion } from '@/components/faq-accordion';
import { EmbedBookingSection } from '@/components/embed-booking-section';
import { RelatedServices } from '@/components/related-services';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutDashboard, Instagram, Linkedin, Youtube, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Social Media Management Services in India | ORINDLE',
  description: 'Grow your brand with ORINDLE’s social media management services, including posts, reels, captions, content strategy, and monthly reporting.',
};

export default function SocialMediaManagement() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric-purple/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-purple/30 bg-electric-purple/10 text-electric-purple text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(138,43,226,0.2)]">
              Social Media Growth
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6 leading-tight">
              Social Media Management That Keeps Your Brand <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">Consistent & Growing</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
              ORINDLE helps businesses create, schedule, and manage high-quality social content across Instagram, Facebook, LinkedIn, and YouTube Shorts.
            </p>
            <Button href="#pricing" variant="primary">
              See Pricing Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="glass-card p-6 border border-white/10 shadow-2xl relative z-10 bg-charcoal-800/80 transform rotate-2 hover:rotate-0 transition-transform">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 flex items-center justify-center">
                     <Instagram className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <div className="text-sm font-semibold text-white">@yourbrand</div>
                     <div className="text-xs text-neutral-400">Content Calendar</div>
                   </div>
                 </div>
                 <div className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded font-medium">Scheduled</div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-[4/5] bg-charcoal-700 rounded-lg relative overflow-hidden group">
                   <Image src="https://picsum.photos/seed/reel1/400/500" alt="Reel" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">▶</div>
                   </div>
                 </div>
                 <div className="aspect-[4/5] bg-charcoal-700 rounded-lg relative overflow-hidden group">
                   <Image src="https://picsum.photos/seed/reel2/400/500" alt="Post" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 z-20 glass-card p-4 rounded-xl border border-white/10 bg-charcoal-700/90 shadow-xl flex items-center gap-4">
              <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs">💬</div>
                 <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-xs">❤️</div>
                 <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs">↗️</div>
              </div>
              <div className="text-sm font-medium text-white">+312% Engagement</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pain Points */}
      <section className="py-24 bg-charcoal-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display text-white mb-4">Are you losing leads to your competitors?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Most business owners know they need to be on social media, but struggle with the reality of it.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['Inconsistent posting schedules', 'Low engagement and reach', 'No clear content strategy', 'Zero time to manage it all'].map((point, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-red-500/10 bg-red-500/5 text-center">
                <div className="text-red-400 mb-3 text-2xl">✕</div>
                <div className="text-neutral-300 text-sm font-medium">{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-background border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-display font-light text-white mb-6">Designed to improve consistency, visibility, and lead flow.</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                We handle the entire content ecosystem. From researching trending audio to designing aesthetic carousels and writing converting captions.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Custom Reel & Short-form video editing',
                  'Graphic design for carousels & single posts',
                  'Caption writing with targeted hashtag strategy',
                  'Community management and active engagement',
                  'Monthly performance Analytics'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-electric-blue shrink-0" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-4 border border-white/5 bg-charcoal-700/50 hover:bg-white/5 transition-colors text-center aspect-square rounded-2xl">
                <Instagram className="w-10 h-10 text-pink-500" />
                <span className="text-white font-medium">Instagram</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-4 border border-white/5 bg-charcoal-700/50 hover:bg-white/5 transition-colors text-center aspect-square rounded-2xl">
                <Linkedin className="w-10 h-10 text-blue-500" />
                <span className="text-white font-medium">LinkedIn</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-4 border border-white/5 bg-charcoal-700/50 hover:bg-white/5 transition-colors text-center aspect-square rounded-2xl">
                <Youtube className="w-10 h-10 text-red-500" />
                <span className="text-white font-medium">YouTube Shorts</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-4 border border-white/5 bg-charcoal-700/50 hover:bg-white/5 transition-colors text-center aspect-square rounded-2xl">
                <LayoutDashboard className="w-10 h-10 text-electric-blue" />
                <span className="text-white font-medium">Content Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingCards category="social-media-management" />
      <FAQAccordion category="social-media-management" />
      <RelatedServices currentServiceId="social-media-management" />
      <EmbedBookingSection />
      
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </main>
  );
}
