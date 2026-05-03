"use client";

import { WalletHomeSection } from "@/components/sections/WalletHomeSection";
import { WalletMobileSidebarSection } from "@/components/sections/WalletMobileSidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function WalletPage() {
  return (
    <ProtectedRoute>
      <div className="grid min-w-[1814px] grid-cols-[77fr_19fr]">
        <WalletHomeSection />
        <WalletMobileSidebarSection />
      </div>
    </ProtectedRoute>
  );
}
