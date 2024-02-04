'use client'

import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}
    </>
  )
}
