import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingCards } from '@/components/pricing-cards';
import { FAQAccordion } from '@/components/faq-accordion';
import { EmbedBookingSection } from '@/components/embed-booking-section';
import { RelatedServices } from '@/components/related-services';
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap, Database, Clock, MessageSquare, Workflow } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'AI Automation & Chatbot Setup Agency in India | ORINDLE',
  description: 'Automate repetitive workflows and capture leads faster. ORINDLE builds custom AI chatbots, WhatsApp automation, and CRM integrations.',
};

export default function AIAutomation() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              Operations Operating System
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-light mb-6 leading-tight">
              Automate Leads, Support, and Workflows With <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-electric-blue">Smart AI</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
              ORINDLE helps businesses save time and respond faster with custom AI chatbots, WhatsApp automation, CRM flows, and smart lead systems.
            </p>
            <Button href="#pricing" variant="primary">
              Automate My Business <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative flex justify-center">
             <div className="glass-card p-6 border border-white/10 shadow-2xl relative z-10 bg-charcoal-800/80 rounded-3xl overflow-hidden w-full max-w-sm">
                
                {/* Chat UI demo */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-charcoal-700 flex shrink-0 items-center justify-center text-xs">U</div>
                    <div className="bg-charcoal-900 border border-white/5 p-3 rounded-2xl rounded-tl-sm text-sm text-white/80">
                      Hi, do you offer SEO services?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-electric-purple/20 flex shrink-0 items-center justify-center text-xs">
                      <Bot className="w-4 h-4 text-electric-purple" />
                    </div>
                    <div className="bg-electric-purple/10 border border-electric-purple/20 p-3 rounded-2xl rounded-tr-sm text-sm text-white">
                      Yes! We offer aggressive SEO. What is your current website URL?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-charcoal-700 flex shrink-0 items-center justify-center text-xs">U</div>
                    <div className="bg-charcoal-900 border border-white/5 p-3 rounded-2xl rounded-tl-sm text-sm text-white/80">
                      orindle.com
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-electric-purple/20 flex shrink-0 items-center justify-center text-xs">
                       <Bot className="w-4 h-4 text-electric-purple" />
                    </div>
                    <div className="bg-electric-purple/10 border border-electric-purple/20 p-3 rounded-2xl rounded-tr-sm text-sm text-white">
                      Great! I&apos;ve sent a quick audit request to our team. Could I get your email to send the report?
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-electric-blue" /> Instantly captured lead</span>
                  <span>Syncing to CRM...</span>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Calculate what you can automate */}
      <section className="py-24 bg-charcoal-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display text-white mb-4">The work your team repeats every day can be automated.</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Humans should do creative work. Bots should do the rest.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl border border-white/5 text-center">
              <MessageSquare className="w-8 h-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-white text-lg font-medium mb-2">Customer Support</h3>
              <p className="text-sm text-neutral-400">Answer 80% of repetitive FAQs instantly across WhatsApp and website chat.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 text-center">
              <Workflow className="w-8 h-8 text-electric-purple mx-auto mb-4" />
              <h3 className="text-white text-lg font-medium mb-2">Lead Qualification</h3>
              <p className="text-sm text-neutral-400">Ask intake questions automatically and only route high-ticket leads to your sales team.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 text-center">
              <Database className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white text-lg font-medium mb-2">CRM Syncing</h3>
              <p className="text-sm text-neutral-400">Never copy-paste again. Chats become organized database rows instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process flow */}
      <section className="py-24 bg-background border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-light text-white mb-6">How Our AI Agents Work</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
             <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-white/5 via-electric-blue/50 to-white/5 -z-10"></div>
             
             <div className="glass-card p-6 rounded-2xl border border-white/10 text-center w-full md:w-64 bg-charcoal-800">
               <div className="text-sm text-neutral-400 uppercase tracking-widest mb-2 font-semibold">Step 1</div>
               <div className="text-white font-medium">Trigger</div>
               <div className="text-xs text-neutral-500 mt-2">Customer taps WhatsApp Ad</div>
             </div>
             
             <ArrowRight className="w-6 h-6 text-electric-blue rotate-90 md:rotate-0" />
             
             <div className="glass-card p-6 rounded-2xl border border-electric-blue/30 text-center w-full md:w-64 bg-electric-blue/5">
               <div className="text-sm text-electric-blue uppercase tracking-widest mb-2 font-semibold">Step 2</div>
               <div className="text-white font-medium">AI Conversation</div>
               <div className="text-xs text-neutral-400 mt-2">Bot answers questions & collects email</div>
             </div>
             
             <ArrowRight className="w-6 h-6 text-electric-blue rotate-90 md:rotate-0" />
             
             <div className="glass-card p-6 rounded-2xl border border-white/10 text-center w-full md:w-64 bg-charcoal-800">
               <div className="text-sm text-neutral-400 uppercase tracking-widest mb-2 font-semibold">Step 3</div>
               <div className="text-white font-medium">Execution</div>
               <div className="text-xs text-neutral-500 mt-2">Lead added to CRM & team notified</div>
             </div>
          </div>
        </div>
      </section>

      <PricingCards category="ai-automation-chatbot-setup" />
      <FAQAccordion category="ai-automation-chatbot-setup" />
      <RelatedServices currentServiceId="ai-automation-chatbot-setup" />
      <EmbedBookingSection />
      
      <Footer />
      <FloatingWhatsAppButton />
      <StickyMobileCTA />
    </main>
  );
}
