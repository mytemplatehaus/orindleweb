'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
      <input type="hidden" name="access_key" value="54a674f4-a045-47e9-a8e1-b41f0f8c5610" />
      <input type="hidden" name="subject" value="New Inquiry from Orindle Website" />
      <input type="hidden" name="from_name" value="Orindle Notifications" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Name</label>
          <input 
            type="text" 
            name="name"
            id="name"
            required
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Email</label>
          <input 
            type="email" 
            name="email"
            id="email"
            required
            placeholder="john@company.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-colors"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="businessName" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Business Name</label>
        <input 
          type="text" 
          name="businessName"
          id="businessName"
          required
          placeholder="Company Inc."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-colors"
        />
      </div>

      <div className="space-y-2">
         <label htmlFor="service" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Service Needed</label>
          <select name="service" id="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-colors">
            <option value="Website Development" className="bg-charcoal-700">Website Development</option>
            <option value="AI Automation" className="bg-charcoal-700">AI Automation</option>
            <option value="Digital Marketing" className="bg-charcoal-700">Digital Marketing</option>
            <option value="Full Growth System" className="bg-charcoal-700">Full Growth System</option>
          </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Message</label>
        <textarea 
          name="message"
          id="message"
          rows={4}
          required
          placeholder="Tell us about your project goals..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-colors resize-none"
        ></textarea>
      </div>

      <button type="submit" className="w-full relative inline-flex items-center justify-center font-medium overflow-hidden transition-all duration-300 rounded-full px-4 py-4 text-base bg-electric-blue text-charcoal-800 hover:bg-white mt-4 border border-transparent shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
        <span className="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
        <span className="relative z-10 flex items-center gap-2">Send Message <ArrowRight className="w-4 h-4" /></span>
      </button>
    </form>
  );
}
