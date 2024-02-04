export const metadata = {
  title: 'HerbCare Pain Relief Herbal Patches',
  description: 'Pain Relief Herbal Patches. A natural solution to a variety of pains',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <main>
      <Hero />
      <Zigzag />
      <Features />
      
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <Banner />
    </main>
  )
}
