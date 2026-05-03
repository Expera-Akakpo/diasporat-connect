import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserMenu = (): JSX.Element => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  if (!user) {
    return (
      <Button
        asChild
        className="h-auto rounded-full bg-tradewind px-4 py-[7px] text-[#0d0d0d] hover:bg-tradewind"
      >
        <Link href="/login" className="[font-family:'DM_Sans',Helvetica] text-xs font-medium">
          Se connecter
        </Link>
      </Button>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          data-testid="button-user-menu"
          className="flex items-center gap-2.5 rounded-full border border-[#6ec4a74c] bg-aztec px-3 py-1.5 transition-colors hover:bg-[#0f2820]"
        >
          <div className="flex h-5 w-5 items-center justify-center">
            <span className="[font-family:'DM_Sans',Helvetica] text-[9px] font-bold text-tradewind">
              {initials}
            </span>
          </div>
          <span className="[font-family:'DM_Sans',Helvetica] text-[12px] font-medium text-pampas">
            {user.name.split(" ")[0]}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52 rounded-xl border border-[#1f1f1f] bg-[#111] shadow-none"
      >
        <DropdownMenuLabel className="flex flex-col gap-0.5 px-3 py-3">
          <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-pampas">
            {user.name}
          </span>
          <span className="[font-family:'DM_Mono',Helvetica] text-[10px] font-normal text-flint">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#1f1f1f]" />
        <DropdownMenuItem asChild className="cursor-pointer rounded-lg px-3 py-2 hover:bg-[#1a1a1a] focus:bg-[#1a1a1a]">
          <Link
            href={user.role === "expediteur" ? "/expediteur" : "/wallet"}
            className="[font-family:'DM_Sans',Helvetica] text-[12px] text-elm"
          >
            Mon interface
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-[#1f1f1f]" />
        <DropdownMenuItem
          data-testid="button-logout"
          onClick={handleLogout}
          className="cursor-pointer rounded-lg px-3 py-2 text-red-400 hover:bg-red-950/30 hover:text-red-400 focus:bg-red-950/30 focus:text-red-400"
        >
          <LogOut className="mr-2 h-3.5 w-3.5" />
          <span className="[font-family:'DM_Sans',Helvetica] text-[12px]">Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
