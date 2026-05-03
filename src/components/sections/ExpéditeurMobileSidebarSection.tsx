import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const bottomNavItems = [
  { label: "Envoyer", href: "/expediteur", icon: "/figmaAssets/svg-4.svg", active: true },
  { label: "Historique", href: "/expediteur/historique", icon: "/figmaAssets/svg-3.svg", active: false },
] as const;

export const ExpéditeurMobileSidebarSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden border border-[#0000001a] bg-white">
      <div className="flex w-full justify-end bg-black px-2 py-0 sm:px-4">
        <div className="flex w-full max-w-[358px] justify-center pb-1.5">
          <article className="flex min-h-[814px] w-full flex-col overflow-hidden rounded-[36px] border border-solid border-[#2a2a2a] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(24,20,10,1)_0%,rgba(17,17,16,1)_100%)] shadow-[0px_32px_80px_#000000cc]">
            <header className="flex h-11 items-end justify-between bg-[#0d0d0d] px-5 pb-2">
              <div className="w-fit [font-family:'DM_Sans',Helvetica] text-[13px] font-semibold text-pampas">9:41</div>
              <img className="shrink-0" alt="Container" src="/figmaAssets/container-1.svg" />
            </header>
            <div className="flex h-14 items-center justify-between border-b border-[#1f1f1f] bg-[#0d0d0d] pl-[18px] pr-[18.01px]">
              <img className="h-[34px] w-[34px] shrink-0" alt="Logo" src="/figmaAssets/link.svg" />
              <h2 className="[font-family:'DM_Sans',Helvetica] text-base font-medium text-pampas">Envoi d'argent</h2>
              <Badge className="rounded-full border border-[#fbbf2440] bg-[#1f1900] px-2 py-0.5 [font-family:'DM_Sans',Helvetica] text-[9px] font-bold text-[#c4a35a] hover:bg-[#1f1900]">
                EXP
              </Badge>
            </div>
            <main className="flex-1 overflow-hidden">
              <div className="flex h-full flex-col gap-3 overflow-y-auto p-4">
                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                  <CardContent className="flex flex-col gap-3 px-4 py-4">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Montant à envoyer</p>
                    <div className="flex items-center gap-2 rounded-xl border border-[#2e2e2e] bg-[#212121] px-3 py-2.5">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[16px] text-flint">€</span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-[24px] font-medium text-pampas">200.00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#111] px-3 py-2">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">Reçu</span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-[14px] font-medium text-tradewind">131 000 XOF</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                  <CardContent className="flex flex-col gap-3 px-4 py-4">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Destinataire</p>
                    <div className="flex items-center gap-3 rounded-xl border border-[#6ec4a766] bg-aztec px-3 py-2.5">
                      <img className="h-8 w-8 shrink-0" alt="Amadou" src="/figmaAssets/background-border-6.svg" />
                      <div className="flex flex-col">
                        <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-tradewind">Amadou Mbaye</span>
                        <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">🇸🇳 Sénégal · MTN MoMo</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                  <CardContent className="flex flex-col gap-2 px-4 py-4">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase mb-1">Récap</p>
                    {[
                      { label: "Frais", value: "€0.40 (0.2%)" },
                      { label: "Taux", value: "655 XOF/€" },
                      { label: "Délai", value: "Instantané" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between">
                        <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">{row.label}</span>
                        <span className="[font-family:'DM_Mono',Helvetica] text-[11px] font-medium text-pampas">{row.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button className="h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                  <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">Envoyer maintenant</span>
                </Button>

                <Card className="rounded-2xl border border-solid border-[#6ec4a726] bg-aztec shadow-none">
                  <CardContent className="flex flex-col gap-[3px] px-4 py-3.5">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">Économies réalisées</p>
                    <p className="[font-family:'DM_Mono',Helvetica] text-[22px] font-medium text-tradewind">68 600 XOF</p>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">économisés ce mois</p>
                    <Badge className="w-fit rounded border border-[#6ec4a74c] bg-aztec px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.50px] text-tradewind hover:bg-aztec">
                      ODD 10 : &lt; 3% ✓
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </main>
            <footer className="flex h-16 items-center justify-around border-t border-[#1f1f1f] bg-[#0d0d0d] px-4 pb-1.5 pt-0">
              {bottomNavItems.map((item) => (
                <Link key={item.label} href={item.href} className="inline-flex min-w-0 flex-col items-center gap-[3px] rounded-xl px-6 py-1.5">
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
