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
    // Ne rediriger que si le chargement est terminé et qu'il n'y a pas d'utilisateur
    if (!isLoading && !user) {
      // Dans Next.js 13+, le router est généralement prêt, 
      // mais on peut s'assurer de ne pas appeler d'action prématurément
      const timeoutId = setTimeout(() => {
        router.push("/login");
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, user, router]);

  // Si on charge, ou si on n'est pas connecté (en attendant la redirection)
  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)]">
        <div className="flex flex-col items-center gap-4">
          <img 
            className="h-8 w-8 animate-pulse" 
            alt="DiasporaConnect" 
            src="/figmaAssets/background-border-7.svg" 
          />
          <span className="[font-family:'DM_Sans',Helvetica] text-[13px] text-flint">
            Chargement…
          </span>
        </div>
      </div>
    );
  }

  // Vérification optionnelle du rôle
  if (requiredRole && user.role !== requiredRole) {
    router.push(user.role === "expediteur" ? "/expediteur" : "/wallet");
    return null;
  }

  return <>{children}</>;
};
