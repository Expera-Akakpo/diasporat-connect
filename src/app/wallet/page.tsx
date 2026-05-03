"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { WalletHomeSection } from "@/components/sections/WalletHomeSection";
import { WalletMobileSidebarSection } from "@/components/sections/WalletMobileSidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function WalletPage() {
  const isMobile = useIsMobile();

  return (
    <ProtectedRoute>
      {isMobile ? (
        <WalletMobileSidebarSection />
      ) : (
        <WalletHomeSection />
      )}
    </ProtectedRoute>
  );
}
