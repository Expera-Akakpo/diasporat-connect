import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";

const navItems = [
  { label: "Envoyer", href: "/expediteur", active: false },
  { label: "Historique", href: "/expediteur/historique", active: true },
];

const transfers = [
  {
    recipient: "Amadou Mbaye",
    country: "🇸🇳 Sénégal",
    date: "Aujourd'hui, 14:20",
    amount: "€200.00",
    received: "131 000 XOF",
    fees: "€0.40",
    status: "Terminé",
    statusClass: "border-[#6ec4a74c] bg-aztec text-tradewind",
  },
  {
    recipient: "Fatou Diallo",
    country: "🇨🇮 Côte d'Ivoire",
    date: "Hier, 09:15",
    amount: "€100.00",
    received: "65 500 XOF",
    fees: "€0.20",
    status: "Terminé",
    statusClass: "border-[#6ec4a74c] bg-aztec text-tradewind",
  },
  {
    recipient: "Amadou Mbaye",
    country: "🇸🇳 Sénégal",
    date: "3 Mai, 18:40",
    amount: "€500.00",
    received: "327 500 XOF",
    fees: "€1.00",
    status: "Terminé",
    statusClass: "border-[#6ec4a74c] bg-aztec text-tradewind",
  },
];

export const ExpéditeurHistorySection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden rounded-sm border border-[#0000001a] bg-white">
      <div className="min-h-[953px] w-full border border-black bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)]">
        <header className="sticky top-0 z-10 flex min-h-16 w-full items-center justify-center border-b border-[#1f1f1f] bg-cod-gray-88 backdrop-blur [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
          <div className="flex w-full max-w-[1160px] items-center justify-between gap-6 px-6 py-3 xl:px-10">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <Link href="/expediteur" className="inline-flex items-center gap-2.5">
                <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
                <span className="[font-family:'DM_Sans',Helvetica] text-[15px] font-semibold tracking-[-0.05px] leading-[22.5px] text-pampas">
                  DiasporaConnect
                </span>
              </Link>
              <Badge className="rounded-full border border-[#fbbf2440] bg-[#1f1900] px-[7px] py-0.5 [font-family:'DM_Sans',Helvetica] text-[9px] font-bold tracking-[0.90px] text-[#c4a35a] hover:bg-[#1f1900]">
                EXPÉDITEUR
              </Badge>
            </div>
            <nav className="hidden items-center gap-0.5 px-2 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex rounded-lg px-3 py-1.5 [font-family:'DM_Sans',Helvetica] text-[13px] leading-[19.5px] ${
                    item.active ? "bg-aztec text-tradewind" : "text-flint"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2.5">
              <UserMenu />
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-col gap-1">
            <h1 className="[font-family:'DM_Sans',Helvetica] text-[28px] font-medium tracking-[-0.56px] leading-[42px] text-pampas">
              Historique des transferts
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
              Retrouvez tous vos envois d'argent sécurisés par la blockchain.
            </p>
          </div>

          <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-[#111]">
                  <TableRow className="border-[#1f1f1f] hover:bg-transparent">
                    <TableHead className="text-flint font-semibold [font-family:'DM_Sans',Helvetica] text-[10px] tracking-[0.8px] uppercase">Destinataire</TableHead>
                    <TableHead className="text-flint font-semibold [font-family:'DM_Sans',Helvetica] text-[10px] tracking-[0.8px] uppercase">Date</TableHead>
                    <TableHead className="text-flint font-semibold [font-family:'DM_Sans',Helvetica] text-[10px] tracking-[0.8px] uppercase">Montant</TableHead>
                    <TableHead className="text-flint font-semibold [font-family:'DM_Sans',Helvetica] text-[10px] tracking-[0.8px] uppercase">Reçu</TableHead>
                    <TableHead className="text-flint font-semibold [font-family:'DM_Sans',Helvetica] text-[10px] tracking-[0.8px] uppercase">Frais</TableHead>
                    <TableHead className="text-right text-flint font-semibold [font-family:'DM_Sans',Helvetica] text-[10px] tracking-[0.8px] uppercase">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transfers.map((t, i) => (
                    <TableRow key={i} className="border-[#1f1f1f] hover:bg-[#222]">
                      <TableCell className="py-4">
                        <div className="flex flex-col">
                          <span className="text-pampas font-medium [font-family:'DM_Sans',Helvetica] text-[13px]">{t.recipient}</span>
                          <span className="text-flint [font-family:'DM_Sans',Helvetica] text-[11px]">{t.country}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-flint [font-family:'DM_Sans',Helvetica] text-[13px]">{t.date}</TableCell>
                      <TableCell className="text-pampas font-medium [font-family:'DM_Mono',Helvetica] text-[13px]">{t.amount}</TableCell>
                      <TableCell className="text-tradewind font-medium [font-family:'DM_Mono',Helvetica] text-[13px]">{t.received}</TableCell>
                      <TableCell className="text-flint [font-family:'DM_Mono',Helvetica] text-[11px]">{t.fees}</TableCell>
                      <TableCell className="text-right">
                        <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold [font-family:'DM_Sans',Helvetica] ${t.statusClass}`}>
                          {t.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
