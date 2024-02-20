export const metadata = {
  title: 'HerbCaring Pain Relief Herbal Patches',
  description: 'Our patches provide long-lasting relief for various pains caused by arthritis, strain and sprain, sciatica, fibromyalgia, tenosynovitis, menstrual cramps, and more. Versatile in application, they effectively target back, neck, joint, shoulder, muscle pain, and even aid with stomach pain and acid reflux. Plus, each single patch is reusable for 1 to 2 months, ensuring lasting relief and value.',
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
