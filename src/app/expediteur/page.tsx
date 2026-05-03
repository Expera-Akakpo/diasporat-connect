"use client";

import { ExpéditeurSection } from "@/components/sections/ExpéditeurSection";
import { ExpéditeurMobileSidebarSection } from "@/components/sections/ExpéditeurMobileSidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function ExpediteurPage() {
  return (
    <ProtectedRoute>
      <div className="grid min-w-[1814px] grid-cols-[77fr_19fr]">
        <ExpéditeurSection />
        <ExpéditeurMobileSidebarSection />
      </div>
    </ProtectedRoute>
  );
}
