"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProductCategory, EnquiryContextType } from "@/types";

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const DEFAULT_PRODUCT_VARIANT = "Smart Review Stand · Cloud White";
export const DEFAULT_PRODUCT_CATEGORY: ProductCategory = "Review Solutions";

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [selectedVariant, setSelectedVariantState] = useState<string>(
    DEFAULT_PRODUCT_VARIANT
  );
  const [selectedCategory, setSelectedCategoryState] = useState<ProductCategory>(
    DEFAULT_PRODUCT_CATEGORY
  );

  const setSelectedVariant = (variant: string, category?: ProductCategory) => {
    setSelectedVariantState(variant);
    if (category) {
      setSelectedCategoryState(category);
    }
    if (typeof window !== "undefined") {
      const enquirySection = document.getElementById("enquiry");
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const setSelectedCategory = (category: ProductCategory) => {
    setSelectedCategoryState(category);
  };

  return (
    <EnquiryContext.Provider
      value={{
        selectedVariant,
        setSelectedVariant,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryContextType {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
