"use client";

import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const hasItems = totalItems > 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <header className="w-full border-b-2 border-[#01DBE0]/20 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          {/* Logo and Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[#01DBE0]/10 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
            
            <Link 
              href="/" 
              className="font-display text-3xl tracking-wide bg-gradient-to-r from-[#01DBE0] to-[#FD237A] bg-clip-text text-transparent"
              onClick={() => setIsMenuOpen(false)}
            >
              VEHNDR
            </Link>
          </div>

          {/* Cart Button - Always Visible */}
          <Link
            href="/cart"
            className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition-all ${
              hasItems
                ? "bg-gradient-to-r from-[#01DBE0] to-[#FD237A] text-white shadow-lg shadow-[#FD237A]/30"
                : "border-2 border-[#01DBE0]/30 hover:border-[#01DBE0] hover:bg-[#01DBE0]/10"
            }`}
          >
            <span>Cart</span>
            {hasItems && (
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FE9C05] text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile/Desktop Menu */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-[#01DBE0]/20 shadow-lg z-40">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col">
                <Link 
                  href="/events" 
                  className="block text-lg font-semibold hover:text-[#01DBE0] hover:bg-[#01DBE0]/5 transition-colors py-3 px-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find Your Event
                </Link>
                <Link 
                  href="/vendors" 
                  className="block text-lg font-semibold hover:text-[#01DBE0] hover:bg-[#01DBE0]/5 transition-colors py-3 px-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Vendors
                </Link>
                <Link 
                  href="/coordinators/coord_demo_1" 
                  className="block text-lg font-semibold hover:text-[#01DBE0] hover:bg-[#01DBE0]/5 transition-colors py-3 px-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Event Coordinators
                </Link>
                <Link 
                  href="/dashboard" 
                  className="block text-lg font-semibold hover:text-[#01DBE0] hover:bg-[#01DBE0]/5 transition-colors py-3 px-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vendor Dashboard
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          style={{ top: '64px' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}