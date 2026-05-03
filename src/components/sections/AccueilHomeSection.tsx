import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, TrendingDown, Zap, Smartphone } from "lucide-react";
import { UserMenu } from "@/components/UserMenu";

const stats = [
  { value: "0,2%", label: "Frais seulement" },
  { value: "-91%", label: "Vs Western Union" },
  { value: "12s", label: "Délai de transfert" },
  { value: "500M$", label: "Envoyés / an" },
];

const steps = [
  {
    icon: <TrendingDown className="h-5 w-5 text-tradewind" />,
    title: "Entrez le montant",
    desc: "Indiquez le montant en EUR ou XOF. Le taux de change et les frais s'affichent instantanément et sont garantis 12 minutes.",
  },
  {
    icon: <Zap className="h-5 w-5 text-tradewind" />,
    title: "Smart contract sécurisé",
    desc: "DiasporaConnect sécurise les fonds à l'envoi et les libère instantanément au destinataire — pas même DiasporaConnect — n'a accès aux fonds.",
  },
  {
    icon: <Smartphone className="h-5 w-5 text-tradewind" />,
    title: "Reçoit sur Mobile Money",
    desc: "Le destinataire reçoit instantanément sur MTN MoMo, Moov Money ou Wave. Frais de retrait : 0 XOF.",
  },
];

const feeRows = [
  { name: "DiasporaConnect", fee: "€0.48", pct: "0.2%", highlight: true },
  { name: "Western Union", fee: "€17.68", pct: "8%", highlight: false },
  { name: "MoneyGram", fee: "€24.46", pct: "12%", highlight: false },
  { name: "Banque classique", fee: "€22.46", pct: "10%", highlight: false },
];

const roles = [
  {
    badge: "EXPÉDITEUR · DIASPORA",
    title: "J'envoie de l'argent",
    desc: "Cotonou, Parakou, Porto-Novo. Consultez votre solde wallet, recevez les virements de comment et déclier vers votre Mobile Money en un clic.",
    features: ["Tableau de bord", "Créer un transfert", "Historique des transferts"],
    cta: "Accéder à l'Interface",
    href: "/expediteur",
    cardClass: "bg-[#0d1a16] border-[#6ec4a726]",
    badgeClass: "border-[#6ec4a74c] bg-aztec text-tradewind",
    ctaClass: "bg-tradewind text-[#0d0d0d] hover:bg-tradewind",
  },
  {
    badge: "DESTINATAIRE · BÉNIN",
    title: "Je reçois de l'argent",
    desc: "Cotonou, Parakou, Porto-Novo. Consultez votre solde wallet, recevez les virements de comment et déclier vers votre Mobile Money en un clic.",
    features: ["Mon Wallet", "Retrait Mobile Money", "Historique reçus"],
    cta: "Accéder à l'Interface",
    href: "/wallet",
    cardClass: "bg-[#1a1a14] border-[#fbbf2426]",
    badgeClass: "border-[#fbbf2440] bg-[#1f1900] text-[#c4a35a]",
    ctaClass: "bg-transparent border border-[#6ec4a74c] text-tradewind hover:bg-aztec",
  },
];

