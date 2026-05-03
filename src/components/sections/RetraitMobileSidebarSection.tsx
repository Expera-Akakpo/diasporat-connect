import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MobileLayout } from "@/components/ui/MobileLayout";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Smartphone } from "lucide-react";

const providers = [
  { name: "MTN MoMo", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MTN_Logo.svg", color: "#FFCC00" },
  { name: "Moov Money", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Moov_Logo.svg/1200px-Moov_Logo.svg.png", color: "#0055A4" },
  { name: "Wave", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Wave_Logo.svg", color: "#1E90FF" },
];

export const RetraitMobileSidebarSection = (): JSX.Element => {
  const [amount, setAmount] = useState("");
  const [selectedProvider, setSelectedProvider] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleWithdraw = async () => {
    if (!amount || !phoneNumber) return;
    setStatus("loading");
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("success");
  };

  return (
    <MobileLayout title="Retirer des fonds" role="DESTINAIRE">
      <div className="flex flex-col gap-4 p-4">
        <Card className="rounded-2xl border border-[#6ec4a726] bg-aztec shadow-none">
          <CardContent className="flex flex-col gap-1 px-4 py-4">
            <span className="text-[10px] font-bold tracking-[0.80px] text-flint uppercase">Solde disponible</span>
            <div className="flex items-baseline gap-2">
              <span className="[font-family:'DM_Mono',Helvetica] text-2xl font-medium text-tradewind">131 284</span>
              <span className="text-[10px] text-flint font-mono">XOF</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
          <CardContent className="flex flex-col gap-4 px-4 py-4">
            <div className="flex flex-col gap-1">
              <Label className="text-[11px] font-semibold tracking-[0.80px] text-flint uppercase ml-1">Montant à retirer</Label>
              <div className="flex items-center gap-2 rounded-xl border border-[#2e2e2e] bg-[#212121] px-3 py-2.5">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  className="flex-1 bg-transparent [font-family:'DM_Mono',Helvetica] text-[24px] font-medium text-pampas outline-none placeholder:text-[#3a3a3a]"
                />
                <span className="text-[10px] text-flint bg-[#2a2a2a] px-2 py-0.5 rounded-full font-mono">XOF</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[11px] font-semibold tracking-[0.80px] text-flint uppercase ml-1">Fournisseur</Label>
              <div className="grid grid-cols-3 gap-2">
                {providers.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedProvider(i)}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-2 transition-all ${
                      selectedProvider === i ? "border-tradewind bg-aztec" : "border-[#2e2e2e] bg-[#212121]"
                    }`}
                  >
                    <div className="h-6 w-6 overflow-hidden rounded-md bg-white p-0.5">
                      <img src={p.icon} alt={p.name} className="h-full w-full object-contain" />
                    </div>
                    <span className={`text-[9px] font-medium ${selectedProvider === i ? "text-tradewind" : "text-flint"}`}>
                      {p.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-[11px] font-semibold tracking-[0.80px] text-flint uppercase ml-1">Numéro de téléphone</Label>
              <div className="flex items-center gap-2 rounded-xl border border-[#2e2e2e] bg-[#212121] px-3 py-2.5">
                <Smartphone className="h-4 w-4 text-flint" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+229 00 00 00 00"
                  className="flex-1 bg-transparent text-sm text-pampas outline-none"
                />
              </div>
            </div>

            {status === "idle" && (
              <Button
                onClick={handleWithdraw}
                className="h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind"
                disabled={!amount || !phoneNumber}
              >
                <span className="text-[13px] font-medium font-sans">Retirer maintenant</span>
              </Button>
            )}

            {status === "loading" && (
              <Button disabled className="h-11 w-full rounded-xl bg-aztec text-tradewind">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Traitement...
              </Button>
            )}

            {status === "success" && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-aztec/50 p-3 text-tradewind border border-tradewind/20">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold">Demande envoyée</span>
                    <span className="text-[10px]">Fonds disponibles sous peu.</span>
                  </div>
                </div>
                <Button onClick={() => window.location.reload()} variant="outline" className="w-full h-8 text-[11px] border-[#2e2e2e] text-flint">
                  Retour au wallet
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-[10px] text-flint px-4">
          Le transfert vers votre compte Mobile Money est quasi-instantané après validation.
        </p>
      </div>
    </MobileLayout>
  );
};
