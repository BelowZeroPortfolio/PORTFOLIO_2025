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
  title: 'Carl Navid Cata-an - Programmer',
  description: 'Dedicated Programmer specializing in PHP, C#, JavaScript, and Microsoft Power Platform. Building efficient, scalable solutions and automation.',
  keywords: 'Programmer, PHP Developer, C# Developer, JavaScript, Microsoft Power Platform, Power Apps, Power Automate, Full Stack Developer',
  authors: [{ name: 'Carl Navid Cata-an' }],
  openGraph: {
    title: 'Carl Navid Cata-an - Programmer',
    description: 'Dedicated Programmer building efficient, scalable solutions with modern technologies',
    type: 'website',
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