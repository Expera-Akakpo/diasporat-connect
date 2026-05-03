import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole?: "expediteur" | "destinataire";
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps): JSX.Element => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)]">
        <div className="flex flex-col items-center gap-4">
          <img className="h-8 w-8 animate-pulse" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
          <span className="[font-family:'DM_Sans',Helvetica] text-[13px] text-flint">Chargement…</span>
        </div>
      </div>
    );
  }

  if (!user) {
    redirect("/login");
  }

  return children;
};
