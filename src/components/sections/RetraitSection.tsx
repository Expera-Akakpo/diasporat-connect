import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";
import { useTransaction } from "@/contexts/TransactionContext";

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
  const { walletBalance, withdraw } = useTransaction();
  const [selectedMethod, setSelectedMethod] = useState("mtn");
  const [amount, setAmount] = useState(walletBalance.toLocaleString("fr-FR"));
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  const handleWithdraw = async () => {
    if (isWithdrawing) return;
    setIsWithdrawing(true);
    try {
      await withdraw(Number(amount.replace(/\s/g, "")), selectedMethod);
      setWithdrawSuccess(true);
    } finally {
      setIsWithdrawing(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 min-h-screen">
      {/* Mobile Version */}
      <div className="block md:hidden">
        <div className="bg-white min-h-screen">
          <header className="bg-white border-b border-gray-200 px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2">
                  <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
                  <span className="text-lg font-semibold text-gray-900">DiasporaConnect</span>
                </Link>
                <Badge className="bg-teal-100 text-teal-800 border-teal-200">
                  DESTINATAIRE
                </Badge>
              </div>
              <UserMenu />
            </div>
          </header>

          <div className="px-4 py-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">Retrait de fonds</h1>
              <p className="text-gray-600">Transférez votre solde vers votre compte mobile money ou bancaire.</p>
            </div>

            <div className="space-y-6">
              {/* Balance Card */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Solde disponible</p>
                      <p className="text-3xl font-bold text-teal-600 mt-1">
                        {walletBalance.toLocaleString("fr-FR")}
                        <span className="text-lg text-gray-500 ml-1">XOF</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">≈ €{(walletBalance / 655).toFixed(2)} au taux de 655 XOF/€</p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                      À retirer
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Amount Selection */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-gray-700 mb-4">Montant à retirer</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {["50000", "100000", walletBalance.toString()].map((value) => (
                      <button
                        key={value}
                        onClick={() => setAmount(Number(value).toLocaleString("fr-FR"))}
                        className="p-3 border border-gray-200 rounded-lg text-center hover:border-teal-300 hover:bg-teal-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-gray-900">{Number(value).toLocaleString("fr-FR")}</p>
                        <p className="text-xs text-gray-500">XOF</p>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center border border-gray-200 rounded-lg p-3">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 text-lg font-medium text-gray-900 bg-transparent border-none outline-none"
                      placeholder="Montant personnalisé"
                    />
                    <span className="text-gray-500 ml-2">XOF</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-gray-700 mb-4">Méthode de retrait</p>
                  <div className="space-y-3">
                    {methods.filter(m => m.available).map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`w-full p-4 border rounded-lg text-left transition-colors ${
                          selectedMethod === method.id
                            ? "border-teal-300 bg-teal-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{method.icon}</span>
                            <div>
                              <p className="font-medium text-gray-900">{method.label}</p>
                              <p className="text-sm text-gray-500">{method.desc}</p>
                            </div>
                          </div>
                          {selectedMethod === method.id && (
                            <div className="w-4 h-4 bg-teal-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Withdraw Button */}
              <Button
                onClick={handleWithdraw}
                disabled={isWithdrawing}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-medium rounded-lg"
              >
                {isWithdrawing ? "Retrait en cours..." : "Confirmer le retrait"}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Frais : 0% · Objectif ODD 10 ✓
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
            <div className="flex justify-around">
              {[
                { href: "/wallet", label: "Wallet", icon: "💰" },
                { href: "/retrait", label: "Retrait", icon: "💸", active: true },
                { href: "/historique", label: "Historique", icon: "📜" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg ${
                    item.active ? "text-teal-600" : "text-gray-400"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2">
                  <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
                  <span className="text-lg font-semibold text-gray-900">DiasporaConnect</span>
                </Link>
                <Badge className="bg-teal-100 text-teal-800 border-teal-200">
                  DESTINATAIRE
                </Badge>
              </div>
              <nav className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-teal-100 text-teal-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <span className={item.underlined ? "underline" : ""}>{item.label}</span>
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Link href="/expediteur">← Interface Expéditeur</Link>
                </Button>
                <UserMenu />
              </div>
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Retrait de fonds</h1>
              <p className="text-gray-600">Transférez votre solde vers votre compte mobile money ou bancaire.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Balance Card */}
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Solde disponible</p>
                        <p className="text-4xl font-bold text-teal-600 mt-2">
                          {walletBalance.toLocaleString("fr-FR")}
                          <span className="text-xl text-gray-500 ml-2">XOF</span>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">≈ €{(walletBalance / 655).toFixed(2)} au taux de 655 XOF/€</p>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        À retirer
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Amount Selection */}
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-gray-700 mb-4">Montant à retirer</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {["50000", "100000", walletBalance.toString()].map((value) => (
                        <button
                          key={value}
                          onClick={() => setAmount(Number(value).toLocaleString("fr-FR"))}
                          className="p-4 border border-gray-200 rounded-lg text-center hover:border-teal-300 hover:bg-teal-50 transition-colors"
                        >
                          <p className="text-lg font-medium text-gray-900">{Number(value).toLocaleString("fr-FR")}</p>
                          <p className="text-sm text-gray-500">XOF</p>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center border border-gray-200 rounded-lg p-4">
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-1 text-xl font-medium text-gray-900 bg-transparent border-none outline-none"
                        placeholder="Montant personnalisé"
                      />
                      <span className="text-gray-500 ml-2">XOF</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Methods */}
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-gray-700 mb-4">Méthode de retrait</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {methods.filter(m => m.available).map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`p-4 border rounded-lg text-left transition-colors ${
                            selectedMethod === method.id
                              ? "border-teal-300 bg-teal-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{method.icon}</span>
                            <div>
                              <p className="font-medium text-gray-900">{method.label}</p>
                              <p className="text-sm text-gray-500">{method.desc}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Withdraw Button */}
                <Button
                  onClick={handleWithdraw}
                  disabled={isWithdrawing}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-medium rounded-lg"
                >
                  {isWithdrawing ? "Retrait en cours..." : "Confirmer le retrait"}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Frais : 0% · Objectif ODD 10 ✓
                </p>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-gray-900 mb-4">Résumé du retrait</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Montant</span>
                        <span className="font-medium text-gray-900">{amount} XOF</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frais</span>
                        <span className="font-medium text-green-600">0 XOF</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Méthode</span>
                        <span className="font-medium text-gray-900">
                          {methods.find(m => m.id === selectedMethod)?.label}
                        </span>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">Total à recevoir</span>
                        <span className="font-bold text-teal-600">{amount} XOF</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-200">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-gray-900 mb-2">Impact positif</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Vos retraits contribuent au développement durable en Afrique.
                    </p>
                    <Badge className="bg-teal-100 text-teal-800 border-teal-200">
                      Objectif ODD 10 ✓
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {withdrawSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <Card className="w-full max-w-md bg-white border border-gray-200">
            <CardContent className="flex flex-col items-center gap-6 px-6 py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl">✅</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Retrait réussi !
                </h3>
                <p className="text-sm text-gray-600">
                  Votre retrait de {amount} XOF vers {methods.find(m => m.id === selectedMethod)?.label} a été traité avec succès.
                </p>
              </div>
              <div className="flex gap-3 w-full">
                <Button asChild variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Link href="/historique">
                    Voir l'historique
                  </Link>
                </Button>
                <Button asChild className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/wallet">
                    Retour au wallet
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
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
                      {walletBalance.toLocaleString("fr-FR")}
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
                    className="mt-2 h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind cursor-pointer"
                    disabled={isWithdrawing}
                    onClick={handleWithdraw}
                    data-testid="button-confirm-retrait"
                  >
                    <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                      {isWithdrawing ? "Retrait en cours..." : "Confirmer le retrait"}
                    </span>
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
      {withdrawSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="w-full max-w-md rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
            <CardContent className="flex flex-col items-center gap-6 px-6 py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tradewind">
                <span className="text-2xl">✅</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-xl font-semibold text-pampas">
                  Retrait réussi !
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">
                  Votre retrait de {amount} XOF vers {methods.find(m => m.id === selectedMethod)?.label} a été traité avec succès.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline" className="rounded-xl border-[#2e2e2e] bg-transparent hover:bg-transparent">
                  <Link href="/historique" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                    Voir l'historique
                  </Link>
                </Button>
                <Button asChild className="rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                  <Link href="/wallet" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium">
                    Retour au wallet
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};
