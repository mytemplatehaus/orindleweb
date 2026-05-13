import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orindle.com'),
  title: {
    default: 'Digital Growth & AI Automation Agency in India',
    template: '%s | ORINDLE',
  },
  description: 'We help businesses grow online with website development, social media management, digital marketing, video editing, and AI automation services.',
  openGraph: {
    title: 'Digital Growth & AI Automation Agency in India',
    description: 'We help businesses grow online with website development, social media management, digital marketing, video editing, and AI automation services.',
    url: 'https://orindle.com',
    siteName: 'ORINDLE',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth & AI Automation Agency in India',
    description: 'We help businesses grow online with website development, social media management, digital marketing, video editing, and AI automation services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ORINDLE",
    "url": "https://orindle.com",
    "logo": "https://orindle.com/favicon.png",
    "image": "https://orindle.com/favicon.png",
    "description": "Digital Growth & AI Automation Agency in India",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/orindle"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-black text-white font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
