import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Logos } from '@/components/logos';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Process } from '@/components/process';
import { Portfolio } from '@/components/portfolio';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { AIShowcase } from '@/components/ai-showcase';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <AIShowcase />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
