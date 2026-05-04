import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { ArrowDownLeft, ArrowUpRight, History, Wallet } from "lucide-react";
import { useTransaction } from "@/contexts/TransactionContext";

const summaryCards = [
  {
    title: "Solde disponible",
    value: "131 284",
    footer: "≈ €200.00 · Taux : 655 XOF/€",
    valueClassName: "text-tradewind",
  },
  {
    title: "Reçu ce mois",
    value: "445 143",
    footer: "4 transferts",
    valueClassName: "text-pampas",
  },
  {
    title: "Impact total",
    value: "68 600",
    footer: "XOF économisés vs banques",
    valueClassName: "text-tradewind",
  }
] as const;

const recentTransfers = [
  {
    avatarSrc: "/figmaAssets/background-border-6.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "Aujourd'hui · 09:40 · €200",
    amount: "+131 284",
    amountClassName: "text-tradewind",
    status: "Reçu",
    statusClassName: "bg-aztec text-tradewind border-[#6ec4a74c]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-1.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "8 Avr · 08:12 · €250",
    amount: "+163 989",
    amountClassName: "text-pampas",
    status: "Retiré",
    statusClassName: "bg-racing-green text-shamrock border-[#4ade8040]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-9.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "2 Avr · 11:46 · €150",
    amount: "+98 394",
    amountClassName: "text-bronco",
    status: "Retiré",
    statusClassName: "bg-racing-green text-shamrock border-[#4ade8040]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-4.svg",
    name: "Aminata Diallo 🇨🇮",
    meta: "28 Mar · 16:20 · €80",
    amount: "+52 476",
    amountClassName: "text-flint",
    status: "En attente",
    statusClassName: "bg-[#1f1900] text-[#c4a35a] border-[#fbbf2440]",
  },
];

export const WalletMobileSidebarSection = (): JSX.Element => {
  const { walletBalance, monthlyReceived, transfers } = useTransaction();

  const summaryCards = [
    {
      title: "Solde disponible",
      value: walletBalance.toLocaleString("fr-FR"),
      footer: "XOF",
      valueClassName: "text-tradewind",
      footerType: "text",
    },
    {
      title: "Reçu ce mois",
      value: monthlyReceived.toLocaleString("fr-FR"),
      footer: `${transfers.length} transferts`,
      valueClassName: "text-pampas",
      footerType: "text",
    },
  ] as const;

  const dynamicTransfers = transfers.slice(0, 3).map((transfer) => ({
    avatarSrc: "/figmaAssets/background-border-5.svg", // Default avatar
    name: transfer.recipient,
    meta: `${transfer.date} · €${transfer.amountEUR}`,
    amount: transfer.type === "send" ? `+${transfer.amountXOF.toLocaleString("fr-FR")}` : `-${transfer.amountXOF.toLocaleString("fr-FR")}`,
    amountClassName: transfer.type === "send" ? "text-tradewind" : "text-bronco",
    status: transfer.status,
    statusClassName: transfer.status === "Terminé" ? "bg-aztec text-tradewind border-[#6ec4a74c]" : "bg-racing-green text-shamrock border-[#4ade8040]",
  }));
  return (
    <MobileLayout 
      title="Mon Wallet" 
      role="DESTINAIRE"
      headerAction={
        <Button asChild variant="outline" className="h-7 rounded-full border-[#2e2e2e] bg-transparent px-3 text-[10px] text-tradewind">
          <Link href="/retrait">Retirer</Link>
        </Button>
      }
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] text-flint">Amadou Mbaye · amadou@diaspora.io</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {summaryCards.map((card, i) => (
            <Card key={i} className={`rounded-2xl border ${i === 0 ? "border-[#6ec4a726] bg-aztec" : "border-[#1f1f1f] bg-[#212121]"} shadow-none`}>
              <CardContent className="flex flex-col gap-1 px-4 py-4">
                <span className="text-[10px] font-bold tracking-[0.80px] text-flint uppercase">{card.title}</span>
                <div className="flex items-baseline gap-2">
                  <span className={`[font-family:'DM_Mono',Helvetica] text-2xl font-medium ${card.valueClassName}`}>{card.value}</span>
                  <span className="text-[10px] text-flint font-mono">XOF</span>
                </div>
                <span className="text-[10px] text-flint">{card.footer}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-2">
          <Button asChild className="h-10 flex-1 rounded-xl bg-tradewind text-[#0d0d0d] text-xs">
            <Link href="/retrait">Retirer les fonds</Link>
          </Button>
          <Button asChild variant="outline" className="h-10 flex-1 rounded-xl border-[#2e2e2e] text-pampas text-xs bg-transparent">
            <Link href="/historique">Historique</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Transferts récents</h2>
            <Link href="/historique" className="text-[10px] text-tradewind underline">Voir tout</Link>
          </div>
          <Card className="overflow-hidden rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
            <CardContent className="p-0">
              <ul className="flex flex-col divide-y divide-[#1f1f1f]">
                {recentTransfers.map((t, i) => (
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
        </div>
      </div>
    </MobileLayout>
  );
};
