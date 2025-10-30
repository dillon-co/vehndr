// Placeholder events service. Replace with real API calls.

const EVENTS = [
  {
    id: "event_coachella_2024",
    name: "Coachella 2024",
    description: "Music and Arts Festival in the desert",
    location: "Indio, CA",
    startDate: "2024-04-12",
    endDate: "2024-04-14",
    image: "/globe.svg",
    category: "Music Festival",
    vendorIds: ["vendor_demo_1", "vendor_food_1", "vendor_drink_1", "vendor_service_1"],
    attendees: 125000,
    status: "upcoming",
  },
  {
    id: "event_sxsw_2024",
    name: "SXSW 2024",
    description: "Film, Interactive Media, and Music Festival",
    location: "Austin, TX",
    startDate: "2024-03-08",
    endDate: "2024-03-16",
    image: "/window.svg",
    category: "Tech & Music",
    vendorIds: ["vendor_demo_1", "vendor_arts_1", "vendor_drink_1"],
    attendees: 75000,
    status: "upcoming",
  },
  {
    id: "event_edc_2024",
    name: "EDC Las Vegas 2024",
    description: "Electric Daisy Carnival - Premier electronic dance music festival",
    location: "Las Vegas, NV",
    startDate: "2024-05-17",
    endDate: "2024-05-19",
    image: "/vercel.svg",
    category: "EDM Festival",
    vendorIds: ["vendor_drink_1", "vendor_service_1", "vendor_demo_1"],
    attendees: 150000,
    status: "upcoming",
  },
  {
    id: "event_acl_2024",
    name: "Austin City Limits 2024",
    description: "Annual music festival in Zilker Park",
    location: "Austin, TX",
    startDate: "2024-10-04",
    endDate: "2024-10-13",
    image: "/file.svg",
    category: "Music Festival",
    vendorIds: ["vendor_food_1", "vendor_drink_1", "vendor_arts_1", "vendor_demo_1"],
    attendees: 90000,
    status: "upcoming",
  },
  {
    id: "event_burning_man_2024",
    name: "Burning Man 2024",
    description: "Art and community in the Black Rock Desert",
    location: "Black Rock City, NV",
    startDate: "2024-08-25",
    endDate: "2024-09-02",
    image: "/window.svg",
    category: "Art Festival",
    vendorIds: ["vendor_arts_1", "vendor_service_1"],
    attendees: 70000,
    status: "upcoming",
  },
  {
    id: "event_bonnaroo_2024",
    name: "Bonnaroo 2024",
    description: "Music and Arts Festival on the Farm",
    location: "Manchester, TN",
    startDate: "2024-06-13",
    endDate: "2024-06-16",
    image: "/globe.svg",
    category: "Music Festival",
    vendorIds: ["vendor_food_1", "vendor_demo_1", "vendor_drink_1", "vendor_service_1", "vendor_arts_1"],
    attendees: 85000,
    status: "upcoming",
  },
];

export async function listEvents() {
  return EVENTS;
}

export async function getEvent(eventId) {
  return EVENTS.find((e) => e.id === eventId) ?? null;
}

export async function getEventsByVendor(vendorId) {
  return EVENTS.filter((e) => e.vendorIds.includes(vendorId));
}

export async function getUpcomingEvents(limit = 6) {
  return EVENTS.filter((e) => e.status === "upcoming").slice(0, limit);
}
