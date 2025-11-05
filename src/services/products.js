import { api } from "./api";

export async function listProductsForVendor(vendorId) {
  return api(`/api/vendors/${vendorId}/products`);
}









