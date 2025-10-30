"use client";

import { useEffect, useState } from "react";
import { getCurrentUser, login } from "../services/auth";

export default function AuthGate({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const u = await getCurrentUser();
      setUser(u);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-sm text-black/60">
        Checking auth…
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 max-w-md mx-auto rounded-lg border border-black/[.08] bg-white/60">
        <div className="text-sm mb-3">Log in to access your dashboard.</div>
        <button
          className="inline-flex items-center justify-center rounded-md bg-black text-white px-3 py-2 text-sm hover:opacity-90 w-full"
          onClick={async () => {
            await login({ email: "demo@vehndr.com" });
            const u2 = await getCurrentUser();
            setUser(u2);
          }}
        >
          Continue as Demo Vendor
        </button>
      </div>
    );
  }

  return children;
}


