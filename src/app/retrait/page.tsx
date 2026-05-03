"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { RetraitSection } from "@/components/sections/RetraitSection";
import { RetraitMobileSidebarSection } from "@/components/sections/RetraitMobileSidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function RetraitPage() {
  const isMobile = useIsMobile();

  return (
    <ProtectedRoute>
      {isMobile ? (
        <RetraitMobileSidebarSection />
      ) : (
        <RetraitSection />
      )}
    </ProtectedRoute>
  );
}
