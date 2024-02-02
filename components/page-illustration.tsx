import React from 'react'
import plant from '../public/images/plant.png'
import Image from 'next/image';

export default function PageIllustration() {
  return (
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" style={{ zIndex: '-1' }} aria-hidden="true">
        <Image src={plant} alt='' width={200} height={200} style={{opacity: 0.6}} className="ml-auto"/>
      </div>
  )
}
