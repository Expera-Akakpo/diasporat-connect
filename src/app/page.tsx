"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { AccueilHomeSection } from "@/components/sections/AccueilHomeSection";
import { AccueilMobileSidebarSection } from "@/components/sections/AccueilMobileSidebarSection";

export default function HomePage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <AccueilMobileSidebarSection />;
  }

  return <AccueilHomeSection />;
}
