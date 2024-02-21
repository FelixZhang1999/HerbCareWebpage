import './css/style.css'

import { Architects_Daughter, Inter } from 'next/font/google'
import Script from "next/script";

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
  title: 'HerbCaring',
  description: 'HerbCaring Wesbite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16466816716"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16466816716');`}
        </Script>
      </head>
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
