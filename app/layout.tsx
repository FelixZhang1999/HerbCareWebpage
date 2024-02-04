import './css/style.css'

import { Architects_Daughter, Inter } from 'next/font/google'

import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'HerbCare',
  description: 'HerbCare Wesbite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gradient-to-b from-background-first to-background-second text-text-normal tracking-tight`}>
        <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
