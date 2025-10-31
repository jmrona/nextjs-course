import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/" className='logo'>
          <Image src="/icons/logo.png" alt="DevEvents Logo" width={24} height={24}/>
          <p>DevEvents</p>
        </Link>

        <ul className='list-none'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/Create event">Create event</Link></li>
        </ul>
      </nav>
    </header>
  )
}
