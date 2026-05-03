"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ExpéditeurSection } from "@/components/sections/ExpéditeurSection";
import { ExpéditeurMobileSidebarSection } from "@/components/sections/ExpéditeurMobileSidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function ExpediteurPage() {
  const isMobile = useIsMobile();

  return (
    <ProtectedRoute>
      {isMobile ? (
        <ExpéditeurMobileSidebarSection />
      ) : (
        <ExpéditeurSection />
      )}
    </ProtectedRoute>
  );
}
