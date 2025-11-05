import { api } from "./api";

export async function listVendors() {
  const res = await api("/api/vendors");
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.vendors)) return res.vendors;
  if (Array.isArray(res?.data)) return res.data;
  return [];
}

export async function getVendorProfile(vendorId) {
  const res = await api(`/api/vendors/${vendorId}`);
  return res?.vendor ?? res?.data ?? res;
}

export async function getVendorProducts(vendorId) {
  const res = await api(`/api/vendors/${vendorId}/products`);
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.products)) return res.products;
  if (Array.isArray(res?.data)) return res.data;
  return [];
}