export const AccueilHomeSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden rounded-sm bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-10 flex min-h-16 w-full items-center justify-center border-b border-[#1f1f1f] bg-cod-gray-88 backdrop-blur [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
        <div className="flex w-full max-w-[1160px] items-center justify-between gap-6 px-10 py-3">
          <div className="flex items-center gap-2.5">
            <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
            <span className="[font-family:'DM_Sans',Helvetica] text-[15px] font-semibold tracking-[-0.05px] leading-[22.5px] text-pampas">
              DiasporaConnect
            </span>
          </div>
          <nav className="flex items-center gap-1">
            {[
              { label: "Accueil", href: "/" },
              { label: "Expéditeur", href: "/expediteur" },
              { label: "Destinataire", href: "/wallet" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex rounded-lg px-3 py-1.5 [font-family:'DM_Sans',Helvetica] text-[13px] leading-[19.5px] text-flint hover:text-pampas"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <UserMenu />
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden border-b border-[#1f1f1f]">
        {/* Background textures */}
        <img
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover opacity-20"
          alt=""
          src="/figmaAssets/background-border.svg"
        />
        {/* Glow circles */}
        <div className="pointer-events-none absolute right-[10%] top-[-80px] h-[420px] w-[420px] rounded-full bg-tradewind opacity-10 blur-[120px]" />
        <div className="pointer-events-none absolute left-[5%] top-[30%] h-[280px] w-[280px] rounded-full bg-[#c4a35a] opacity-8 blur-[100px]" />

        <div className="relative mx-auto flex w-full max-w-[1160px] flex-col gap-10 px-10 pb-20 pt-20">
          {/* Headline */}
          <div className="flex flex-col gap-1">
            <h1 className="max-w-[640px] [font-family:'DM_Sans',Helvetica] text-[64px] font-medium leading-[1.05] tracking-[-2px] text-pampas">
              Envoyez de l'argent au Bénin.
            </h1>
            <h1 className="max-w-[640px] [font-family:'DM_Sans',Helvetica] text-[64px] font-medium leading-[1.05] tracking-[-2px] text-[#c4a35a]">
              Sans intermédiaires.
            </h1>
            <h1 className="max-w-[640px] [font-family:'DM_Sans',Helvetica] text-[64px] font-medium leading-[1.05] tracking-[-2px] text-[#c4a35a]">
              Frais à 0,2 %.
            </h1>
          </div>

          {/* Subtext */}
          <p className="max-w-[460px] [font-family:'DM_Sans',Helvetica] text-[15px] leading-[1.65] text-flint">
            La diaspora béninoise envoie 500 M$ par an. Western Union prélève jusqu'à 10%. DiasporaConnect utilise la blockchain pour réduire les frais à presque zéro.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button asChild className="h-11 gap-2 rounded-xl bg-tradewind px-6 text-[#0d0d0d] hover:bg-tradewind">
              <Link href="/expediteur" className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                <ArrowRight className="h-4 w-4" />
                Envoyer de l'argent
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 gap-2 rounded-xl border-[#2e2e2e] bg-transparent px-6 text-pampas hover:bg-[#1f1f1f]">
              <Link href="/wallet" className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                <ArrowRight className="h-4 w-4 text-flint" />
                Je reçois de l'argent
              </Link>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="flex items-center gap-8 pt-2">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="flex flex-col gap-0.5">
                  <span className="[font-family:'DM_Mono',Helvetica] text-[28px] font-medium leading-[1] text-pampas">{s.value}</span>
                  <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="h-8 w-px bg-[#2a2a2a]" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Comment ça marche ── */}
      <div className="border-b border-[#1f1f1f] py-20">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-10 px-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-tradewind" />
              <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[1.2px] text-tradewind uppercase">
                COMMENT ÇA MARCHE
              </span>
            </div>
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[40px] font-medium tracking-[-1px] text-pampas">
              Trois étapes, zéro banque
            </h2>
            <p className="max-w-[480px] [font-family:'DM_Sans',Helvetica] text-[13px] leading-[1.6] text-flint">
              Un smart contract sur la blockchain sécurise les fonds à l'envoi et les libère instantanément au destinataire — sans aucun intermédiaire.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <Card key={step.title} className="rounded-2xl border border-[#1f1f1f] bg-[#111] shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1f1f1f] bg-aztec">
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="[font-family:'DM_Mono',Helvetica] text-[11px] text-flint">0{i + 1}</span>
                    <h3 className="[font-family:'DM_Sans',Helvetica] text-[17px] font-medium text-pampas">{step.title}</h3>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[13px] leading-[1.6] text-flint">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ── Comparaison des frais ── */}
      <div className="border-b border-[#1f1f1f] py-20">
        <div className="mx-auto flex w-full max-w-[1160px] items-start gap-16 px-10">
          {/* Left */}
          <div className="flex max-w-[380px] flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-6 bg-[#c4a35a]" />
                <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[1.2px] text-[#c4a35a] uppercase">
                  COMPARAISON DES FRAIS
                </span>
              </div>
              <h2 className="[font-family:'DM_Sans',Helvetica] text-[40px] font-medium tracking-[-1px] leading-[1.1] text-pampas">
                Vous récupérez <span className="text-[#c4a35a]">€70–100M</span> par an
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] text-[13px] leading-[1.6] text-flint">
                Sur 500M$ de transferts annuels, une réduction des frais de 10% à 0.2% redistribue directement 70 à 100 millions de dollars aux familles béninoises chaque année.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded border border-[#6ec4a74c] bg-aztec px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.5px] text-tradewind hover:bg-aztec">
                Objectif ODD 10 : &lt; 3% ✓
              </Badge>
              <Badge className="rounded border border-[#2a2a2a] bg-[#1a1a1a] px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.5px] text-flint hover:bg-[#1a1a1a]">
                Frais actuels à 0.2%
              </Badge>
            </div>
          </div>

          {/* Right: table */}
          <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#1f1f1f]">
            {/* Table header */}
            <div className="flex items-center justify-between border-b border-[#1f1f1f] bg-[#111] px-5 py-3">
              <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[0.8px] text-flint uppercase">
                FRAIS SUR €240 ENVOYÉS
              </span>
            </div>
            {feeRows.map((row) => (
              <div
                key={row.name}
                className={`flex items-center justify-between px-5 py-4 ${
                  row.highlight
                    ? "border-l-2 border-tradewind bg-aztec"
                    : "border-b border-[#1a1a1a] bg-[#111]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {row.highlight && <div className="h-1.5 w-1.5 rounded-full bg-tradewind" />}
                  <span
                    className={`[font-family:'DM_Sans',Helvetica] text-[14px] font-medium ${
                      row.highlight ? "text-pampas" : "text-flint"
                    }`}
                  >
                    {row.name}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className={`[font-family:'DM_Mono',Helvetica] text-[14px] ${
                      row.highlight ? "text-tradewind" : "text-flint"
                    }`}
                  >
                    {row.fee}
                  </span>
                  <span
                    className={`w-10 text-right [font-family:'DM_Mono',Helvetica] text-[12px] ${
                      row.highlight ? "text-tradewind" : "text-[#3a3a3a]"
                    }`}
                  >
                    {row.pct}
                  </span>
                </div>
              </div>
            ))}
            {/* Savings callout */}
            <div className="flex items-center justify-between border-t border-[#1f1f1f] bg-[#0d1a16] px-5 py-4">
              <span className="[font-family:'DM_Sans',Helvetica] text-[12px] text-elm">
                Économisé sur le transfert
              </span>
              <span className="[font-family:'DM_Mono',Helvetica] text-[18px] font-medium text-tradewind">
                €17.60
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Choisissez votre rôle ── */}
      <div className="border-b border-[#1f1f1f] py-20">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-10 px-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-tradewind" />
              <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[1.2px] text-tradewind uppercase">
                VOTRE PROFIL
              </span>
            </div>
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[40px] font-medium tracking-[-1px] text-pampas">
              Choisissez votre rôle
            </h2>
            <p className="max-w-[500px] [font-family:'DM_Sans',Helvetica] text-[13px] leading-[1.6] text-flint">
              Une interface dédiée à chaque partie du transfert — l'expéditeur en diaspora et le destinataire au Bénin.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {roles.map((role) => (
              <Card key={role.title} className={`rounded-2xl border shadow-none ${role.cardClass}`}>
                <CardContent className="flex flex-col gap-5 px-6 py-6">
                  <Badge className={`w-fit rounded border px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[9px] font-bold tracking-[0.8px] hover:bg-inherit ${role.badgeClass}`}>
                    {role.badge}
                  </Badge>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="[font-family:'DM_Sans',Helvetica] text-[22px] font-medium text-pampas">{role.title}</h3>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[13px] leading-[1.6] text-flint">{role.desc}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {role.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-tradewind" />
                        <span className="[font-family:'DM_Sans',Helvetica] text-[12px] text-elm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`mt-auto h-9 w-fit gap-1.5 rounded-lg px-4 [font-family:'DM_Sans',Helvetica] text-[12px] font-medium ${role.ctaClass}`}>
                    <Link href={role.href}>
                      {role.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="py-7">
        <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-6 px-10">
          <div className="inline-flex items-center gap-2">
            <img className="h-[26px] w-[26px]" alt="DiasporaConnect" src="/figmaAssets/background-border-2.svg" />
            <span className="[font-family:'DM_Sans',Helvetica] text-sm font-normal text-flint">DiasporaConnect</span>
          </div>
          <nav className="inline-flex items-center gap-5">
            {[
              { label: "Accueil", href: "/" },
              { label: "Expéditeur", href: "/expediteur" },
              { label: "Destinataire", href: "/wallet" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="[font-family:'DM_Sans',Helvetica] text-xs text-flint hover:text-pampas">
                {link.label}
              </Link>
            ))}
          </nav>
          <Badge className="rounded border border-[#6ec4a74c] bg-aztec px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.50px] text-tradewind hover:bg-aztec">
            Objectif ODD 10 : &lt; 3% ✓
          </Badge>
        </div>
      </footer>
    </section>
  );
};
