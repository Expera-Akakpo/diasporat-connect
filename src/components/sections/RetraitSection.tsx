import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";
import { useTransaction } from "@/contexts/TransactionContext";

const navItems = [
  { label: "Retirer", href: "/retrait", active: true },
  { label: "Historique", href: "/historique", active: false },
];

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expéditeur", href: "/expediteur" },
  { label: "Destinataire", href: "/wallet" },
];

const methods = [
  { id: "mobile", name: "Mobile Money", icon: "📱", description: "Orange Money, MTN Mobile Money, etc." },
  { id: "bank", name: "Virement bancaire", icon: "🏦", description: "Transfert vers compte bancaire" },
  { id: "cash", name: "Espèces", icon: "💵", description: "Retrait en agence ou distributeur" },
];

export const RetraitSection = (): JSX.Element => {
  const { withdraw, walletBalance } = useTransaction();
  const [amount, setAmount] = useState("50000");
  const [selectedMethod, setSelectedMethod] = useState("mobile");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastWithdrawalId, setLastWithdrawalId] = useState<string | null>(null);

  const amountNumber = Number(amount.toString().replace(/\s/g, "").replace(",", "."));
  const euroAmount = amountNumber > 0 ? (amountNumber / 655).toFixed(2) : "0.00";
  const fees = amountNumber > 0 ? Math.max(amountNumber * 0.005, 500) : 0;
  const total = amountNumber + fees;

  const isFormValid = amountNumber > 0 && amountNumber <= walletBalance && phoneNumber.length >= 8;

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

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
              Retirer de l'argent
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
              Retirez vos fonds reçus de manière sécurisée et instantanée.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="flex flex-col gap-5">
              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="amount" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                      Montant à retirer (XOF)
                    </Label>
                    <div className="relative">
                      <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="h-12 rounded-xl border-[#2e2e2e] bg-[#1a1a1a] pr-16 text-right [font-family:'DM_Mono',Helvetica] text-xl font-medium text-pampas placeholder:text-flint focus:border-tradewind focus:ring-tradewind"
                        placeholder="0"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 [font-family:'DM_Sans',Helvetica] text-sm font-medium text-flint">
                        XOF
                      </span>
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                      ≈ {euroAmount} € au taux de 655 XOF/€
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                      Méthode de retrait
                    </Label>
                    <div className="grid gap-3">
                      {methods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                            selectedMethod === method.id
                              ? "border-tradewind bg-[#1f1f1f]"
                              : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-[#3e3e3e]"
                          }`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2e2e2e]">
                            <span className="text-lg">{method.icon}</span>
                          </div>
                          <div className="flex min-w-0 flex-1 flex-col">
                            <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                              {method.name}
                            </span>
                            <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                              {method.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedMethod === "mobile" && (
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                        Numéro de téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="h-12 rounded-xl border-[#2e2e2e] bg-[#1a1a1a] [font-family:'DM_Sans',Helvetica] text-sm text-pampas placeholder:text-flint focus:border-tradewind focus:ring-tradewind"
                        placeholder="Ex: +225 07 00 00 00 00"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-center justify-between [font-family:'DM_Sans',Helvetica] text-sm">
                      <span className="text-flint">Solde disponible</span>
                      <span className="text-pampas">{walletBalance.toLocaleString("fr-FR")} XOF</span>
                    </div>
                    <div className="flex items-center justify-between [font-family:'DM_Sans',Helvetica] text-sm">
                      <span className="text-flint">Frais de retrait</span>
                      <span className="text-pampas">{fees.toLocaleString("fr-FR")} XOF</span>
                    </div>
                    <div className="flex items-center justify-between [font-family:'DM_Sans',Helvetica] text-base font-medium">
                      <span className="text-pampas">Total débité</span>
                      <span className="text-tradewind">{total.toLocaleString("fr-FR")} XOF</span>
                    </div>
                  </div>

                  <Button
                    onClick={async () => {
                      if (!isFormValid || isWithdrawing) return;
                      setIsWithdrawing(true);
                      try {
                        await withdraw(amountNumber, selectedMethod);
                        setLastWithdrawalId(`WD-${Date.now()}`);
                        setShowSuccessModal(true);
                      } finally {
                        setIsWithdrawing(false);
                      }
                    }}
                    disabled={!isFormValid || isWithdrawing}
                    className="h-12 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind disabled:opacity-50 [font-family:'DM_Sans',Helvetica] text-sm font-medium"
                  >
                    {isWithdrawing ? "Retrait en cours..." : `Retirer ${amount} XOF`}
                  </Button>
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

            <div className="flex flex-col gap-5">
              <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tradewind">
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tradewind">
                      <span className="text-sm">⚡</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                        Retrait instantané
                      </span>
                      <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                        Réception en 2 minutes
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tradewind">
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
                    Solde du portefeuille
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500">
                      <span className="text-xs">●</span>
                    </div>
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-pampas">
                      Actif
                    </span>
                  </div>
                  <div className="rounded-lg bg-[#1a1a1a] p-4">
                    <div className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                      Solde disponible
                    </div>
                    <div className="[font-family:'DM_Mono',Helvetica] text-2xl font-medium text-tradewind">
                      {walletBalance.toLocaleString("fr-FR")} XOF
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                      ≈ {(walletBalance / 655).toFixed(2)} €
                    </div>
                  </div>
                  {lastWithdrawalId && (
                    <div className="rounded-lg bg-[#1a1a1a] p-3">
                      <div className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                        Dernier retrait
                      </div>
                      <div className="[font-family:'DM_Mono',Helvetica] text-sm font-medium text-pampas">
                        {lastWithdrawalId}
                      </div>
                    </div>
                  )}
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

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-aztec border border-[#6ec4a726]">
          <DialogHeader>
            <DialogTitle className="[font-family:'DM_Sans',Helvetica] text-xl font-semibold text-pampas text-center">
              Retrait réussi !
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
              <span className="text-2xl">✅</span>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">
                Votre retrait de {amount} XOF a été traité avec succès.
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                Vous recevrez les fonds sur votre {methods.find(m => m.id === selectedMethod)?.name.toLowerCase()} dans les prochaines minutes.
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <Button asChild variant="outline" className="flex-1 rounded-xl border-[#2e2e2e] bg-transparent hover:bg-transparent">
                <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                  Voir l'historique
                </Link>
              </Button>
              <Button asChild className="flex-1 rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                <Link href="/retrait" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium">
                  Nouveau retrait
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};