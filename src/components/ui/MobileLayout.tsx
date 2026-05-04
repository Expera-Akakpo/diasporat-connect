import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileLayoutProps {
  children: React.ReactNode;
  title: string;
  badgeLabel?: string;
  headerAction?: React.ReactNode;
  role: "EXPÉDITEUR" | "DESTINAIRE";
}

const bottomNavItems = [
  { label: "Wallet", href: "/wallet", icon: "/figmaAssets/svg.svg", roles: ["DESTINAIRE"] },
  { label: "Envoyer", href: "/expediteur", icon: "/figmaAssets/svg-4.svg", roles: ["EXPÉDITEUR"] },
  { label: "Retrait", href: "/retrait", icon: "/figmaAssets/svg-2.svg", roles: ["DESTINAIRE"] },
  { label: "Historique", href: "/expediteur/historique", icon: "/figmaAssets/svg-3.svg", roles: ["EXPÉDITEUR", "DESTINAIRE"] },
];

export const MobileLayout = ({ children, title, badgeLabel, headerAction, role }: MobileLayoutProps) => {
  const pathname = usePathname();

  const filteredNavItems = bottomNavItems.filter(item => item.roles.includes(role));

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      {/* Container Frame simulating a mobile device */}
      <div className="mx-auto flex w-full max-w-[450px] flex-1 flex-col overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,rgba(24,20,10,1)_0%,rgba(17,17,16,1)_100%)] sm:my-4 sm:rounded-[40px] sm:border sm:border-[#2a2a2a] sm:shadow-[0px_32px_80px_#000000cc]">
        
        {/* Simplified Header - No hardcoded status bar */}
        <header className="flex h-16 items-center justify-between border-b border-[#1f1f1f] bg-[#0d0d0d] px-5">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img className="h-8 w-8" alt="Logo" src="/figmaAssets/link.svg" />
            </Link>
            <div className="flex flex-col">
              <h1 className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                {title}
              </h1>
              {role && (
                <Badge className={`w-fit h-4 px-1.5 py-0 text-[8px] font-bold rounded-full border ${
                  role === "EXPÉDITEUR" 
                    ? "border-[#fbbf2440] bg-[#1f1900] text-[#c4a35a]" 
                    : "border-[#6ec4a74c] bg-aztec text-tradewind"
                }`}>
                  {role}
                </Badge>
              )}
            </div>
          </div>
          {headerAction}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-20">
          {children}
        </main>

        {/* Bottom Navigation */}
        <footer className="fixed bottom-0 left-1/2 w-full max-w-[450px] -translate-x-1/2 border-t border-[#1f1f1f] bg-[#0d0d0d] px-4 pb-4 pt-2 sm:bottom-4 sm:rounded-b-[40px]">
          <nav className="flex items-center justify-around">
            {filteredNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-1 px-3 py-1"
                >
                  <img 
                    className={`h-5 w-5 ${isActive ? "opacity-100" : "opacity-40"}`} 
                    alt={item.label} 
                    src={item.icon} 
                  />
                  <span className={`[font-family:'DM_Sans',Helvetica] text-[10px] font-medium ${isActive ? "text-tradewind" : "text-flint"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </footer>
      </div>
    </div>
  );
};
