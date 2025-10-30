import Link from "next/link";
import { getEvent } from "../../../services/events";
import { listVendors } from "../../../services/vendors";

export default async function EventDetailPage({ params, searchParams }) {
  const { eventId } = await params;
  const sp = await searchParams;
  const event = await getEvent(eventId);
  const allVendors = await listVendors();
  
  if (!event) {
    return (
      <div className="mx-auto max-w-6xl p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-semibold mb-2">Event Not Found</h1>
          <Link href="/events" className="text-[#01DBE0] hover:text-[#FD237A] underline">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  // Get vendor details for this event
  const eventVendors = allVendors.filter(v => event.vendorIds.includes(v.id));

  // Category chip filter (like /vendors)
  const categories = Array.from(
    new Set(eventVendors.flatMap((v) => v.categories ?? []))
  ).sort();
  const activeCategory = typeof sp?.category === "string" ? sp.category : null;
  const filteredVendors = activeCategory
    ? eventVendors.filter((v) => (v.categories ?? []).map((c) => c.toLowerCase()).includes(activeCategory.toLowerCase()))
    : eventVendors;

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Event Header */}
      <div className="mb-8">
        <Link href="/events" className="text-sm text-[#01DBE0] hover:text-[#FD237A] font-semibold mb-4 inline-block">
          ← Back to Events
        </Link>
        
        <div className="rounded-3xl bg-gradient-to-br from-[#01DBE0]/10 via-[#FD237A]/5 to-[#FE9C05]/10 p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-[#01DBE0]/20 to-[#FD237A]/20 flex items-center justify-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={event.image} alt="" className="h-20 w-20 opacity-80" />
            </div>
            
            <div className="flex-1">
              <h1 className="font-display text-5xl tracking-wide mb-3">
                <span className="bg-gradient-to-r from-[#01DBE0] to-[#FD237A] bg-clip-text text-transparent">
                  {event.name}
                </span>
              </h1>
              <p className="text-lg font-body text-gray-600 mb-4">{event.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full">
                  <span className="text-[#FD237A]">📍</span>
                  <span className="font-semibold">{event.location}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full">
                  <span className="text-[#01DBE0]">📅</span>
                  <span className="font-semibold">
                    {new Date(event.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    {event.startDate !== event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full">
                  <span className="text-[#FE9C05]">👥</span>
                  <span className="font-semibold">{(event.attendees / 1000).toFixed(0)}K expected attendees</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9FF3F] to-[#FE9C05] text-gray-900 rounded-full">
                  <span className="font-bold">{event.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Section */}
      <div>
        <h2 className="font-display text-3xl tracking-wide mb-4">
          <span className="text-[#FE9C05]">{eventVendors.length}</span> VENDORS AT THIS EVENT
        </h2>

        {/* Category filter chips */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <FilterChip label="All" href={`/events/${event.id}`} active={activeCategory == null} />
            {categories.map((c) => (
              <FilterChip
                key={c}
                label={c}
                href={`/events/${event.id}?category=${encodeURIComponent(c)}`}
                active={activeCategory?.toLowerCase() === c.toLowerCase()}
              />
            ))}
          </div>
        </div>

        {/* Vendor grid (filtered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVendors.map((vendor) => (
            <Link
              key={vendor.id}
              href={`/store/${vendor.id}`}
              className="group relative rounded-xl border-2 border-transparent bg-white hover:border-[#01DBE0] transition-all hover:shadow-xl hover:shadow-[#01DBE0]/20 hover:-translate-y-1 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#DCA7F0]/20 to-[#C9FF3F]/20 flex items-center justify-center flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={vendor.heroImage} alt="" className="h-6 w-6 opacity-70" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1 group-hover:text-[#01DBE0] transition-colors">
                    {vendor.name}
                  </div>
                  <div className="text-xs text-gray-600 font-body mb-2">
                    {vendor.description}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#FE9C05] font-semibold">{vendor.location}</span>
                    <span>•</span>
                    <span className="text-[#FD237A] font-semibold">{vendor.rating}★</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center text-xs font-semibold text-[#01DBE0] group-hover:text-[#FD237A] transition-colors">
                View Products →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterChip({ label, href, active }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all ${
        active 
          ? "bg-gradient-to-r from-[#01DBE0] to-[#FD237A] text-white shadow-lg shadow-[#FD237A]/30" 
          : "border-2 border-[#01DBE0]/30 hover:border-[#01DBE0] hover:bg-[#01DBE0]/10"
      }`}
    >
      {label}
    </Link>
  );
}
