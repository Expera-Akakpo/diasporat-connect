import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";

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

const navItems = [
  { label: "Mon Wallet", href: "/wallet", active: true, underlined: true },
  { label: "Retrait", href: "/retrait", active: false, underlined: false },
  { label: "Historique", href: "/historique", active: false, underlined: true },
];

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expéditeur", href: "/expediteur" },
  { label: "Destinataire", href: "/wallet" },
];

export const WalletHomeSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden rounded-sm border border-[#0000001a] bg-white">
      <div className="min-h-[953px] w-full border border-black bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)]">
        <header className="sticky top-0 z-10 flex min-h-16 w-full items-center justify-center border-b border-[#1f1f1f] bg-cod-gray-88 backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
          <div className="flex w-full max-w-[1160px] items-center justify-between gap-6 px-6 py-3 xl:px-10">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
                <span className="[font-family:'DM_Sans',Helvetica] text-[15px] font-semibold tracking-[-0.05px] leading-[22.5px] text-pampas">
                  DiasporaConnect
                </span>
              </Link>
              <Badge className="rounded-full border border-[#6ec4a74c] bg-aztec px-[7px] py-0.5 [font-family:'DM_Sans',Helvetica] text-[9px] font-bold tracking-[0.90px] text-tradewind hover:bg-aztec">
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
                  <span className={item.underlined ? "underline" : ""}>{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2.5">
              <Button asChild variant="outline" className="h-auto rounded-full border-[#2e2e2e] bg-transparent px-4 py-[7px] hover:bg-transparent">
                <Link href="/expediteur" className="[font-family:'DM_Sans',Helvetica] text-xs font-medium text-twine">
                  ← Interface Expéditeur
                </Link>
              </Button>
              <UserMenu />
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-5 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="[font-family:'DM_Sans',Helvetica] text-[28px] font-medium tracking-[-0.56px] leading-[42px] text-pampas">
                Mon Wallet
              </h1>
              <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
                Amadou Mbaye · amadou@diaspora.io
              </p>
            </div>
            <Button asChild className="h-10 rounded-xl bg-tradewind px-[22px] py-0 text-[#0d0d0d] hover:bg-tradewind">
              <Link href="/retrait" className="inline-flex items-center gap-2">
                <img className="h-4 w-4" alt="Retrait" src="/figmaAssets/svg-4.svg" />
                <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium leading-[19.5px] underline">
                  Retirer le solde
                </span>
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 pt-4 md:grid-cols-3">
            <Card className="col-span-3 rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none md:col-span-1">
              <CardContent className="flex h-full flex-col gap-2 px-6 pb-6 pt-6">
                <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">
                  Solde disponible
                </div>
                <div className="[font-family:'DM_Mono',Helvetica] text-[42px] font-medium leading-[1.1] tracking-[-1px] text-tradewind">
                  131 284
                </div>
                <div className="[font-family:'DM_Mono',Helvetica] text-sm font-normal text-elm">XOF</div>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">
                    ≈ €200.00 · Taux : 655 XOF/€
                  </div>
                  <Badge className="w-fit rounded border border-[#6ec4a74c] bg-aztec px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.50px] text-tradewind hover:bg-aztec">
                    À retirer
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-[#1f1f1f] bg-[#212121] shadow-none">
              <CardContent className="flex h-full flex-col gap-[5px] px-[18px] pb-4 pt-[18px]">
                <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                  Reçu ce mois
                </div>
                <div className="pt-[3px] [font-family:'DM_Mono',Helvetica] text-[28px] font-medium leading-7 text-pampas">
                  445 143
                </div>
                <div className="[font-family:'DM_Mono',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                  XOF · 4 transferts
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-[#1f1f1f] bg-[#212121] shadow-none">
              <CardContent className="flex h-full flex-col gap-[5px] px-[18px] pb-4 pt-[18px]">
                <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                  Impact total économisé
                </div>
                <div className="pt-[3px] [font-family:'DM_Mono',Helvetica] text-[28px] font-medium leading-7 text-tradewind">
                  68 600
                </div>
                <div className="[font-family:'DM_Mono',Helvetica] text-[11px] font-normal leading-[16.5px] text-elm">
                  XOF économisés vs banques
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="h-10 rounded-xl bg-tradewind px-5 text-[#0d0d0d] hover:bg-tradewind">
              <Link href="/retrait" className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                Retirer les fonds
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-10 rounded-xl border-[#2e2e2e] bg-transparent px-5 text-pampas hover:bg-[#1f1f1f]">
              <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                Voir l'historique
              </Link>
            </Button>
          </div>

          <div className="pt-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold tracking-[0.80px] text-flint uppercase">
                Transferts récents
              </h2>
              <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-[12px] font-normal text-tradewind underline">
                Tout voir
              </Link>
            </div>
            <Card className="overflow-hidden rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
              <CardContent className="p-0">
                <ul className="flex flex-col divide-y divide-[#1f1f1f]">
                  {recentTransfers.map((t) => (
                    <li key={`${t.name}-${t.meta}`} className="flex items-center gap-3 px-4 py-3">
                      <img className="h-[34px] w-[34px] shrink-0" alt={t.name} src={t.avatarSrc} />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-pampas">{t.name}</span>
                        <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">{t.meta}</span>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1">
                        <span className={`[font-family:'DM_Mono',Helvetica] text-[13px] font-medium ${t.amountClassName}`}>{t.amount}</span>
                        <Badge className={`rounded border px-[7px] py-0.5 [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.50px] hover:bg-inherit ${t.statusClassName}`}>
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
