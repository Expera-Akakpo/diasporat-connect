"use client";

import { RetraitSection } from "@/components/sections/RetraitSection";
import { RetraitMobileSidebarSection } from "@/components/sections/RetraitMobileSidebarSection";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function RetraitPage() {
  return (
    <ProtectedRoute>
      <div className="grid min-w-[1814px] grid-cols-[77fr_19fr]">
        <RetraitSection />
        <RetraitMobileSidebarSection />
      </div>
    </ProtectedRoute>
  );
}
