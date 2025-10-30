"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [vendorCarts, setVendorCarts] = useState({}); // {vendorId: [{id, name, price, quantity, vendorId, options}]}

  const addItem = (product, quantity = 1, selectedOptions = {}) => {
    setVendorCarts((prev) => {
      const vendorId = product.vendorId;
      const vendorItems = prev[vendorId] || [];
      const keyMatches = (i) => i.id === product.id && JSON.stringify(i.options ?? {}) === JSON.stringify(selectedOptions ?? {});
      const existing = vendorItems.find(keyMatches);
      
      if (existing) {
        return {
          ...prev,
          [vendorId]: vendorItems.map((i) => (keyMatches(i) ? { ...i, quantity: i.quantity + quantity } : i))
        };
      }
      
      return {
        ...prev,
        [vendorId]: [
          ...vendorItems,
          {
            id: product.id,
            vendorId: product.vendorId,
            name: product.name,
            price: product.price,
            quantity,
            options: selectedOptions,
          },
        ],
      };
    });
  };

  const removeItem = (vendorId, productId) => {
    setVendorCarts((prev) => {
      const updated = { ...prev };
      if (updated[vendorId]) {
        updated[vendorId] = updated[vendorId].filter((i) => i.id !== productId);
        if (updated[vendorId].length === 0) {
          delete updated[vendorId];
        }
      }
      return updated;
    });
  };

  const clearVendor = (vendorId) => {
    setVendorCarts((prev) => {
      const updated = { ...prev };
      delete updated[vendorId];
      return updated;
    });
  };

  const clearAll = () => setVendorCarts({});

  const getVendorCart = (vendorId) => vendorCarts[vendorId] || [];
  
  const getVendorTotal = (vendorId) => {
    const items = getVendorCart(vendorId);
    return items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  };

  const allItems = useMemo(
    () => Object.values(vendorCarts).flat(),
    [vendorCarts]
  );

  const totalItems = useMemo(
    () => allItems.reduce((acc, i) => acc + i.quantity, 0),
    [allItems]
  );

  const value = useMemo(
    () => ({ 
      vendorCarts, 
      addItem, 
      removeItem, 
      clearVendor, 
      clearAll, 
      getVendorCart, 
      getVendorTotal,
      allItems,
      totalItems
    }),
    [vendorCarts, allItems, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


