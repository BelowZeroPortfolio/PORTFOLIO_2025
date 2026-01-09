import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://carlnavid.vercel.app'),
  title: 'Carl Navid Cata-an - Web Developer',
  description: 'Web Developer skilled in PHP, Laravel, JavaScript, AL Programming, and Microsoft Power Platform. Building AI-powered solutions, business automations, and web experiences.',
  keywords: 'Web Developer, PHP Developer, Laravel, JavaScript, AL Programming, Microsoft Business Central, Power Platform, Power Apps, Power Automate, Full Stack Developer, AI Integration, IoT',
  authors: [{ name: 'Carl Navid Cata-an' }],
  openGraph: {
    title: 'Carl Navid Cata-an - Web Developer',
    description: 'Web Developer building efficient, scalable solutions with modern technologies. Specializing in AI-powered solutions, business automations, and web experiences.',
    type: 'website',
    url: 'https://carlnavid.vercel.app',
    siteName: 'Carl Navid Cata-an Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carl Navid Cata-an - Web Developer',
    description: 'Web Developer building efficient, scalable solutions with modern technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 