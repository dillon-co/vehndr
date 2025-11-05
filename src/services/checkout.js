import { api } from "./api";

export async function createCheckoutSession({ lineItems, vendorId }) {
  return api("/api/checkout/sessions", {
    method: "POST",
    body: {
      vendor_id: vendorId,
      items: lineItems,
    },
  });
}









