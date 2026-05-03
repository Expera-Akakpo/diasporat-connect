import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";

const navItems = [
  { label: "Mon Wallet", href: "/wallet", active: false, underlined: true },
  { label: "Retrait", href: "/retrait", active: true, underlined: false },
  { label: "Historique", href: "/historique", active: false, underlined: true },
];

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expéditeur", href: "/expediteur" },
  { label: "Destinataire", href: "/wallet" },
];

const methods = [
  { id: "mtn", label: "MTN MoMo", desc: "Mobile Money", icon: "📱", available: true },
  { id: "orange", label: "Orange Money", desc: "Mobile Money", icon: "🟠", available: true },
  { id: "bank", label: "Virement bancaire", desc: "2–3 jours ouvrés", icon: "🏦", available: false },
];

export const RetraitSection = (): JSX.Element => {
  const [selectedMethod, setSelectedMethod] = useState("mtn");
  const [amount, setAmount] = useState("131 284");

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

        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-col gap-1">
            <h1 className="[font-family:'DM_Sans',Helvetica] text-[28px] font-medium tracking-[-0.56px] leading-[42px] text-pampas">
              Retrait de fonds
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
              Transférez votre solde vers votre compte mobile money ou bancaire.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="flex flex-col gap-5">
              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex flex-col gap-1">
                    <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">
                      Solde disponible
                    </div>
                    <div className="[font-family:'DM_Mono',Helvetica] text-[36px] font-medium leading-[1] tracking-[-0.8px] text-tradewind">
                      131 284
                      <span className="ml-2 text-[18px] text-elm">XOF</span>
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">≈ €200.00 au taux de 655 XOF/€</div>
                  </div>
                  <Badge className="shrink-0 rounded border border-[#fbbf2440] bg-[#1f1900] px-[9px] py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.60px] text-[#c4a35a] hover:bg-[#1f1900]">
                    À retirer
                  </Badge>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                <CardContent className="flex flex-col gap-5 px-6 py-5">
                  <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold tracking-[0.80px] text-flint uppercase">
                    Montant à retirer
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-[#2e2e2e] bg-[#212121] px-4 py-3">
                    <span className="[font-family:'DM_Mono',Helvetica] text-[11px] text-flint">XOF</span>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 bg-transparent [font-family:'DM_Mono',Helvetica] text-[24px] font-medium text-pampas outline-none placeholder:text-flint"
                      placeholder="0"
                      data-testid="input-retrait-amount"
                    />
                  </div>
                  <div className="flex gap-2">
                    {["50 000", "100 000", "131 284"].map((v) => (
                      <Button
                        key={v}
                        type="button"
                        variant="outline"
                        onClick={() => setAmount(v)}
                        className="h-auto rounded-full border-[#2e2e2e] bg-transparent px-3.5 py-1.5 [font-family:'DM_Sans',Helvetica] text-xs text-flint hover:bg-[#2a2a2a]"
                        data-testid={`button-preset-${v}`}
                      >
                        {v}
                      </Button>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setAmount("131 284")}
                      className="h-auto rounded-full border-[#6ec4a766] bg-aztec px-3.5 py-1.5 [font-family:'DM_Sans',Helvetica] text-xs text-tradewind hover:bg-aztec"
                      data-testid="button-preset-tout"
                    >
                      Tout
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold tracking-[0.80px] text-flint uppercase">
                    Méthode de retrait
                  </div>
                  <div className="flex flex-col gap-2">
                    {methods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        disabled={!m.available}
                        onClick={() => m.available && setSelectedMethod(m.id)}
                        data-testid={`button-method-${m.id}`}
                        className={`flex items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${
                          selectedMethod === m.id
                            ? "border-[#6ec4a766] bg-aztec"
                            : m.available
                            ? "border-[#2e2e2e] bg-[#212121] hover:border-[#3e3e3e]"
                            : "border-[#1f1f1f] bg-[#161616] opacity-40 cursor-not-allowed"
                        }`}
                      >
                        <span className="text-2xl">{m.icon}</span>
                        <div className="flex flex-1 flex-col">
                          <span className={`[font-family:'DM_Sans',Helvetica] text-[13px] font-medium ${selectedMethod === m.id ? "text-tradewind" : "text-pampas"}`}>
                            {m.label}
                          </span>
                          <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">{m.desc}</span>
                        </div>
                        {selectedMethod === m.id && (
                          <div className="h-4 w-4 rounded-full border-2 border-tradewind bg-aztec flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-tradewind" />
                          </div>
                        )}
                        {!m.available && (
                          <Badge className="rounded border border-[#2e2e2e] bg-transparent px-2 py-0.5 [font-family:'DM_Sans',Helvetica] text-[10px] text-flint hover:bg-transparent">
                            Bientôt
                          </Badge>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                <CardContent className="flex flex-col gap-4 px-5 py-5">
                  <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold tracking-[0.80px] text-flint uppercase">
                    Récapitulatif
                  </div>
                  <div className="flex flex-col gap-2.5 border-b border-[#1f1f1f] pb-4">
                    {[
                      { label: "Montant", value: `${amount} XOF` },
                      { label: "Frais de retrait", value: "0 XOF" },
                      { label: "Méthode", value: methods.find((m) => m.id === selectedMethod)?.label ?? "" },
                      { label: "Délai", value: "Instantané" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between">
                        <span className="[font-family:'DM_Sans',Helvetica] text-[12px] text-flint">{row.label}</span>
                        <span className="[font-family:'DM_Mono',Helvetica] text-[12px] font-medium text-pampas">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold text-pampas">Total reçu</span>
                    <span className="[font-family:'DM_Mono',Helvetica] text-[18px] font-medium text-tradewind">{amount} XOF</span>
                  </div>
                  <Button
                    className="mt-2 h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind"
                    data-testid="button-confirm-retrait"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">Confirmer le retrait</span>
                  </Button>
                  <p className="text-center [font-family:'DM_Sans',Helvetica] text-[11px] text-flint">
                    Frais : 0% · Objectif ODD 10 ✓
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-[3px] px-5 py-4">
                  <p className="[font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">
                    Impact ce mois
                  </p>
                  <p className="[font-family:'DM_Mono',Helvetica] text-[22px] font-medium text-tradewind">68 600 XOF</p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">économisés vs services traditionnels</p>
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
