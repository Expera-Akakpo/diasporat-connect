"use client";

import { ReceivedTransfersDashboardSection } from "@/components/sections/ReceivedTransfersDashboardSection";
import { TransferSummarySidebarSection } from "@/components/sections/TransferSummarySidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function HistoriquePage() {
  return (
    <ProtectedRoute>
      <div className="grid min-w-[1814px] grid-cols-[77fr_19fr]">
        <ReceivedTransfersDashboardSection />
        <TransferSummarySidebarSection />
      </div>
    </ProtectedRoute>
  );
}
