'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function WhatsAppCTA({ 
  text = "Message on WhatsApp", 
  className = "" 
}: { 
  text?: string, 
  className?: string 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        href="https://wa.link/k79mqx"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-full font-medium hover:bg-[#25D366]/20 transition-colors ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        {text}
      </Link>
    </motion.div>
  );
}
