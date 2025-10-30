"use client";

import AuthGate from "../../components/AuthGate";
import { getCurrentUser } from "../../services/auth";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  return (
    <AuthGate>
      <DashboardInner />
    </AuthGate>
  );
}

function DashboardInner() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => setUser(await getCurrentUser()))();
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-6 w-full">
      <h1 className="text-2xl font-semibold mb-4">Vendor Dashboard</h1>
      {user && (
        <div className="text-sm text-black/60 mb-4">
          Signed in as {user.name} ({user.email})
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-black/[.08] p-4">
          <div className="font-medium mb-2">Orders</div>
          <div className="text-sm text-black/60">No orders yet.</div>
        </div>
        <div className="rounded-lg border border-black/[.08] p-4">
          <div className="font-medium mb-2">Products</div>
          <div className="text-sm text-black/60">Manage your products via backend soon.</div>
        </div>
      </div>
    </div>
  );
}


