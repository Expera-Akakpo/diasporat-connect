"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ExpéditeurMobileSidebarSection } from "@/components/sections/ExpéditeurMobileSidebarSection";
// On pourrait créer une version Desktop spécifique si nécessaire, 
// mais pour l'instant on va utiliser une structure similaire à ExpéditeurSection
import { ExpéditeurHistorySection } from "@/components/sections/ExpéditeurHistorySection";

export default function ExpediteurHistoryPage() {
  const isMobile = useIsMobile();

  return (
    <ProtectedRoute requiredRole="expediteur">
      {isMobile ? (
        // La version mobile semble déjà avoir un onglet historique simulé dans ExpéditeurMobileSidebarSection
        // mais on va s'assurer qu'on affiche le bon contenu
        <ExpéditeurMobileSidebarSection />
      ) : (
        <ExpéditeurHistorySection />
      )}
    </ProtectedRoute>
  );
}
