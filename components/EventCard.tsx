import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  image: string
  slug: string
  location: string
  date: string
  time: string
}

export default function EventCard({ title, image, slug, location, date, time }: Props) {
  return (
    <Link href={`/events/${slug}`}>
      <article id="event-card">
        <Image src={image} alt={title} width={410} height={300} className="poster"/>
        <div className="flex gap-2">
          <Image src="/icons/pin.svg" alt="location" width={14} height={14} aria-hidden/>
          <p>{location}</p>
        </div>

        <p className="title">{title}</p>
        
        <div className="datetime">
          <div>
            <Image src="/icons/calendar.svg" alt="date" width={14} height={14} aria-hidden/>
            <time dateTime={date}>{date}</time>
          </div>
          <div>
            <Image src="/icons/clock.svg" alt="time" width={14} height={14} aria-hidden/>
            <time dateTime={time}>{time}</time>
          </div>
        </div>
      </article>
    </Link>
  )
}
