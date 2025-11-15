import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
// import { IEvent } from "@/database";
import { cacheLife, cacheTag } from "next/cache";
import { events, Event } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL environment variable is required');
}

async function Page() {
  "use cache"
  cacheLife("hours");
  cacheTag("event-cache");
  // const response = await fetch(`${BASE_URL}/api/events`);
  // const data = await response.json()
  // const events = data.events

  

  return (
    <section> 
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can&apos;t Miss</h1>
      <p className="text-center mt-5">Hacthons, Meetups and Confrencess, all in one place</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events list-none">
          {events.map((event: Event) => 
            (<li key={event.id}>
              <EventCard slug={event.id} {...event} />
            </li>))
          }
        </ul>
      </div>
    </section>

  );
}


export default Page;