'use client'

import 'aos/dist/aos.css'

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
