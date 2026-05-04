import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Info, ShieldCheck, Zap, TrendingDown } from "lucide-react";
import { MobileLayout } from "@/components/ui/MobileLayout";

const stats = [
  { value: "0,2%", label: "Frais", icon: <TrendingDown className="h-3 w-3 text-tradewind" /> },
  { value: "12s", label: "Délai", icon: <Zap className="h-3 w-3 text-tradewind" /> },
  { value: "Safe", label: "Blockchain", icon: <ShieldCheck className="h-3 w-3 text-tradewind" /> },
];

export const AccueilMobileSidebarSection = (): JSX.Element => {
  return (
    <MobileLayout title="DiasporaConnect" role="EXPÉDITEUR">
      <div className="flex flex-col gap-6 p-5">
        {/* Hero Section */}
        <div className="flex flex-col gap-2">
          <h1 className="[font-family:'DM_Sans',Helvetica] text-3xl font-bold leading-tight tracking-tight text-pampas">
            Envoyez au Bénin.<br />
            <span className="text-tradewind">Sans intermédiaires.</span>
          </h1>
          <p className="text-sm text-flint leading-relaxed">
            La blockchain réduit les frais de transfert de 10% à <span className="text-pampas font-bold">0,2%</span>. Vos proches reçoivent plus d'argent, instantanément.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-3">
          <Button asChild className="h-12 w-full gap-2 rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind text-sm font-semibold">
            <Link href="/expediteur">
              Envoyer maintenant <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 w-full gap-2 rounded-xl border-[#2a2a2a] bg-transparent text-pampas hover:bg-[#1a1a1a] text-sm font-semibold">
            <Link href="/wallet">
              Accéder à mon Wallet
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-[#1f1f1f] bg-[#111] p-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              {s.icon}
              <span className="[font-family:'DM_Mono',Helvetica] text-[13px] font-bold text-pampas">{s.value}</span>
              <span className="text-[9px] text-flint uppercase tracking-wider font-semibold">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Role Explainer */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-[#6ec4a726] bg-aztec/30 p-5 flex flex-col gap-3">
            <Badge className="w-fit rounded-full border-[#6ec4a74c] bg-aztec text-tradewind text-[9px] font-bold">
              EXPÉDITEUR
            </Badge>
            <h3 className="text-pampas font-semibold text-lg">Je suis en Europe</h3>
            <p className="text-xs text-flint leading-relaxed">
              Saisissez le montant en Euros, visualisez la conversion en XOF et envoyez en 3 clics vers un numéro Mobile Money.
            </p>
          </div>

          <div className="rounded-2xl border border-[#fbbf2426] bg-[#1a1a14]/50 p-5 flex flex-col gap-3">
            <Badge className="w-fit rounded-full border-[#fbbf2440] bg-[#1f1900] text-[#c4a35a] text-[9px] font-bold">
              DESTINATAIRE
            </Badge>
            <h3 className="text-pampas font-semibold text-lg">Je suis au Bénin</h3>
            <p className="text-xs text-flint leading-relaxed">
              Consultez vos transferts reçus et retirez vos fonds instantanément vers MTN MoMo ou Moov Money.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-[#111] p-3 text-[10px] text-flint border border-[#1f1f1f]">
          <Info className="h-4 w-4 text-tradewind shrink-0" />
          <p>Utilise le réseau Sepolia Testnet pour des transactions sécurisées et gratuites en démonstration.</p>
        </div>
      </div>
    </MobileLayout>
  );
};
