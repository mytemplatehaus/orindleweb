'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          <div className="md:w-1/3">
            <Link href="/" className="font-display font-bold text-2xl tracking-wider text-white inline-block mb-6">
              ORINDLE<span className="text-electric-blue">.</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
              We help modern businesses scale by combining premium digital design with intelligent AI operations.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/orindle" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all">
                ig
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all">
                x
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:w-1/2">
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Services</h4>
              <ul className="space-y-4">
                <li><Link href="/services/social-media-management" className="text-neutral-400 hover:text-white text-sm transition-colors">Social Media Management</Link></li>
                <li><Link href="/services/website-design-development" className="text-neutral-400 hover:text-white text-sm transition-colors">Website Development</Link></li>
                <li><Link href="/services/digital-marketing" className="text-neutral-400 hover:text-white text-sm transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services/video-editing-content-production" className="text-neutral-400 hover:text-white text-sm transition-colors">Video Editing</Link></li>
                <li><Link href="/services/ai-automation-chatbot-setup" className="text-neutral-400 hover:text-white text-sm transition-colors">AI Automation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/#about" className="text-neutral-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                <li><Link href="/#portfolio" className="text-neutral-400 hover:text-white text-sm transition-colors">Work</Link></li>
                <li><Link href="/#pricing" className="text-neutral-400 hover:text-white text-sm transition-colors">Pricing</Link></li>
                <li><Link href="/#contact" className="text-neutral-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; {currentYear} ORINDLE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-neutral-600 hover:text-neutral-400 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-neutral-600 hover:text-neutral-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
