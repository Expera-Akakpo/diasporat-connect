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

  // Variables manquantes ajoutées pour éviter les erreurs de build
  const workflow = status === "success" ? "success" : status === "loading" ? "blockchain" : "form";
  const workflowStatus = status === "success" ? "Confirmé" : status === "loading" ? "En cours" : "En attente";
  const lastTransferId = txHash;

  const amountNumber = Number(amount.toString().replace(/\s/g, "").replace(",", "."));
  const xofAmount = amountNumber > 0 ? Math.round(amountNumber * 655).toLocaleString("fr-FR") : "—";

  const currentRecipientName = selectedRecipient === "new" ? manualRecipient.name || "Nouveau destinataire" : recipients[selectedRecipient].name;
  const currentRecipientWallet = selectedRecipient === "new" ? manualRecipient.wallet : recipients[selectedRecipient].wallet;

  const handleSend = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    const ethAmount = (parseFloat(amount) / 2400).toFixed(6);
    await sendMoney(currentRecipientWallet || "0x0000000000000000000000000000000000000000", ethAmount);
  };

  return (
    <section className="relative w-full overflow-hidden bg-cod-gray-88 min-h-screen">
      <div className="bg-cod-gray-88 min-h-screen">
        <header className="sticky top-0 z-10 flex min-h-16 w-full items-center justify-center border-b border-[#1f1f1f] bg-cod-gray-88 backdrop-blur">
          <div className="flex w-full max-w-[1160px] items-center justify-between gap-6 px-6 py-3 xl:px-10">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
                <span className="text-[15px] font-semibold text-pampas">DiasporaConnect</span>
              </Link>
              <Badge className="rounded-full border border-[#fbbf2440] bg-[#1f1900] px-[7px] py-0.5 text-[9px] font-bold text-[#c4a35a]">
                EXPÉDITEUR
              </Badge>
            </div>
            <nav className="hidden items-center gap-0.5 px-2 md:flex">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={`rounded-lg px-3 py-1.5 text-[13px] ${item.active ? "bg-aztec text-tradewind" : "text-flint"}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col items-end mr-2">
                {account ? (
                  <span className="text-[10px] text-flint font-mono">{account.substring(0, 6)}...</span>
                ) : (
                  <Button onClick={connectWallet} variant="ghost" className="h-7 text-[11px] text-tradewind">Connecter Wallet</Button>
                )}
                <button onClick={toggleSimulationMode} className="text-[9px] text-tradewind-60 underline">
                  {isSimulationMode ? "Mode Simulation [ON]" : "Passer en Simulation"}
                </button>
              </div>
              <UserMenu />
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-[28px] font-medium text-pampas">Envoyer de l'argent</h1>
            <p className="text-sm text-flint">Transférez de l'argent vers l'Afrique de manière sécurisée.</p>
          </div>

          {/* SECTION FORMULAIRE PRINCIPAL */}
          {workflow === "form" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
              <div className="flex flex-col gap-5">
                {isSimulationMode && (
                  <div className="flex items-center gap-2 rounded-xl bg-aztec/30 border border-tradewind/20 px-4 py-3 text-tradewind text-xs">
                    <Info className="h-4 w-4" />
                    <span>Mode Démo actif : Les transactions sont simulées.</span>
                  </div>
                )}

                <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a]">
                  <CardContent className="flex flex-col gap-5 px-6 py-5">
                    <div className="text-[13px] font-semibold text-flint uppercase">Montant</div>
                    <div className="flex items-center gap-3 rounded-xl border border-[#2e2e2e] bg-[#212121] px-4 py-3">
                      <span className="text-[18px] text-flint">€</span>
                      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="flex-1 bg-transparent text-[32px] text-pampas outline-none" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#111] px-4 py-3">
                      <span className="text-xs text-flint">Le destinataire reçoit</span>
                      <span className="text-lg font-medium text-tradewind">{xofAmount} XOF</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a]">
                  <CardContent className="flex flex-col gap-4 px-6 py-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-flint">DESTINATAIRE</span>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedRecipient(selectedRecipient === "new" ? 0 : "new")} className="text-tradewind">
                        {selectedRecipient === "new" ? "← Contacts" : "+ Nouveau"}
                      </Button>
                    </div>

                    {selectedRecipient === "new" ? (
                      <div className="flex flex-col gap-3">
                        <Input placeholder="Nom complet" value={manualRecipient.name} onChange={(e) => setManualRecipient({ ...manualRecipient, name: e.target.value })} className="bg-[#212121]" />
                        <Input placeholder="Adresse Wallet (ETH)" value={manualRecipient.wallet} onChange={(e) => setManualRecipient({ ...manualRecipient, wallet: e.target.value })} className="bg-[#212121]" />
                      </div>
                    ) : (
                      <div className="grid gap-3">
                        {recipients.map((recipient, index) => (
                          <div key={index} onClick={() => setSelectedRecipient(index)} className={`flex p-4 rounded-xl border cursor-pointer ${selectedRecipient === index ? "border-tradewind bg-[#1f1f1f]" : "border-[#2e2e2e]"}`}>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-pampas">{recipient.name}</span>
                              <span className="text-xs text-flint">{recipient.phone}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button onClick={handleSend} className="w-full bg-tradewind text-black hover:bg-tradewind/90" disabled={status === "loading"}>
                      {status === "loading" ? <Loader2 className="animate-spin" /> : "Envoyer maintenant"}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* SIDEBAR INFOS */}
              <div className="flex flex-col gap-5">
                <Card className="bg-aztec border-none">
                  <CardContent className="p-5 flex flex-col gap-4">
                    <h3 className="text-pampas font-medium">Statut du transfert</h3>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${status === "success" ? "bg-green-500" : "bg-yellow-500"}`} />
                      <span className="text-sm text-pampas">{workflowStatus}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* VUE BLOCKCHAIN (LOADING) */}
          {workflow === "blockchain" && (
            <div className="flex flex-col items-center gap-8 py-12 text-center">
              <Loader2 className="h-16 w-16 animate-spin text-tradewind" />
              <h2 className="text-2xl text-pampas">Validation blockchain en cours...</h2>
              <p className="text-flint">Veuillez patienter pendant que la transaction est minée.</p>
            </div>
          )}

          {/* VUE SUCCÈS */}
          {workflow === "success" && (
            <div className="flex flex-col items-center gap-8 py-12">
               <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <CheckCircle2 size={48} />
               </div>
               <h2 className="text-3xl font-bold text-pampas">Transfert réussi !</h2>
               <p className="text-flint text-center max-w-md">
                 L'argent est en route vers {currentRecipientName}. <br/>
                 ID : <span className="font-mono text-xs">{txHash}</span>
               </p>
               <Button onClick={() => window.location.reload()} className="bg-tradewind text-black">
                 Faire un autre transfert
               </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};