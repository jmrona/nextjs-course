'use client'

import Image from 'next/image'
import React from 'react'

export default function ExploreBtn() {
  return (
   <a
      id="explore-btn"
      href="#events"
      className="mt-7 mx-auto inline-flex items-center justify-center gap-2"
    >
      Explore events
      <Image src="/icons/arrow-down.svg" alt="" width={20} height={20} />
    </a>
  )
}
