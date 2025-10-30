"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getVendorProfile, getVendorProducts } from "../../../services/vendors";
import ProductCard from "../../../components/ProductCard";

export default function StorefrontPage() {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("recommended");

  useEffect(() => {
    (async () => {
      const v = await getVendorProfile(vendorId);
      const p = await getVendorProducts(vendorId);
      setVendor(v);
      setProducts(p);
    })();
  }, [vendorId]);

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sort) {
      case "price_asc":
        return list.sort((a, b) => a.price - b.price);
      case "price_desc":
        return list.sort((a, b) => b.price - a.price);
      case "name_asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "services_first":
        return list.sort((a, b) => (b.isService === true) - (a.isService === true));
      default:
        return list;
    }
  }, [products, sort]);

  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      {vendor ? (
        <div className="mb-6">
          <div className="text-2xl font-semibold">{vendor.name}</div>
          <div className="text-sm text-black/60">{vendor.description}</div>
        </div>
      ) : (
        <div className="mb-6 text-sm text-black/60">Loading vendor…</div>
      )}

      {/* Sort chips */}
      <div className="mb-4 overflow-x-auto">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Chip label="Recommended" active={sort === "recommended"} onClick={() => setSort("recommended")} />
          <Chip label="Price ↑" active={sort === "price_asc"} onClick={() => setSort("price_asc")} />
          <Chip label="Price ↓" active={sort === "price_desc"} onClick={() => setSort("price_desc")} />
          <Chip label="A–Z" active={sort === "name_asc"} onClick={() => setSort("name_asc")} />
          <Chip label="Services First" active={sort === "services_first"} onClick={() => setSort("services_first")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold transition-all border ${
        active
          ? "bg-gradient-to-r from-[#01DBE0] to-[#FD237A] text-white border-transparent shadow"
          : "border-[#01DBE0]/30 hover:border-[#01DBE0] hover:bg-[#01DBE0]/10"
      }`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}


