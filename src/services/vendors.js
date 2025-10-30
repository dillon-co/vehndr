// Placeholder vendors service. Replace with real API calls.

const VENDORS = [
  {
    id: "vendor_demo_1",
    name: "Demo Vendor",
    description: "Handcrafted goods and event essentials.",
    heroImage: "/window.svg",
    location: "Austin, TX",
    rating: 4.8,
    categories: ["merch", "apparel", "accessories"],
  },
  {
    id: "vendor_food_1",
    name: "Fiesta Tacos",
    description: "Street tacos and bowls.",
    heroImage: "/globe.svg",
    location: "San Antonio, TX",
    rating: 4.7,
    categories: ["food", "mexican"],
  },
  {
    id: "vendor_drink_1",
    name: "Brew & Chill",
    description: "Cold brew and lemonades.",
    heroImage: "/vercel.svg",
    location: "Denver, CO",
    rating: 4.6,
    categories: ["drinks", "coffee", "beverages"],
  },
  {
    id: "vendor_arts_1",
    name: "Crafted Prints",
    description: "Art prints and posters.",
    heroImage: "/file.svg",
    location: "Portland, OR",
    rating: 4.9,
    categories: ["arts", "prints", "merch"],
  },
  {
    id: "vendor_service_1",
    name: "Glow & Relax Spa",
    description: "Event massage and makeup services.",
    heroImage: "/window.svg",
    location: "Los Angeles, CA",
    rating: 4.9,
    categories: ["services", "wellness", "beauty"],
  },
];

const PRODUCTS = [
  {
    id: "prod_demo_1",
    vendorId: "vendor_demo_1",
    name: "T-Shirt",
    description: "Soft cotton event tee.",
    price: 2500, // cents
    image: "/file.svg",
    options: [
      { id: "size", name: "Size", type: "select", values: ["S", "M", "L", "XL"] },
      { id: "color", name: "Color", type: "select", values: ["Black", "White"] },
    ],
  },
  {
    id: "prod_demo_2",
    vendorId: "vendor_demo_1",
    name: "Sticker Pack",
    description: "5 premium stickers.",
    price: 800,
    image: "/globe.svg",
    options: [
      { id: "finish", name: "Finish", type: "select", values: ["Matte", "Glossy"] },
    ],
  },
  {
    id: "prod_demo_3",
    vendorId: "vendor_demo_1",
    name: "Water Bottle",
    description: "Insulated 20oz bottle.",
    price: 3200,
    image: "/vercel.svg",
    options: [
      { id: "color", name: "Color", type: "select", values: ["Silver", "Black"] },
    ],
  },
  // Fiesta Tacos
  {
    id: "prod_taco_1",
    vendorId: "vendor_food_1",
    name: "Al Pastor Taco",
    description: "Marinated pork, pineapple, cilantro, onion.",
    price: 400,
    image: "/file.svg",
    options: [
      { id: "salsa", name: "Salsa", type: "select", values: ["Mild", "Medium", "Hot"] },
      { id: "extras", name: "Extras", type: "select", values: ["Cheese", "Guac", "None"] },
    ],
  },
  {
    id: "prod_bowl_1",
    vendorId: "vendor_food_1",
    name: "Chicken Bowl",
    description: "Rice, beans, chicken, toppings.",
    price: 1200,
    image: "/window.svg",
    options: [
      { id: "protein", name: "Protein", type: "select", values: ["Chicken", "Veggie"] },
    ],
  },
  // Brew & Chill
  {
    id: "prod_coldbrew_1",
    vendorId: "vendor_drink_1",
    name: "Cold Brew",
    description: "Smooth, strong cold brew.",
    price: 600,
    image: "/globe.svg",
    options: [
      { id: "size", name: "Size", type: "select", values: ["12oz", "16oz"] },
      { id: "milk", name: "Milk", type: "select", values: ["None", "Oat", "Almond"] },
    ],
  },
  {
    id: "prod_lemonade_1",
    vendorId: "vendor_drink_1",
    name: "Strawberry Lemonade",
    description: "Fresh squeezed, strawberry puree.",
    price: 500,
    image: "/vercel.svg",
    options: [
      { id: "ice", name: "Ice", type: "select", values: ["Regular", "Light"] },
    ],
  },
  // Crafted Prints
  {
    id: "prod_print_1",
    vendorId: "vendor_arts_1",
    name: "Event Poster A3",
    description: "High quality matte print.",
    price: 2000,
    image: "/file.svg",
    options: [
      { id: "finish", name: "Finish", type: "select", values: ["Matte", "Glossy"] },
    ],
  },
  {
    id: "prod_print_2",
    vendorId: "vendor_arts_1",
    name: "Sticker Sheet",
    description: "Full sheet die-cut stickers.",
    price: 1200,
    image: "/window.svg",
    options: [],
  },
  // Glow & Relax Spa Services
  {
    id: "service_massage_1",
    vendorId: "vendor_service_1",
    name: "30-Min Chair Massage",
    description: "Relaxing chair massage for event attendees.",
    price: 5000,
    image: "/globe.svg",
    isService: true,
    duration: 30, // minutes
    availableTimeSlots: [
      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
      "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
    ],
    options: [
      { id: "pressure", name: "Pressure", type: "select", values: ["Light", "Medium", "Firm"] },
      { id: "focus", name: "Focus Area", type: "select", values: ["Back & Shoulders", "Neck & Head", "Full Upper Body"] },
    ],
  },
  {
    id: "service_makeup_1",
    vendorId: "vendor_service_1",
    name: "Express Makeup Application",
    description: "Professional makeup for your event look.",
    price: 7500,
    image: "/file.svg",
    isService: true,
    duration: 45, // minutes
    availableTimeSlots: [
      "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
    ],
    options: [
      { id: "style", name: "Style", type: "select", values: ["Natural", "Glamour", "Festival"] },
      { id: "lashes", name: "False Lashes", type: "select", values: ["Yes", "No"] },
    ],
  },
  {
    id: "service_facial_1",
    vendorId: "vendor_service_1",
    name: "Mini Facial Treatment",
    description: "Quick refresh facial with glow finish.",
    price: 4000,
    image: "/vercel.svg",
    isService: true,
    duration: 20, // minutes
    availableTimeSlots: [
      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
      "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
    ],
    options: [
      { id: "treatment", name: "Treatment Type", type: "select", values: ["Hydrating", "Brightening", "Calming"] },
    ],
  },
];

export async function getVendorProfile(vendorId) {
  return VENDORS.find((v) => v.id === vendorId) ?? null;
}

export async function getVendorProducts(vendorId) {
  return PRODUCTS.filter((p) => p.vendorId === vendorId);
}

export async function listVendors() {
  return VENDORS;
}


