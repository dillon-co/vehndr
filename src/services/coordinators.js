// Placeholder coordinators service. Replace with real API calls.

const COORDINATORS = [
  {
    id: "coord_demo_1",
    name: "Alex Rivera",
    organization: "Festival Ops Co.",
    bio: "Event coordinator specializing in outdoor festivals.",
    avatar: "/globe.svg",
  },
];

export async function getCoordinatorProfile(coordinatorId) {
  return COORDINATORS.find((c) => c.id === coordinatorId) ?? null;
}









