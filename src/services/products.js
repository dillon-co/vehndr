// Thin wrapper over vendors products for future separation
import { getVendorProducts } from "./vendors";

export async function listProductsForVendor(vendorId) {
  return getVendorProducts(vendorId);
}









