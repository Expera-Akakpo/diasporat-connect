"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ReceivedTransfersDashboardSection } from "@/components/sections/ReceivedTransfersDashboardSection";
import { TransferSummarySidebarSection } from "@/components/sections/TransferSummarySidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function HistoriquePage() {
  const isMobile = useIsMobile();

  return (
    <ProtectedRoute>
      {isMobile ? (
        <TransferSummarySidebarSection />
      ) : (
        <ReceivedTransfersDashboardSection />
      )}
    </ProtectedRoute>
  );
}
