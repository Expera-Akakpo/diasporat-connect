"use client";

import { AccueilHomeSection } from "@/components/sections/AccueilHomeSection";
import { AccueilMobileSidebarSection } from "@/components/sections/AccueilMobileSidebarSection";

export default function HomePage() {
  return (
    <div className="grid min-w-[1814px] grid-cols-[77fr_19fr]">
      <AccueilHomeSection />
      <AccueilMobileSidebarSection />
    </div>
  );
}
