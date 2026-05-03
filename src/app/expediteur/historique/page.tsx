"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ExpéditeurHistorySection } from "@/components/sections/ExpéditeurHistorySection";

export default function ExpediteurHistoryPage() {
  return (
    <ProtectedRoute requiredRole="expediteur">
      <ExpéditeurHistorySection />
    </ProtectedRoute>
  );
}
