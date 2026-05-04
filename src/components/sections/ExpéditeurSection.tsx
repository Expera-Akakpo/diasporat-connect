import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { UserMenu } from "@/components/UserMenu";
import { useTransfer } from "@/hooks/useTransfer";
import { Loader2, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { useTransaction } from "@/contexts/TransactionContext";


const navItems = [
  { label: "Envoyer", href: "/expediteur", active: true },
  { label: "Historique", href: "/expediteur/historique", active: false },
];

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expéditeur", href: "/expediteur" },
  { label: "Destinataire", href: "/wallet" },
];

const recipients = [
  { avatarSrc: "/figmaAssets/background-border-6.svg", name: "Amadou Mbaye", phone: "+221 77 000 00 00", country: "🇸🇳 Sénégal", wallet: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e" },
  { avatarSrc: "/figmaAssets/background-border-1.svg", name: "Fatou Diallo", phone: "+225 07 000 00 00", country: "🇨🇮 Côte d'Ivoire", wallet: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC" },
];

export const ExpéditeurSection = (): JSX.Element => {
  const { sendTransfer } = useTransaction();
  const [amount, setAmount] = useState("200");
  const [selectedRecipient, setSelectedRecipient] = useState<number | "new">(0);
  const [manualRecipient, setManualRecipient] = useState({ name: "", phone: "", country: "🇧🇯 Bénin", wallet: "" });

  const {
    isSimulationMode,
    status,
    txHash,
    error,
    account,
    connectWallet,
    sendMoney,
    toggleSimulationMode
  } = useTransfer();

  const amountNumber = Number(amount.toString().replace(/\s/g, "").replace(",", "."));
  const xofAmount = amountNumber > 0 ? Math.round(amountNumber * 655).toLocaleString("fr-FR") : "—";
  const fees = amountNumber > 0 ? (amountNumber * 0.002).toFixed(2) : "0.00";

  const currentRecipientName = selectedRecipient === "new" ? manualRecipient.name || "Nouveau destinataire" : recipients[selectedRecipient].name;
  const currentRecipientWallet = selectedRecipient === "new" ? manualRecipient.wallet : recipients[selectedRecipient].wallet;

  const handleSend = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    
    // Convert EUR to ETH for simulation/blockchain (using a fixed mock rate for demo)
    // 1 ETH ≈ 2400 EUR => amount / 2400
    const ethAmount = (parseFloat(amount) / 2400).toFixed(6);
    
    await sendMoney(currentRecipientWallet || "0x0000000000000000000000000000000000000000", ethAmount);
  };

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
                EXPÉDITEUR
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
              <div className="flex flex-col items-end mr-2">
                {account ? (
                  <span className="text-[10px] text-flint font-mono">{account.substring(0, 6)}...{account.substring(account.length-4)}</span>
                ) : (
                  <Button onClick={connectWallet} variant="ghost" className="h-7 text-[11px] text-tradewind">
                    Connecter Wallet
                  </Button>
                )}
                <button 
                  onClick={toggleSimulationMode}
                  className="text-[9px] text-tradewind-60 underline hover:text-tradewind"
                >
                  {isSimulationMode ? "Mode Simulation [ON]" : "Passer en Simulation"}
                </button>
              </div>
              <Button asChild variant="outline" className="h-auto rounded-full border-[#2e2e2e] bg-transparent px-4 py-[7px] hover:bg-transparent">
                <Link href="/wallet" className="[font-family:'DM_Sans',Helvetica] text-xs font-medium text-tradewind">
                  Interface Destinataire →
                </Link>
              </Button>
              <UserMenu />
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-col gap-1">
            <h1 className="[font-family:'DM_Sans',Helvetica] text-[28px] font-medium tracking-[-0.56px] leading-[42px] text-pampas">
              Envoyer de l'argent
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
              Transférez de l'argent vers l'Afrique de manière sécurisée et instantanée.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="flex flex-col gap-5">
              {isSimulationMode && (
                <div className="flex items-center gap-2 rounded-xl bg-aztec/30 border border-tradewind/20 px-4 py-3 text-tradewind text-xs">
                  <Info className="h-4 w-4" />
                  <span>Mode Démo actif : Les transactions sont simulées sans frais réels.</span>
                </div>
              )}

              <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                <CardContent className="flex flex-col gap-5 px-6 py-5">
                  <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold tracking-[0.80px] text-flint uppercase">
                    Montant à envoyer
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-[#2e2e2e] bg-[#212121] px-4 py-3">
                    <span className="[font-family:'DM_Sans',Helvetica] text-[18px] text-flint">€</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="flex-1 bg-transparent [font-family:'DM_Mono',Helvetica] text-[32px] font-medium text-pampas outline-none placeholder:text-[#3a3a3a]"
                      data-testid="input-send-amount"
                    />
                    <span className="shrink-0 rounded-full border border-[#2e2e2e] px-3 py-1 [font-family:'DM_Sans',Helvetica] text-[11px] text-flint">EUR</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#111] px-4 py-3">
                    <span className="[font-family:'DM_Sans',Helvetica] text-[12px] text-flint">Le destinataire reçoit</span>
                    <span className="[font-family:'DM_Mono',Helvetica] text-[18px] font-medium text-tradewind">{xofAmount} XOF</span>
                  </div>
                  <div className="flex gap-2">
                    {["50", "100", "200", "500"].map((v) => (
                      <Button
                        key={v}
                        type="button"
                        variant="outline"
                        onClick={() => setAmount(v)}
                        className="h-auto rounded-full border-[#2e2e2e] bg-transparent px-3.5 py-1.5 [font-family:'DM_Sans',Helvetica] text-xs text-flint hover:bg-[#2a2a2a]"
                        data-testid={`button-preset-eur-${v}`}
                      >
                        €{v}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold tracking-[0.80px] text-flint uppercase">
                      Destinataire
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedRecipient(selectedRecipient === "new" ? 0 : "new")}
                      className="h-7 text-[11px] text-tradewind hover:bg-aztec"
                    >
                      {selectedRecipient === "new" ? "← Mes contacts" : "+ Nouveau"}
                    </Button>
                  </div>

                  {selectedRecipient === "new" ? (
                    <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-[11px] text-flint px-1">Nom complet</Label>
                        <Input
                          placeholder="Ex: jean miabehackathon"
                          value={manualRecipient.name}
                          onChange={(e) => setManualRecipient({ ...manualRecipient, name: e.target.value })}
                          className="h-10 rounded-xl border-[#2e2e2e] bg-[#212121] text-pampas focus-visible:ring-tradewind"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-[11px] text-flint px-1">Adresse Wallet (ETH)</Label>
                        <Input
                          placeholder="0x..."
                          value={manualRecipient.wallet}
                          onChange={(e) => setManualRecipient({ ...manualRecipient, wallet: e.target.value })}
                          className="h-10 rounded-xl border-[#2e2e2e] bg-[#212121] text-pampas focus-visible:ring-tradewind"
                        />
                      </div>
                    </div>
                    ) : (
                      
                    <div className="flex flex-col gap-2">
                      <Label className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                        Destinataire
                      </Label>
                      <div className="grid gap-3">
                        {recipients.map((recipient, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedRecipient(index)}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                              selectedRecipient === index
                                ? "border-tradewind bg-[#1f1f1f]"
                                : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-[#3e3e3e]"
                            }`}
                          >
                            <img className="h-10 w-10 shrink-0 rounded-full" alt={recipient.name} src={recipient.avatarSrc} />
                            <div className="flex min-w-0 flex-1 flex-col">
                              <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                                {recipient.name}
                              </span>
                              <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                                {recipient.phone} · {recipient.country}
                              </span>
                            </div>
                          </div>
                        ))}

                        <div
                          onClick={() => setSelectedRecipient("new")}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                            selectedRecipient === "new"
                              ? "border-tradewind bg-[#1f1f1f]"
                              : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-[#3e3e3e]"
                          }`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2e2e2e]">
                            <span className="text-lg">+</span>
                          </div>
                          <div className="flex min-w-0 flex-1 flex-col">
                            <span className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-pampas">
                              Nouveau destinataire
                            </span>
                            <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                              Ajouter manuellement
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold text-pampas">Reçu</span>
                    <span className="[font-family:'DM_Mono',Helvetica] text-[18px] font-medium text-tradewind">{xofAmount} XOF</span>
                  </div>

                  {status === "idle" && (
                    <Button
                      onClick={handleSend}
                      className="mt-2 h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind"
                      disabled={!amount || parseFloat(amount) <= 0}
                      data-testid="button-confirm-send"
                    >
                      <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">Envoyer maintenant</span>
                    </Button>
                  )}

                  {(status === "loading" || status === "connecting") && (
                    <Button disabled className="mt-2 h-11 w-full rounded-xl bg-aztec text-tradewind">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {status === "connecting" ? "Connexion Wallet..." : "Transfert en cours..."}
                    </Button>
                  )}

                  {status === "success" && (
                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center gap-2 rounded-xl bg-aztec/50 p-3 text-tradewind border border-tradewind/20">
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        <div className="flex flex-col overflow-hidden">
                          <span className="text-xs font-bold">Transfert Confirmé !</span>
                          <span className="text-[10px] font-mono truncate">{txHash}</span>
                        </div>
                      </div>
                      <Button onClick={() => window.location.reload()} variant="outline" className="w-full border-[#2e2e2e] text-flint">
                        Nouvel envoi
                      </Button>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center gap-2 rounded-xl bg-red-900/20 p-3 text-red-400 border border-red-900/40">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <span className="text-xs">{error || "Une erreur est survenue"}</span>
                      </div>
                      <Button onClick={handleSend} className="w-full bg-tradewind text-[#0d0d0d]">
                        Réessayer
                      </Button>
                    </div>
                  )}

                  <p className="text-center [font-family:'DM_Sans',Helvetica] text-[11px] text-flint">
                    Frais : &lt;0.2% · Objectif ODD 10 ✓
                  </p>
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
                          Transfert instantané
                        </span>
                        <span className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                          Réception en 5 minutes
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
                      Statut du transfert
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-3 w-3 items-center justify-center rounded-full ${
                        workflowStatus === "Confirmé" ? "bg-green-500" :
                        workflowStatus === "En cours" ? "bg-yellow-500" : "bg-gray-500"
                      }`}>
                        <span className="text-xs">●</span>
                      </div>
                      <span className="[font-family:'DM_Sans',Helvetica] text-sm text-pampas">
                        {workflowStatus}
                      </span>
                    </div>
                    {lastTransferId && (
                      <div className="rounded-lg bg-[#1a1a1a] p-3">
                        <div className="[font-family:'DM_Sans',Helvetica] text-xs text-flint">
                          ID de transaction
                        </div>
                        <div className="[font-family:'DM_Mono',Helvetica] text-sm font-medium text-pampas">
                          {lastTransferId}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {workflow === "blockchain" && (
            <div className="flex flex-col items-center gap-8 py-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tradewind">
                  <span className="text-2xl">⛓️</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="[font-family:'DM_Sans',Helvetica] text-2xl font-medium text-pampas">
                    Validation blockchain en cours...
                  </h2>
                  <p className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">
                    Votre transfert de {amount} € vers {currentRecipientName} est en cours de validation sur la blockchain.
                  </p>
                </div>
              </div>
              <Card className="w-full max-w-md rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col gap-4 px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">Transaction ID</span>
                    <span className="[font-family:'DM_Mono',Helvetica] text-xs font-medium text-pampas">{lastTransferId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">Destinataire</span>
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-pampas">{currentRecipientName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">Montant</span>
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-pampas">{amount} €</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">Statut</span>
                    <Badge className="rounded border border-yellow-500/20 bg-yellow-500/10 px-2 py-1 [font-family:'DM_Sans',Helvetica] text-xs font-medium text-yellow-500">
                      En cours
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {workflow === "success" && (
            <div className="flex flex-col items-center gap-8 py-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="[font-family:'DM_Sans',Helvetica] text-2xl font-medium text-pampas">
                    Transfert réussi !
                  </h2>
                  <p className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">
                    Votre transfert de {amount} € vers {currentRecipientName} a été confirmé sur la blockchain.
                  </p>
                </div>
              </div>
              <Card className="w-full max-w-md rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
                <CardContent className="flex flex-col items-center gap-6 px-6 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tradewind">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'DM_Sans',Helvetica] text-xl font-semibold text-pampas">
                      Transfert confirmé
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] text-sm text-flint">
                      {currentRecipientName} recevra {xofAmount} XOF dans les prochaines minutes.
                    </p>
                  </div>
                  <div className="flex gap-3 w-full">
                    <Button asChild variant="outline" className="flex-1 rounded-xl border-[#2e2e2e] bg-transparent hover:bg-transparent">
                      <Link href="/expediteur/historique" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium text-twine">
                        Voir l'historique
                      </Link>
                    </Button>
                    <Button asChild className="flex-1 rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                      <Link href="/expediteur" className="[font-family:'DM_Sans',Helvetica] text-sm font-medium">
                        Nouveau transfert
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
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