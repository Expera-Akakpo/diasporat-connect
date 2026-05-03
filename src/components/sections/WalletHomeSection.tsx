import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/components/ui/StatCard";
import TransactionRow from "@/components/ui/TransactionRow";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";
import { useTransaction } from "@/contexts/TransactionContext";

const navItems = [
  { label: "Accueil", href: "/wallet", active: true },
  { label: "Historique", href: "/historique", active: false },
];

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expéditeur", href: "/expediteur" },
  { label: "Destinataire", href: "/wallet" },
];

export const WalletHomeSection = (): JSX.Element => {
  const { walletBalance, transfers, monthlyReceived } = useTransaction();

  const euroBalance = (walletBalance / 655).toFixed(2);
  const lastTransfers = useMemo(() => transfers.slice(-3).reverse(), [transfers]);

  return (
    <section className="relative w-full overflow-hidden bg-cod-gray-88 min-h-screen">
      <div className="bg-cod-gray-88 min-h-screen">
        <header className="sticky top-0 z-10 flex min-h-16 w-full items-center justify-center border-b border-[#1f1f1f] bg-cod-gray-88 backdrop-blur [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
          <div className="flex w-full max-w-[1160px] items-center justify-between gap-6 px-6 py-3 xl:px-10">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
                <span className="[font-family:'DM_Sans',Helvetica] text-[15px] font-semibold tracking-[-0.05px] leading-[22.5px] text-pampas">
                  DiasporaConnect
                </span>
              </Link>
              <Badge className="rounded-full border border-[#fbbf2440] bg-[#1f1900] px-[7px] py-0.5 [font-family:'DM_Sans',Helvetica] text-[9px] font-bold tracking-[0.90px] text-[#c4a35a] hover:bg-[#1f1900]">
                DESTINATAIRE
              </Badge>
            </div>
            <nav className="hidden items-center gap-0.5 px-2 md:flex" aria-label="Navigation principale">
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
              <Button asChild variant="outline" className="h-auto rounded-full border-[#2e2e2e] bg-transparent px-4 py-[7px] hover:bg-transparent">
                <Link href="/expediteur" className="[font-family:'DM_Sans',Helvetica] text-xs font-medium text-tradewind">
                  Interface Expéditeur ←
                </Link>
              </Button>
              <UserMenu />
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-col gap-1">
            <h1 className="[font-family:'DM_Sans',Helvetica] text-[28px] font-medium tracking-[-0.56px] leading-[42px] text-pampas">
              Mon portefeuille
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
              Gérez vos fonds reçus et consultez vos transactions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="flex flex-col gap-5">
              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-6 px-6 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">
                        Solde disponible
                      </span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-3xl font-medium text-tradewind">
                        {walletBalance.toLocaleString("fr-FR")} XOF
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                        ≈ {euroBalance} €
                      </span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tradewind/10">
                      <span className="text-lg">💰</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="flex-1 rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                      <Link href="/retrait" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium">
                        Retirer
                      </Link>
                    </Button>
                    <Button asChild className="flex-1 rounded-xl border-[#2e2e2e] bg-transparent hover:bg-[#2e2e2e]">
                      <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                        Historique
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <StatCard
                  label="Reçu ce mois"
                  value={`${monthlyReceived.toLocaleString("fr-FR")} XOF`}
                  subtext={`≈ ${(monthlyReceived / 655).toFixed(0)} €`}
                />
                <StatCard
                  label="Transactions"
                  value={transfers.length.toString()}
                  subtext="Ce mois"
                />
              </div>

              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <h3 className="[font-family:'DM_Sans',Helvetica] text-lg font-medium text-pampas">
                      Dernières transactions
                    </h3>
                    <Button asChild variant="ghost" className="h-auto p-0 text-tradewind hover:bg-transparent">
                      <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium">
                        Voir tout →
                      </Link>
                    </Button>
                  </div>

                  {lastTransfers.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {lastTransfers.map((transfer, index) => (
                        <TransactionRow
                          key={index}
                          name={transfer.recipient}
                          date={transfer.date}
                          amount={transfer.amountXOF.toString()}
                          fees="0.00"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2e2e2e]">
                        <span className="text-2xl">📭</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                          Aucune transaction
                        </span>
                        <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                          Vos transactions apparaîtront ici
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-5">
              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tradewind/10">
                      <span className="text-sm">🔒</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                        Sécurité garantie
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                        Chiffrement end-to-end
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tradewind/10">
                      <span className="text-sm">⚡</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                        Transferts instantanés
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                        Réception en 5 minutes
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tradewind/10">
                      <span className="text-sm">🌍</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                        Couverture panafricaine
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                        14 pays desservis
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <h3 className="[font-family:'DM_Sans',Helvetica] text-lg font-medium text-pampas">
                    Actions rapides
                  </h3>
                  <div className="grid gap-3">
                    <Button asChild className="h-12 w-full justify-start rounded-xl bg-transparent hover:bg-[#2e2e2e] border border-[#2e2e2e]">
                      <Link href="/retrait" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                        💵 Retirer des fonds
                      </Link>
                    </Button>
                    <Button asChild className="h-12 w-full justify-start rounded-xl bg-transparent hover:bg-[#2e2e2e] border border-[#2e2e2e]">
                      <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                        📊 Voir l'historique
                      </Link>
                    </Button>
                    <Button asChild className="h-12 w-full justify-start rounded-xl bg-transparent hover:bg-[#2e2e2e] border border-[#2e2e2e]">
                      <Link href="/expediteur" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                        ✉️ Envoyer de l'argent
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-[3px] px-5 py-4">
                  <p className="[font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">
                    Économies réalisées
                  </p>
                  <p className="[font-family:'DM_Mono',Helvetica] text-[22px] font-medium text-tradewind">68 600 XOF</p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">économisés ce mois vs services traditionnels</p>
                  <Badge className="mt-1 w-fit rounded border border-[#6ec4a74c] bg-aztec px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.50px] text-tradewind hover:bg-aztec">
                    Objectif ODD 10 : &lt; 3% ✓
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <footer className="w-full border-t border-[#1f1f1f] bg-transparent">
          <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-6 px-6 py-7 xl:px-10">
            <div className="inline-flex items-center gap-2">
              <img className="h-[26px] w-[26px]" alt="DiasporaConnect" src="/figmaAssets/background-border-2.svg" />
              <span className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">DiasporaConnect</span>
            </div>
            <nav className="inline-flex items-start gap-5" aria-label="Pied de page">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="[font-family:'DM_Sans',Helvetica] text-xs font-normal leading-[18px] text-flint">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="h-[18px] w-[120px]" />
          </div>
        </footer>
      </div>
    </section>
  );
};