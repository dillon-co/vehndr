"use client";

// Placeholder auth service. Replace with real API calls.

let currentUser = null;

export async function getCurrentUser() {
  return currentUser;
}

export async function login({ email }) {
  // Fake login: any email logs in as a vendor
  currentUser = {
    id: "vendor_demo_1",
    role: "vendor",
    name: "Demo Vendor",
    email,
  };
  return currentUser;
}

export async function logout() {
  currentUser = null;
}









