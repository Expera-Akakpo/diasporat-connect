import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useTransaction } from "@/contexts/TransactionContext";

const navItems = [
  { label: "Wallet", href: "/wallet", icon: "/figmaAssets/svg.svg", active: false },
  { label: "Retrait", href: "/retrait", icon: "/figmaAssets/svg-2.svg", active: true },
  { label: "Historique", href: "/historique", icon: "/figmaAssets/svg-3.svg", active: false },
  { label: "Expéditeur", href: "/expediteur", icon: "/figmaAssets/svg-1.svg", active: false },
] as const;

const bottomNavItems = [
  { label: "Wallet", href: "/wallet", icon: "/figmaAssets/svg.svg", active: false },
  { label: "Retrait", href: "/retrait", icon: "/figmaAssets/svg-2.svg", active: true },
  { label: "Historique", href: "/historique", icon: "/figmaAssets/svg-3.svg", active: false },
  { label: "Expéditeur", href: "/expediteur", icon: "/figmaAssets/svg-1.svg", active: false },
] as const;

export const RetraitMobileSidebarSection = (): JSX.Element => {
  const { walletBalance } = useTransaction();
  return (
    <section className="relative w-full overflow-hidden border border-[#0000001a]">
      <div className="flex w-full justify-end bg-black px-2 py-0 sm:px-4">
        <div className="flex w-full max-w-[358px] justify-center pb-1.5">
          <article className="flex min-h-[814px] w-full flex-col overflow-hidden rounded-[36px] border border-solid border-[#2a2a2a] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(44,34,24,1)_0%,rgba(17,17,16,1)_100%)] shadow-[0px_32px_80px_#000000cc]">
            <header className="flex h-11 items-end justify-between bg-[#0d0d0d] px-5 pb-2">
              <div className="w-fit [font-family:'DM_Sans',Helvetica] text-[13px] font-semibold text-pampas">9:41</div>
              <img className="shrink-0" alt="Container" src="/figmaAssets/container-1.svg" />
            </header>
            <div className="flex h-14 items-center justify-between border-b border-[#1f1f1f] bg-[#0d0d0d] pl-[18px] pr-[18.01px]">
              <img className="h-[34px] w-[34px] shrink-0" alt="Logo" src="/figmaAssets/link.svg" />
              <h2 className="[font-family:'DM_Sans',Helvetica] text-base font-medium text-pampas">Retrait</h2>
              <div className="w-16" />
            </div>
            <main className="flex-1 overflow-hidden">
              <div className="flex h-full flex-col gap-3 overflow-y-auto p-4">
                <Card className="rounded-2xl border border-solid border-[#6ec4a726] bg-aztec shadow-none">
                  <CardContent className="flex flex-col gap-[3px] px-4 py-4">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">Solde disponible</p>
                    <p className="[font-family:'DM_Mono',Helvetica] text-[26px] font-medium text-tradewind">{walletBalance.toLocaleString("fr-FR")} <span className="text-[14px] text-elm">XOF</span></p>
                    <Badge className="w-fit rounded border border-[#fbbf2440] bg-[#1f1900] px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.50px] text-[#c4a35a] hover:bg-[#1f1900]">
                      À retirer
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                  <CardContent className="flex flex-col gap-3 px-4 py-4">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Montant</p>
                    <div className="flex items-center gap-2 rounded-xl border border-[#2e2e2e] bg-[#212121] px-3 py-2.5">
                      <span className="[font-family:'DM_Mono',Helvetica] text-[10px] text-flint">XOF</span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-[20px] font-medium text-pampas">131 284</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                  <CardContent className="flex flex-col gap-3 px-4 py-4">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Méthode</p>
                    <div className="flex items-center gap-3 rounded-xl border border-[#6ec4a766] bg-aztec px-3 py-2.5">
                      <span className="text-xl">📱</span>
                      <div className="flex flex-col">
                        <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-tradewind">MTN MoMo</span>
                        <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">Mobile Money · Instantané</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                  <CardContent className="flex flex-col gap-2 px-4 py-4">
                    <div className="flex justify-between">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[12px] text-flint">Montant</span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-[12px] font-medium text-pampas">131 284 XOF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[12px] text-flint">Frais</span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-[12px] font-medium text-tradewind">0 XOF</span>
                    </div>
                  </CardContent>
                </Card>

                <Button className="h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                  <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">Confirmer</span>
                </Button>
              </div>
            </main>
            <footer className="flex h-16 items-center justify-between border-t border-[#1f1f1f] bg-[#0d0d0d] px-4 pb-1.5 pt-0">
              {bottomNavItems.map((item) => (
                <Link key={item.label} href={item.href} className="inline-flex min-w-0 flex-col items-center gap-[3px] rounded-xl px-3 py-1.5">
                  <img className="h-5 w-5 shrink-0" alt={item.label} src={item.icon} />
                  <span className={`[font-family:'DM_Sans',Helvetica] text-[10px] leading-[normal] font-medium ${item.active ? "text-tradewind" : "text-masala"}`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};
