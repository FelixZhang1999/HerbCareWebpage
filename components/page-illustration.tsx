import React from 'react'
import plant from '../public/images/plant.png'
import Image from 'next/image';

export default function PageIllustration() {
  return (
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none hidden lg:block" style={{ zIndex: '-1' }} aria-hidden="true">
        <Image src={plant} alt='background flower' width={160} height={160} style={{opacity: 0.6}} className="ml-auto pt-16" />
      </div>
  )
}
