export const metadata = {
  title: 'HerbCaring Pain Relief Herbal Patches',
  description: 'Pain Relief Herbal Patches. A natural solution to a variety of pains',
}

import Hero from '@/components/products/herbal_patch/hero'
import Features from '@/components/products/herbal_patch/features'
import Newsletter from '@/components/products/herbal_patch/newsletter'
import Zigzag from '@/components/products/herbal_patch/zigzag'
import Testimonials from '@/components/products/herbal_patch/testimonials'
import Banner from '@/components/products/herbal_patch/banner'

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
