import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
import React from "react";


export default function Page() {
  return (
    <section>
      <h1 className="text-balance text-center max-w-[20ch] mx-auto">
        The hub for every dev event you can't miss
      </h1>
      <p className="text-pretty text-center mt-5">Hackathons, Meetups and Conferences, all in one place.</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured events</h3>
        <ul className="events list-none">
          {events.map((event, idx) => (
            <li key={idx} className="event-card">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
