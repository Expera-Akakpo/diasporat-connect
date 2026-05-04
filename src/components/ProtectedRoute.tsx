"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "expediteur" | "destinataire";
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // 1. Redirection si non connecté
    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    // 2. Redirection si le rôle ne correspond pas
    // Déplacé ici pour éviter l'erreur "Cannot update a component while rendering a different component"
    if (!isLoading && user && requiredRole && user.role !== requiredRole) {
      const destination = user.role === "expediteur" ? "/expediteur" : "/wallet";
      router.push(destination);
    }
  }, [isLoading, user, router, requiredRole]);

  // État de chargement ou attente de redirection
  if (isLoading || !user || (requiredRole && user.role !== requiredRole)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)]">
        <div className="flex flex-col items-center gap-4">
          <img 
            className="h-8 w-8 animate-pulse" 
            alt="DiasporaConnect" 
            src="/figmaAssets/background-border-7.svg" 
          />
          <span className="[font-family:'DM_Sans',Helvetica] text-[13px] text-flint">
            Sécurisation de la session…
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};