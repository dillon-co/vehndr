import Link from "next/link";
import { listEvents } from "../../services/events";

export default async function EventsPage() {
  const events = await listEvents();
  
  // Group events by month for better organization
  const eventsByMonth = events.reduce((acc, event) => {
    const month = new Date(event.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="font-display text-4xl tracking-wide mb-3">
          <span className="bg-gradient-to-r from-[#01DBE0] via-[#FD237A] to-[#FE9C05] bg-clip-text text-transparent">
            UPCOMING EVENTS
          </span>
        </h1>
        <p className="text-lg font-body text-gray-600">
          Find your festival and discover all the vendors that will be there
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
          <div key={month}>
            <h2 className="font-display text-2xl text-[#FE9C05] mb-4">{month}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monthEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group relative rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#DCA7F0]/10 via-white to-[#C9FF3F]/10 p-6 hover:border-[#01DBE0] transition-all hover:shadow-xl hover:shadow-[#01DBE0]/20 hover:-translate-y-1"
                >
                  <div className="absolute top-3 right-3 bg-[#C9FF3F] text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {event.vendorIds.length} Vendors
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-[#01DBE0]/20 to-[#FD237A]/20 flex items-center justify-center flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={event.image} alt="" className="h-10 w-10 opacity-70" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-1 group-hover:text-[#01DBE0] transition-colors">
                        {event.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-body mb-2">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-[#FD237A]">📍</span>
                          <span className="font-semibold">{event.location}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-[#01DBE0]">📅</span>
                          <span className="font-semibold">
                            {new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            {event.startDate !== event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-[#FE9C05]">👥</span>
                          <span className="font-semibold">{(event.attendees / 1000).toFixed(0)}K attendees</span>
                        </span>
                      </div>
                      
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#01DBE0]/10 to-[#FD237A]/10 rounded-full text-xs font-semibold text-gray-700">
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
