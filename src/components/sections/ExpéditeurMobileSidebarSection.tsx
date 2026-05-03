import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

const bottomNavItems = [
  { label: "Envoyer", id: "send", icon: "/figmaAssets/svg-4.svg" },
  { label: "Historique", id: "history", icon: "/figmaAssets/svg-3.svg" },
] as const;

export const ExpéditeurMobileSidebarSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"send" | "history">("send");
  const [recipientMode, setRecipientMode] = useState<"list" | "new">("list");
  const [manualRecipient, setManualRecipient] = useState({ name: "", phone: "" });

  const transfers = [
    { recipient: "Amadou Mbaye", date: "Aujourd'hui, 14:20", amount: "€200.00", status: "Terminé" },
    { recipient: "Fatou Diallo", date: "Hier, 09:15", amount: "€100.00", status: "Terminé" },
  ];

  return (
    <section className="relative w-full overflow-hidden border border-[#0000001a] bg-white">
      <div className="flex w-full justify-end bg-black px-2 py-0 sm:px-4">
        <div className="flex w-full max-w-[358px] justify-center pb-1.5">
          <article className="flex min-h-[814px] w-full flex-col overflow-hidden rounded-[36px] border border-solid border-[#2a2a2a] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(24,20,10,1)_0%,rgba(17,17,16,1)_100%)] shadow-[0px_32px_80px_#000000cc]">
            <header className="flex h-11 items-end justify-between bg-[#0d0d0d] px-5 pb-2">
              <div className="w-fit [font-family:'DM_Sans',Helvetica] text-[13px] font-semibold text-pampas">9:41</div>
              <img className="shrink-0" alt="Container" src="/figmaAssets/container-1.svg" />
            </header>
            <div className="flex h-14 items-center justify-between border-b border-[#1f1f1f] bg-[#0d0d0d] pl-[18px] pr-[18.01px]">
              <img className="h-[34px] w-[34px] shrink-0" alt="Logo" src="/figmaAssets/link.svg" />
              <h2 className="[font-family:'DM_Sans',Helvetica] text-base font-medium text-pampas">
                {activeTab === "send" ? (recipientMode === "new" ? "Nouveau destinataire" : "Envoi d'argent") : "Mon Historique"}
              </h2>
              <Badge className="rounded-full border border-[#fbbf2440] bg-[#1f1900] px-2 py-0.5 [font-family:'DM_Sans',Helvetica] text-[9px] font-bold text-[#c4a35a] hover:bg-[#1f1900]">
                EXP
              </Badge>
            </div>
            <main className="flex-1 overflow-hidden">
              <div className="flex h-full flex-col gap-3 overflow-y-auto p-4">
                {activeTab === "send" ? (
                  <>
                    {recipientMode === "list" ? (
                      <>
                        <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                          <CardContent className="flex flex-col gap-3 px-4 py-4">
                            <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Montant à envoyer</p>
                            <div className="flex items-center gap-2 rounded-xl border border-[#2e2e2e] bg-[#212121] px-3 py-2.5">
                              <span className="[font-family:'DM_Sans',Helvetica] text-[16px] text-flint">€</span>
                              <span className="[font-family:'DM_Mono',Helvetica] text-[24px] font-medium text-pampas">200.00</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#111] px-3 py-2">
                              <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">Reçu</span>
                              <span className="[font-family:'DM_Mono',Helvetica] text-[14px] font-medium text-tradewind">131 000 XOF</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                          <CardContent className="flex flex-col gap-3 px-4 py-4">
                            <div className="flex items-center justify-between">
                              <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Destinataire</p>
                              <button onClick={() => setRecipientMode("new")} className="text-[10px] text-tradewind font-medium">+ Nouveau</button>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl border border-[#6ec4a766] bg-aztec px-3 py-2.5">
                              <img className="h-8 w-8 shrink-0" alt="Amadou" src="/figmaAssets/background-border-6.svg" />
                              <div className="flex flex-col">
                                <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-tradewind">Amadou Mbaye</span>
                                <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">🇸🇳 Sénégal · MTN MoMo</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </>
                    ) : (
                      <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none animate-in slide-in-from-right-4 duration-300">
                        <CardContent className="flex flex-col gap-4 px-4 py-4">
                          <div className="flex items-center justify-between">
                            <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold tracking-[0.80px] text-flint uppercase">Informations</p>
                            <button onClick={() => setRecipientMode("list")} className="text-[10px] text-flint font-medium">Annuler</button>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-flint">Nom complet</span>
                            <input 
                              className="w-full bg-[#212121] border border-[#2e2e2e] rounded-lg px-3 py-2 text-pampas text-xs outline-none focus:border-tradewind" 
                              placeholder="Jean Dupont"
                              value={manualRecipient.name}
                              onChange={(e) => setManualRecipient({ ...manualRecipient, name: e.target.value })}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-flint">Numéro Mobile Money</span>
                            <input 
                              className="w-full bg-[#212121] border border-[#2e2e2e] rounded-lg px-3 py-2 text-pampas text-xs outline-none focus:border-tradewind" 
                              placeholder="+229 ..."
                              value={manualRecipient.phone}
                              onChange={(e) => setManualRecipient({ ...manualRecipient, phone: e.target.value })}
                            />
                          </div>
                          <Button size="sm" onClick={() => setRecipientMode("list")} className="h-8 bg-tradewind text-[#0d0d0d] text-[11px]">Confirmer ce choix</Button>
                        </CardContent>
                      </Card>
                    )}

                    <Button className="h-11 w-full rounded-xl bg-tradewind text-[#0d0d0d] hover:bg-tradewind">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">Envoyer maintenant</span>
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col gap-3">
                    {transfers.map((t, i) => (
                      <Card key={i} className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
                        <CardContent className="flex items-center justify-between px-4 py-4">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-pampas font-medium [font-family:'DM_Sans',Helvetica] text-[13px]">{t.recipient}</span>
                            <span className="text-flint [font-family:'DM_Sans',Helvetica] text-[11px]">{t.date}</span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-tradewind font-medium [font-family:'DM_Mono',Helvetica] text-[13px]">{t.amount}</span>
                            <Badge className="bg-aztec text-tradewind border-[#6ec4a74c] text-[9px] px-1.5 py-0">Terminé</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                <Card className="rounded-2xl border border-solid border-[#6ec4a726] bg-aztec shadow-none mt-auto">
                  <CardContent className="flex flex-col gap-[3px] px-4 py-3.5">
                    <p className="[font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.80px] text-tradewind-60 uppercase">Économies réalisées</p>
                    <p className="[font-family:'DM_Mono',Helvetica] text-[22px] font-medium text-tradewind">68 600 XOF</p>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] text-elm">économisés ce mois</p>
                  </CardContent>
                </Card>
              </div>
            </main>
            <footer className="flex h-16 items-center justify-around border-t border-[#1f1f1f] bg-[#0d0d0d] px-4 pb-1.5 pt-0">
              {bottomNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="inline-flex min-w-0 flex-col items-center gap-[3px] rounded-xl px-6 py-1.5"
                >
                  <img className="h-5 w-5 shrink-0" alt={item.label} src={item.icon} />
                  <span className={`[font-family:'DM_Sans',Helvetica] text-[10px] leading-[normal] font-medium ${activeTab === item.id ? "text-tradewind" : "text-masala"}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};
