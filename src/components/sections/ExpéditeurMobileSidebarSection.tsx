import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { useTransfer } from "@/hooks/useTransfer";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Info, UserPlus, Users } from "lucide-react";

const recipients = [
  { avatarSrc: "/figmaAssets/background-border-6.svg", name: "Amadou Mbaye", phone: "+221 77 000 00 00", country: "🇸🇳 Sénégal", wallet: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e" },
  { avatarSrc: "/figmaAssets/background-border-1.svg", name: "Fatou Diallo", phone: "+225 07 000 00 00", country: "🇨🇮 Côte d'Ivoire", wallet: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC" },
];

export const ExpéditeurMobileSidebarSection = (): JSX.Element => {
  const [amount, setAmount] = useState("");
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

  const xofAmount = amount ? Math.round(parseFloat(amount.replace(",", ".")) * 655).toLocaleString("fr-FR") : "—";
  const fees = amount ? (parseFloat(amount.replace(",", ".")) * 0.002).toFixed(2) : "0.00";

  const currentRecipientWallet = selectedRecipient === "new" ? manualRecipient.wallet : recipients[selectedRecipient].wallet;

  const handleSend = async () => {
    if (!amount || parseFloat(amount) <= 0) return;
    const ethAmount = (parseFloat(amount) / 2400).toFixed(6);
    await sendMoney(currentRecipientWallet || "0x0000000000000000000000000000000000000000", ethAmount);
  };

  return (
    <MobileLayout 
      title="Envoi d'argent" 
      role="EXPÉDITEUR"
      headerAction={
        <div className="flex flex-col items-end">
          <button 
            onClick={toggleSimulationMode}
            className="text-[9px] text-tradewind-60 underline hover:text-tradewind"
          >
            {isSimulationMode ? "Mode Démo" : "Passer en Démo"}
          </button>
          {!account && (
            <button onClick={connectWallet} className="text-[10px] text-tradewind font-medium">
              Connecter
            </button>
          )}
        </div>
      }
    >
      <div className="flex flex-col gap-4 p-4">
        {isSimulationMode && (
          <div className="flex items-start gap-2 rounded-xl bg-aztec/30 border border-tradewind/20 p-3 text-tradewind text-[11px]">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Mode simulation actif. Les transactions sont fictives.</span>
          </div>
        )}

        <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
          <CardContent className="flex flex-col gap-4 px-4 py-4">
            <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">
              Montant à envoyer
            </p>
            <div className="flex items-center gap-2 rounded-xl border border-[#2e2e2e] bg-[#212121] px-3 py-2.5">
              <span className="[font-family:'DM_Sans',Helvetica] text-[16px] text-flint">€</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="flex-1 bg-transparent [font-family:'DM_Mono',Helvetica] text-[24px] font-medium text-pampas outline-none placeholder:text-[#3a3a3a]"
              />
              <span className="text-[10px] text-flint bg-[#2a2a2a] px-2 py-0.5 rounded-full">EUR</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#111] px-3 py-2">
              <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">Le destinataire reçoit</span>
              <span className="[font-family:'DM_Mono',Helvetica] text-[14px] font-medium text-tradewind">{xofAmount} XOF</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
          <CardContent className="flex flex-col gap-3 px-4 py-4">
            <div className="flex items-center justify-between">
              <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">
                Destinataire
              </p>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedRecipient(selectedRecipient === "new" ? 0 : "new")}
                className="h-6 text-[10px] text-tradewind px-0"
              >
                {selectedRecipient === "new" ? "← Liste" : "+ Nouveau"}
              </Button>
            </div>

            {selectedRecipient === "new" ? (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <Label className="text-[10px] text-flint ml-1">Nom complet</Label>
                  <Input
                    placeholder="Jean Dupont"
                    value={manualRecipient.name}
                    onChange={(e) => setManualRecipient({ ...manualRecipient, name: e.target.value })}
                    className="h-9 rounded-xl border-[#2e2e2e] bg-[#212121] text-xs text-pampas"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-[10px] text-flint ml-1">Adresse Wallet</Label>
                  <Input
                    placeholder="0x..."
                    value={manualRecipient.wallet}
                    onChange={(e) => setManualRecipient({ ...manualRecipient, wallet: e.target.value })}
                    className="h-9 rounded-xl border-[#2e2e2e] bg-[#212121] text-xs text-pampas font-mono"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {recipients.map((r, i) => (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setSelectedRecipient(i)}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                      selectedRecipient === i
                        ? "border-[#6ec4a766] bg-aztec"
                        : "border-[#2e2e2e] bg-[#212121]"
                    }`}
                  >
                    <img className="h-8 w-8 shrink-0" alt={r.name} src={r.avatarSrc} />
                    <div className="flex flex-1 flex-col">
                      <span className={`[font-family:'DM_Sans',Helvetica] text-[12px] font-medium ${selectedRecipient === i ? "text-tradewind" : "text-pampas"}`}>
                        {r.name}
                      </span>
                      <span className="text-[10px] text-flint">
                        {r.phone} · {r.country}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
          <CardContent className="flex flex-col gap-3 px-4 py-4">
            <div className="flex flex-col gap-2 border-b border-[#1f1f1f] pb-3">
              {[
                { label: "Envoi", value: `€${amount || "0.00"}` },
                { label: "Frais", value: `€${fees}` },
                { label: "Délai", value: "Instantané" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between text-[11px]">
                  <span className="text-flint">{row.label}</span>
                  <span className="text-pampas font-mono">{row.value}</span>
                </div>
              ))}
            </div>

            {status === "idle" && (
              <Button
                onClick={handleSend}
                className="h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind"
                disabled={!amount || parseFloat(amount) <= 0}
              >
                <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">Envoyer maintenant</span>
              </Button>
            )}

            {(status === "loading" || status === "connecting") && (
              <Button disabled className="h-11 w-full rounded-xl bg-aztec text-tradewind">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {status === "connecting" ? "Connexion..." : "Envoi en cours..."}
              </Button>
            )}

            {status === "success" && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-aztec/50 p-3 text-tradewind border border-tradewind/20">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[11px] font-bold">Transfert Confirmé</span>
                    <span className="text-[9px] font-mono truncate">{txHash}</span>
                  </div>
                </div>
                <Button onClick={() => window.location.reload()} variant="outline" className="w-full h-8 text-[11px] border-[#2e2e2e] text-flint">
                  Nouveau transfert
                </Button>
              </div>
            )}

            {status === "error" && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-red-900/20 p-3 text-red-400 border border-red-900/40">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span className="text-[11px]">{error || "Erreur lors de l'envoi"}</span>
                </div>
                <Button onClick={handleSend} className="w-full h-9 bg-tradewind text-[#0d0d0d] text-[11px]">
                  Réessayer
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};
