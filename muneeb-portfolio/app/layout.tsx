import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muneeb Iqbal — Software Engineer & Flutter Developer',
  description: 'Muneeb Iqbal is a Software Engineering student at Superior University Lahore, specializing in Flutter development, SEO, and UI/UX design. Available for freelance projects and job opportunities.',
  keywords: [
    'Muneeb Iqbal',
    'Flutter Developer Pakistan',
    'Software Engineer Lahore',
    'SEO Expert',
    'UI UX Designer',
    'Freelance Developer',
    'Mobile App Developer',
    'Superior University',
    'Flutter freelancer',
    'Web developer Lahore',
  ],
  authors: [{ name: 'Muneeb Iqbal' }],
  creator: 'Muneeb Iqbal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muneebiqbal.dev',
    title: 'Muneeb Iqbal — Software Engineer & Flutter Developer',
    description: 'Flutter Developer | SEO Expert | UI/UX Designer. Available for freelance and full-time opportunities.',
    siteName: 'Muneeb Iqbal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muneeb Iqbal — Software Engineer & Flutter Developer',
    description: 'Flutter Developer | SEO Expert | UI/UX Designer. Available for freelance and full-time opportunities.',
    creator: '@muneebiqbal',
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
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#060811',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://muneebiqbal.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muneeb Iqbal",
              "jobTitle": "Software Engineer & Flutter Developer",
              "url": "https://muneebiqbal.dev",
              "sameAs": [
                "https://linkedin.com/in/muneebiqbal",
                "https://github.com/muneebiqbal",
                "https://fiverr.com/muneebiqbal"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "PK"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Superior University Lahore"
              }
            })
          }}
        />
      </head>
      <body className="bg-animated noise antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
