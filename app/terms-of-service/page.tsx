import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Terms of Service | ORINDLE',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 text-neutral-300">
        <h1 className="text-4xl font-display text-white mb-4">Terms of Service for ORINDLE</h1>
        <p className="mb-8 text-neutral-400">Last Updated: 11 May 2026</p>
        
        <p className="mb-4">Welcome to ORINDLE. These Terms of Service explain the rules and conditions for using our website, contacting us, and purchasing services from ORINDLE.</p>
        <p className="mb-12">By using our website or working with ORINDLE, you agree to these Terms.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">About ORINDLE</h2>
        <p className="mb-4">ORINDLE is a service-based digital agency that provides:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Social Media Management</li>
          <li>Website Design & Development</li>
          <li>Digital Marketing Services</li>
          <li>Video Editing & Content Production</li>
          <li>AI Automation & Chatbot Setup</li>
        </ul>
        <p className="mb-8">Website: orindle.com<br/>WhatsApp: <a href="https://wa.link/k79mqx" className="text-electric-blue hover:underline">https://wa.link/k79mqx</a></p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Use of Our Website</h2>
        <p className="mb-4">You agree to use the ORINDLE website only for lawful purposes.</p>
        <p className="mb-2">You must not:</p>
        <ul className="list-disc pl-6 mb-8 space-y-1 text-neutral-400">
          <li>Misuse the website</li>
          <li>Attempt to hack, damage, or disrupt the website</li>
          <li>Submit false or misleading information</li>
          <li>Copy website content without permission</li>
          <li>Use our website for spam or illegal activity</li>
        </ul>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">3. Service Inquiries and Consultations</h2>
        <p className="mb-4">You may contact ORINDLE through WhatsApp, forms, email, or other available channels.</p>
        <p className="mb-8">A consultation or inquiry does not create a confirmed project unless both parties agree to the scope, pricing, timeline, and payment terms.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Proposals and Pricing</h2>
        <p className="mb-4">Prices shown on the website are standard reference prices.</p>
        <p className="mb-2">Final pricing may vary based on:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Project scope</li>
          <li>Content volume</li>
          <li>Number of pages or deliverables</li>
          <li>Required integrations</li>
          <li>Timeline</li>
          <li>Revisions</li>
          <li>Custom requirements</li>
          <li>Third-party tools or subscriptions</li>
        </ul>
        <p className="mb-8">ORINDLE may provide a custom quote based on your business needs.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Payments</h2>
        <p className="mb-4">Unless otherwise agreed, ORINDLE may require advance payment before starting work.</p>
        <p className="mb-2">For project-based work, payment terms may include:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Advance payment before work begins</li>
          <li>Milestone payments</li>
          <li>Final payment before delivery or launch</li>
        </ul>
        <p className="mb-4">For monthly services, payment is usually billed in advance.</p>
        <p className="mb-8">Third-party costs such as domain, hosting, paid tools, ad spend, stock assets, plugins, software subscriptions, payment gateway charges, or CRM tools are not included unless clearly mentioned in the proposal.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Client Responsibilities</h2>
        <p className="mb-4">To complete projects properly, the client must provide required information, approvals, access, brand assets, content, and feedback on time.</p>
        <p className="mb-2">This may include:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Logo files</li>
          <li>Brand guidelines</li>
          <li>Photos and videos</li>
          <li>Website content</li>
          <li>Product or service details</li>
          <li>Social media access</li>
          <li>Hosting or domain access</li>
          <li>Ad account access</li>
          <li>CRM or tool access</li>
          <li>Required approvals</li>
        </ul>
        <p className="mb-8">Delays in providing information or approvals may delay the project timeline.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Timelines</h2>
        <p className="mb-4">Project timelines depend on scope, complexity, feedback, and client response time.</p>
        <p className="mb-2">ORINDLE will try to meet agreed timelines, but delays may happen due to:</p>
        <ul className="list-disc pl-6 mb-8 space-y-1 text-neutral-400">
          <li>Late client feedback</li>
          <li>Change in scope</li>
          <li>Technical issues</li>
          <li>Third-party platform delays</li>
          <li>Payment delays</li>
          <li>Additional revision requests</li>
        </ul>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">8. Revisions</h2>
        <p className="mb-4">Revisions will be provided according to the agreed project scope or package.</p>
        <p className="mb-4">Additional revisions, redesigns, or major scope changes may be charged separately.</p>
        <p className="mb-8">A revision means improvement or adjustment to agreed work. A complete change in direction, new design style, new page, new feature, or new content requirement may be treated as additional work.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Cancellations and Refunds</h2>
        <p className="mb-4">Once work has started, payments made for completed work, planning, strategy, design, development, editing, setup, or consultation may not be refundable.</p>
        <p className="mb-4">If a project is cancelled before work begins, ORINDLE may review the case and decide whether a partial refund or credit is possible.</p>
        <p className="mb-8">Monthly retainers are generally non-refundable once the billing period has started.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Digital Marketing and Ads Disclaimer</h2>
        <p className="mb-4">ORINDLE may provide SEO, paid ads, lead generation, email marketing, and digital marketing support.</p>
        <p className="mb-4">However, ORINDLE does not guarantee specific rankings, sales, leads, revenue, followers, engagement, or ad results.</p>
        <p className="mb-2">Marketing results may depend on:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Market demand</li>
          <li>Offer quality</li>
          <li>Budget</li>
          <li>Competition</li>
          <li>Ad platform behavior</li>
          <li>Website quality</li>
          <li>Brand trust</li>
          <li>Sales follow-up</li>
          <li>Customer service</li>
          <li>External market conditions</li>
        </ul>
        <p className="mb-8">Ad spend is separate from ORINDLE’s service fee unless clearly mentioned.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Website Development Disclaimer</h2>
        <p className="mb-4">ORINDLE builds websites based on the agreed scope.</p>
        <p className="mb-2">The client is responsible for:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Providing accurate business information</li>
          <li>Reviewing website content before launch</li>
          <li>Ensuring legal compliance for their own business</li>
          <li>Paying for domain, hosting, plugins, and third-party tools if required</li>
        </ul>
        <p className="mb-8">ORINDLE is not responsible for issues caused by third-party hosting providers, plugin failures, expired domains, client-side changes, or external platform downtime.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">AI Automation and Chatbot Disclaimer</h2>
        <p className="mb-4">ORINDLE may create AI chatbots, workflow automations, CRM flows, lead capture systems, appointment systems, and WhatsApp automation setups.</p>
        <p className="mb-4">AI and automation systems may not always produce perfect responses. The client should review workflows, chatbot responses, and automation logic before relying on them for customer-facing use.</p>
        <p className="mb-8">ORINDLE is not responsible for incorrect responses, missed leads, platform outages, API errors, third-party tool limitations, or misuse of automation systems by the client.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Content and Video Editing</h2>
        <p className="mb-4">For video editing, social media, and content production, the client must provide required raw footage, brand assets, instructions, and approvals.</p>
        <p className="mb-4">The client confirms that they have the right to use all submitted footage, music, images, logos, and materials.</p>
        <p className="mb-8">ORINDLE is not responsible for copyright claims caused by client-provided materials.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Intellectual Property</h2>
        <p className="mb-4">After full payment, the client receives rights to the final approved deliverables created specifically for the client.</p>
        <p className="mb-2">However, ORINDLE may retain ownership of:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Internal processes</li>
          <li>Templates</li>
          <li>Frameworks</li>
          <li>Pre-existing code</li>
          <li>Reusable components</li>
          <li>Strategy methods</li>
          <li>Automation logic templates</li>
          <li>Design systems created before the project</li>
          <li>Tools and workflows not created exclusively for the client</li>
        </ul>
        <p className="mb-8">Third-party assets, software, plugins, fonts, music, stock content, and tools remain subject to their own licenses.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Portfolio Usage</h2>
        <p className="mb-4">Unless agreed otherwise in writing, ORINDLE may showcase completed work in its portfolio, social media, website, proposals, or case studies.</p>
        <p className="mb-8">If the project is confidential, the client must inform ORINDLE in writing before the project begins.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Confidentiality</h2>
        <p className="mb-4">ORINDLE will take reasonable steps to keep client business information confidential.</p>
        <p className="mb-4">Both parties agree not to misuse confidential information shared during the project.</p>
        <p className="mb-8">Confidential information does not include information that is publicly available or already known before the project.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Third-Party Platforms</h2>
        <p className="mb-4">ORINDLE may use third-party platforms such as hosting providers, ad platforms, analytics tools, CRM systems, WhatsApp, automation tools, AI tools, payment gateways, and form tools.</p>
        <p className="mb-8">ORINDLE is not responsible for downtime, policy changes, pricing changes, account restrictions, bugs, data loss, or service issues caused by third-party platforms.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-4">ORINDLE will make reasonable efforts to deliver quality services.</p>
        <p className="mb-2">However, ORINDLE will not be liable for indirect losses such as:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Loss of profit</li>
          <li>Loss of revenue</li>
          <li>Loss of data</li>
          <li>Loss of business opportunity</li>
          <li>Platform downtime</li>
          <li>Ad account restrictions</li>
          <li>Search ranking changes</li>
          <li>Social media algorithm changes</li>
          <li>Third-party tool failures</li>
        </ul>
        <p className="mb-8">ORINDLE’s total liability, if any, will be limited to the amount paid by the client for the specific service giving rise to the claim.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">No Guarantee of Results</h2>
        <p className="mb-4">ORINDLE provides strategy, execution, design, development, marketing, content, and automation services.</p>
        <p className="mb-2">We do not guarantee specific business outcomes, including:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-neutral-400">
          <li>Sales</li>
          <li>Leads</li>
          <li>Revenue</li>
          <li>Followers</li>
          <li>Engagement</li>
          <li>Search rankings</li>
          <li>Ad performance</li>
          <li>Viral content</li>
          <li>Customer conversions</li>
        </ul>
        <p className="mb-8">We focus on building professional, practical, and growth-oriented digital systems.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Changes to Services</h2>
        <p className="mb-4">ORINDLE may update, modify, pause, or discontinue any service, package, feature, or pricing at any time.</p>
        <p className="mb-8">Existing client agreements will follow the terms agreed at the time of purchase unless both parties agree to changes.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Governing Law</h2>
        <p className="mb-4">These Terms are governed by the laws of India.</p>
        <p className="mb-8">Any disputes will be subject to the jurisdiction of courts located in [Your City, India], unless otherwise agreed in writing.</p>

        <h2 className="text-2xl font-display text-white mt-8 mb-4">Contact</h2>
        <p className="mb-4">For questions about these Terms, contact:</p>
        <p className="mb-8">ORINDLE<br/>Website: orindle.com<br/>Email: tejas@orindle.com<br/>WhatsApp: <a href="https://wa.link/k79mqx" className="text-electric-blue hover:underline">https://wa.link/k79mqx</a></p>
      </div>
      <Footer />
    </main>
  );
}
