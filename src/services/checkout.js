// Placeholder Stripe checkout creator. Replace with backend call.

export async function createCheckoutSession({ lineItems, vendorId }) {
  // In real app, POST to backend to create Stripe CheckoutSession and return url
  const params = new URLSearchParams();
  params.set("vendorId", vendorId ?? "vendor_demo_1");
  params.set("items", JSON.stringify(lineItems));
  // Fake URL that would be returned from backend
  return {
    url: `/checkout?${params.toString()}`,
  };
}









