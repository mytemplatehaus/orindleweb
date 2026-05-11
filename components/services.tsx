'use client';

import { motion } from 'motion/react';
import { Smartphone, Layout, Megaphone, Video, Bot } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Social Media Management',
    desc: 'Instagram growth, LinkedIn management, and content strategy to build an engaged audience.',
    color: 'from-orange-500/20 to-transparent text-orange-400',
    href: '/services/social-media-management',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Website Development',
    desc: 'Fast, responsive, SEO-ready business websites, landing pages, and E-commerce stores.',
    color: 'from-blue-500/20 to-transparent text-blue-400',
    href: '/services/website-design-development',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Digital Marketing',
    desc: 'SEO, paid ads, lead generation, and email marketing for conversion optimization.',
    color: 'from-purple-500/20 to-transparent text-purple-400',
    href: '/services/digital-marketing',
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Video Editing',
    desc: 'High-retention Reels, YouTube edits, podcast clips, and ad creatives that grab attention.',
    color: 'from-pink-500/20 to-transparent text-pink-400',
    href: '/services/video-editing-content-production',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Automation',
    desc: 'Intelligent AI Chatbots, WhatsApp automation, and CRM workflows to scale your support.',
    color: 'from-electric-blue/20 to-transparent text-electric-blue',
    href: '/services/ai-automation-chatbot-setup',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative bg-background border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 md:w-2/3">
          <h2 className="font-display font-light text-5xl md:text-6xl mb-6">
            Services designed for <br />
            <span className="font-semibold">modern growth.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl">
            We provide an end-to-end ecosystem of digital services, turning your online presence into an automated growth engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link key={idx} href={service.href || '#'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full block"
              >
                <div className="h-full glass-card p-8 rounded-2xl flex flex-col border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden bg-charcoal-700/50">
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors`}>
                      <div className={service.color.split(' ').pop()}>
                         {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-glow transition-all">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
