'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';

export function StickyMobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card rounded-b-none border-t border-white/10 p-4 pb-safe flex gap-3 backdrop-blur-3xl bg-charcoal-800/90"
    >
      <Link 
        href="mailto:tejas@orindle.com"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold rounded-xl text-sm"
      >
        <Mail className="w-4 h-4" />
        Get Quote
      </Link>
      <Link 
        href="https://wa.link/k79mqx"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold rounded-xl text-sm shadow-[0_0_15px_rgba(37,211,102,0.3)]"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </Link>
    </motion.div>
  );
}
