"use client";

import { api } from "./api";

export async function getCurrentUser() {
  try {
    return await api("/api/auth/current_user");
  } catch (err) {
    if (err?.status === 401) return null;
    throw err;
  }
}

export async function login({ email, password }) {
  const result = await api("/api/auth/login", {
    method: "POST",
    body: { email, password },
  });
  if (typeof window !== "undefined" && result?.token) {
    window.localStorage.setItem("vehndr_token", result.token);
  }
  return result?.user || result;
}

export async function logout() {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } finally {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("vehndr_token");
    }
  }
}









