import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowDownLeft, ArrowUpRight, History, Wallet, Filter } from "lucide-react";

const summaryCards = [
  {
    title: "Reçu ce mois",
    value: "445 143",
    footer: "XOF",
    valueClassName: "text-tradewind",
  },
  {
    title: "En attente",
    value: "131 284",
    footer: "À retirer",
    valueClassName: "text-[#c4a35a]",
  },
] as const;

const filters = ["Tout", "Reçu", "Retiré", "En attente"] as const;

const transfers = [
  {
    avatarSrc: "/figmaAssets/background-border-5.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "Aujourd'hui · 09:40 · €200",
    amount: "+131 284",
    amountClassName: "text-tradewind",
    status: "Reçu",
    statusClassName: "bg-aztec text-tradewind border-[#6ec4a74c]",
  },
  {
    avatarSrc: "/figmaAssets/background-border.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "8 Avr · 08:12 · €250",
    amount: "+163 989",
    amountClassName: "text-pampas",
    status: "Retiré",
    statusClassName: "bg-racing-green text-shamrock border-[#4ade8040]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-3.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "2 Avr · 11:46 · €150",
    amount: "+98 394",
    amountClassName: "text-bronco",
    status: "Retiré",
    statusClassName: "bg-racing-green text-shamrock border-[#4ade8040]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-8.svg",
    name: "Aminata Diallo 🇨🇮",
    meta: "28 Mar · 16:20 · €80",
    amount: "+52 476",
    amountClassName: "text-flint",
    status: "Attente",
    statusClassName: "bg-[#1f1900] text-lightning-yellow border-[#fbbf2440]",
  },
] as const;

export const TransferSummarySidebarSection = (): JSX.Element => {
  const isMobile = useIsMobile();

  const content = (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl [font-family:'DM_Sans',Helvetica] font-medium text-pampas">
          Historique des transferts
        </h1>
        <p className="text-xs text-flint">
          Suivi complet de vos réceptions et retraits Mobile Money.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {summaryCards.map((card, i) => (
          <Card key={i} className="rounded-2xl border border-[#1f1f1f] bg-[#212121] shadow-none">
            <CardContent className="flex flex-col gap-1 p-4">
              <span className="text-[10px] font-bold tracking-[0.80px] text-flint uppercase">{card.title}</span>
              <div className="flex items-baseline gap-1">
                <span className={`[font-family:'DM_Mono',Helvetica] text-lg font-medium ${card.valueClassName}`}>{card.value}</span>
                <span className="text-[9px] text-flint font-mono">XOF</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
        {filters.map((f, i) => (
          <Button 
            key={f} 
            variant="outline" 
            className={`h-7 rounded-full px-4 text-[10px] border-[#2e2e2e] ${i === 0 ? "bg-aztec text-tradewind border-tradewind/20" : "bg-transparent text-flint"}`}
          >
            {f}
          </Button>
        ))}
      </div>

      <Card className="overflow-hidden rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
        <CardContent className="p-0">
          <ul className="flex flex-col divide-y divide-[#1f1f1f]">
            {transfers.map((t, i) => (
              <li key={i} className="flex items-center gap-3 px-3 py-3">
                <img className="h-8 w-8 shrink-0" alt={t.name} src={t.avatarSrc} />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[12px] font-medium text-pampas truncate">{t.name}</span>
                  <span className="text-[10px] text-flint">{t.meta}</span>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className={`[font-family:'DM_Mono',Helvetica] text-[12px] font-medium ${t.amountClassName}`}>{t.amount}</span>
                  <Badge className={`rounded border px-1.5 py-0 text-[8px] font-bold ${t.statusClassName}`}>
                    {t.status}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
        <CardContent className="flex flex-col gap-1 p-4">
          <p className="text-[10px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">Impact DiasporaConnect</p>
          <p className="[font-family:'DM_Mono',Helvetica] text-2xl font-medium text-tradewind">68 600 XOF</p>
          <p className="text-[10px] text-elm">Économisés vs banques traditionnelles</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <MobileLayout title="Historique" role="DESTINAIRE">
      {content}
    </MobileLayout>
  );
};
