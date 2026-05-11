'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FloatingWhatsAppButton() {
  const pathname = usePathname();

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 hidden md:block" // Hidden on mobile, handled by sticky CTA
    >
      <Link
        href="https://wa.link/k79mqx"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>
    </motion.div>
  );
}
