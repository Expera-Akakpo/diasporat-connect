import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "0,2%", label: "Frais" },
  { value: "-91%", label: "Économies" },
  { value: "12s", label: "Délai" },
  { value: "500M$", label: "Volume" },
];

const roles = [
  {
    badge: "EXPÉDITEUR · DIASPORA",
    title: "J'envoie de l'argent",
    desc: "France, Belgique, Côte d'Ivoire, USA, Sénégal. Je saisie le montant, choisissez la devise et les frais et confirme en 3 clics.",
    badgeClass: "border-[#6ec4a74c] bg-aztec text-tradewind",
    cardClass: "border border-[#6ec4a726] bg-[#0d1a16]",
    ctaClass: "bg-tradewind text-[#0d0d0d] hover:bg-tradewind",
    href: "/expediteur",
  },
  {
    badge: "DESTINATAIRE · BÉNIN",
    title: "Je reçois de l'argent",
    desc: "Cotonou, Parakou, Porto-Novo. Consultez votre solde wallet, recevez directement et retrait vers votre Mobile Money en un clic.",
    badgeClass: "border-[#fbbf2440] bg-[#1f1900] text-[#c4a35a]",
    cardClass: "border border-[#fbbf2426] bg-[#1a1a14]",
    ctaClass: "border border-[#6ec4a74c] bg-transparent text-tradewind hover:bg-aztec",
    href: "/wallet",
  },
];

export const AccueilMobileSidebarSection = (): JSX.Element => {
  return (
    <div className="sticky top-0 flex h-screen flex-col gap-0 overflow-y-auto border-l border-[#1f1f1f] bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)] p-5">
      {/* Mobile device frame */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-4">
        {/* Status bar */}
        <div className="flex items-center justify-between">
          <span className="[font-family:'DM_Mono',Helvetica] text-[10px] text-flint">9:41</span>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-tradewind" />
            <span className="[font-family:'DM_Mono',Helvetica] text-[10px] text-flint">5G</span>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-2">
          <img className="h-6 w-6" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
          <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-semibold text-pampas">DiasporaConnect</span>
        </div>

        {/* Hero text */}
        <div className="flex flex-col gap-0.5">
          <p className="[font-family:'DM_Sans',Helvetica] text-[18px] font-medium leading-[1.2] tracking-[-0.4px] text-pampas">
            Envoyez au Bénin.
          </p>
          <p className="[font-family:'DM_Sans',Helvetica] text-[18px] font-medium leading-[1.2] tracking-[-0.4px] text-[#c4a35a]">
            Sans frais.
          </p>
          <p className="mt-1.5 [font-family:'DM_Sans',Helvetica] text-[10px] leading-[1.5] text-flint">
            La blockchain réduit les frais de transfert de 10% à 0,2%. Vos familles reçoivent plus.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2">
          <Button asChild className="h-8 w-full gap-1.5 rounded-lg bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
            <Link href="/expediteur" className="[font-family:'DM_Sans',Helvetica] text-[11px] font-medium">
              <ArrowRight className="h-3.5 w-3.5" /> Envoyer de l'argent
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-8 w-full gap-1.5 rounded-lg border-[#2a2a2a] bg-transparent text-pampas hover:bg-[#1a1a1a]">
            <Link href="/wallet" className="[font-family:'DM_Sans',Helvetica] text-[11px] font-medium">
              <ArrowRight className="h-3.5 w-3.5 text-flint" /> Je reçois de l'argent
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-[#1f1f1f] bg-[#111] p-2.5">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center gap-0.5 ${i < stats.length - 1 ? "border-r border-[#1f1f1f]" : ""}`}>
              <span className="[font-family:'DM_Mono',Helvetica] text-[11px] font-medium text-pampas">{s.value}</span>
              <span className="[font-family:'DM_Sans',Helvetica] text-[8px] text-flint">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Role cards */}
        {roles.map((role) => (
          <div key={role.title} className={`flex flex-col gap-3 rounded-xl p-3.5 ${role.cardClass}`}>
            <Badge className={`w-fit rounded border px-2 py-[2px] [font-family:'DM_Sans',Helvetica] text-[8px] font-bold tracking-[0.6px] hover:bg-inherit ${role.badgeClass}`}>
              {role.badge}
            </Badge>
            <div className="flex flex-col gap-1">
              <p className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-pampas">{role.title}</p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[10px] leading-[1.5] text-flint">{role.desc}</p>
            </div>
            <Button asChild className={`h-7 w-fit gap-1 rounded-lg px-3 [font-family:'DM_Sans',Helvetica] text-[10px] font-medium ${role.ctaClass}`}>
              <Link href={role.href}>
                Accéder <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        ))}

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-[#1f1f1f] pt-3">
          {[
            { label: "Accueil", icon: "/figmaAssets/svg.svg", active: true, href: "/" },
            { label: "Envoyer", icon: "/figmaAssets/svg-1.svg", active: false, href: "/expediteur" },
            { label: "Recevoir", icon: "/figmaAssets/svg-2.svg", active: false, href: "/wallet" },
            { label: "Historique", icon: "/figmaAssets/svg-3.svg", active: false, href: "/historique" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1">
              <img className="h-4 w-4" alt={item.label} src={item.icon} />
              <span className={`[font-family:'DM_Sans',Helvetica] text-[8px] ${item.active ? "text-tradewind" : "text-flint"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
