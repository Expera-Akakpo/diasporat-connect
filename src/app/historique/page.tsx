"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { TransferSummarySidebarSection } from "@/components/sections/TransferSummarySidebarSection";
import { ReceivedTransfersDashboardSection } from "@/components/sections/ReceivedTransfersDashboardSection";
import { useIsMobile } from "@/hooks/use-mobile";

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
