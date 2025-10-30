"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getVendorProfile } from "../../../services/vendors";

export default function VendorProfilePage() {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    (async () => {
      const v = await getVendorProfile(vendorId);
      setVendor(v);
    })();
  }, [vendorId]);

  if (!vendor) {
    return (
      <div className="mx-auto max-w-4xl p-6 text-sm text-black/60">
        Loading vendor…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="flex items-start gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vendor.heroImage}
          alt=""
          className="h-24 w-24 rounded-lg bg-black/[.04] object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">{vendor.name}</h1>
          <p className="text-sm text-black/60">{vendor.description}</p>
          <div className="text-xs mt-2 text-black/50">
            {vendor.location} • {vendor.rating}★
          </div>
        </div>
      </div>
    </div>
  );
}


