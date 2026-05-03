import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const summaryCards = [
  {
    title: "Reçu ce mois",
    value: "445 143",
    footer: "XOF",
    valueClassName: "text-tradewind",
    footerType: "text",
  },
  {
    title: "En attente",
    value: "131 284",
    footer: "À retirer",
    valueClassName: "text-[#c4a35a]",
    footerType: "badge",
  },
] as const;

const filters = ["Tout", "Reçu", "Retiré", "En attente"] as const;

const transfers = [
  {
    avatarSrc: "/figmaAssets/background-border-5.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "Aujourd'hui · 09:40 · €200",
    amount: "+131 284",
    amountClassName: "text-tradewind",
    status: "Reçu",
    statusClassName: "bg-aztec text-tradewind border-[#6ec4a74c]",
  },
  {
    avatarSrc: "/figmaAssets/background-border.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "8 Avr · 08:12 · €250",
    amount: "+163 989",
    amountClassName: "text-pampas",
    status: "Retiré",
    statusClassName: "bg-racing-green text-shamrock border-[#4ade8040]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-3.svg",
    name: "Kouassi Georges 🇫🇷",
    meta: "2 Avr · 11:46 · €150",
    amount: "+98 394",
    amountClassName: "text-bronco",
    status: "Retiré",
    statusClassName: "bg-racing-green text-shamrock border-[#4ade8040]",
  },
  {
    avatarSrc: "/figmaAssets/background-border-8.svg",
    name: "Aminata Diallo 🇨🇮",
    meta: "28 Mar · 16:20 · €80",
    amount: "+52 476",
    amountClassName: "text-flint",
    status: "Attente",
    statusClassName: "bg-[#1f1900] text-lightning-yellow border-[#fbbf2440]",
  },
] as const;

const bottomNavItems = [
  {
    label: "Wallet",
    href: "/wallet",
    icon: "/figmaAssets/svg.svg",
    active: false,
  },
  {
    label: "Retrait",
    href: "/retrait",
    icon: "/figmaAssets/svg-2.svg",
    active: false,
  },
  {
    label: "Historique",
    href: "/historique",
    icon: "/figmaAssets/svg-3.svg",
    active: true,
  },
  {
    label: "Expéditeur",
    href: "/expediteur",
    icon: "/figmaAssets/svg-1.svg",
    active: false,
  },
] as const;

export const TransferSummarySidebarSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden border border-[#0000001a] bg-white">
      <div className="flex w-full justify-end bg-black px-2 py-0 sm:px-4">
        <div className="flex w-full max-w-[358px] justify-center pb-1.5">
          <article className="flex min-h-[814px] w-full flex-col overflow-hidden rounded-[36px] border border-solid border-[#2a2a2a] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(44,34,24,1)_0%,rgba(17,17,16,1)_100%)] shadow-[0px_32px_80px_#000000cc]">
            <header className="flex h-11 items-end justify-between bg-[#0d0d0d] px-5 pb-2">
              <div className="w-fit [font-family:'DM_Sans',Helvetica] text-[13px] font-semibold leading-[normal] tracking-[0] text-pampas">
                9:41
              </div>
              <img
                className="shrink-0"
                alt="Container"
                src="/figmaAssets/container-1.svg"
              />
            </header>
            <div className="flex h-14 items-center justify-between border-b border-[#1f1f1f] bg-[#0d0d0d] pl-[18px] pr-[18.01px]">
              <img
                className="h-[34px] w-[34px] shrink-0"
                alt="Link"
                src="/figmaAssets/link.svg"
              />
              <h2 className="[font-family:'DM_Sans',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-pampas">
                Transferts reçus
              </h2>
              <Button
                asChild
                variant="ghost"
                className="h-auto rounded-full border border-solid border-[#6ec4a759] bg-aztec px-3 py-[5px] hover:bg-aztec"
              >
                <Link
                  className="[font-family:'DM_Sans',Helvetica] text-[11px] font-semibold leading-[11px] tracking-[0] text-tradewind"
                  href="/retrait"
                >
                  Retirer
                </Link>
              </Button>
            </div>
            <main className="flex-1 overflow-hidden">
              <div className="flex h-full flex-col gap-2.5 overflow-y-auto p-4">
                <div className="grid grid-cols-2 gap-2">
                  {summaryCards.map((card) => (
                    <Card
                      key={card.title}
                      className="rounded-xl border border-solid border-[#1f1f1f] bg-[#212121] shadow-none"
                    >
                      <CardContent className="flex h-[84px] flex-col items-start gap-[3px] px-3 py-[13px]">
                        <div className="w-full font-DM-sans-regular text-[length:var(--DM-sans-regular-font-size)] font-[number:var(--DM-sans-regular-font-weight)] leading-[var(--DM-sans-regular-line-height)] tracking-[var(--DM-sans-regular-letter-spacing)] text-flint [font-style:var(--DM-sans-regular-font-style)]">
                          {card.title}
                        </div>
                        <div
                          className={`w-full [font-family:'DM_Mono',Helvetica] text-base font-medium leading-4 tracking-[0] ${card.valueClassName}`}
                        >
                          {card.value}
                        </div>
                        {card.footerType === "text" ? (
                          <div className="w-full font-DM-mono-regular text-[length:var(--DM-mono-regular-font-size)] font-[number:var(--DM-mono-regular-font-weight)] leading-[var(--DM-mono-regular-line-height)] tracking-[var(--DM-mono-regular-letter-spacing)] text-flint [font-style:var(--DM-mono-regular-font-style)]">
                            {card.footer}
                          </div>
                        ) : (
                          <Badge className="rounded border border-solid border-[#fbbf2440] bg-[#1f1900] px-[7px] py-0.5 [font-family:'DM_Mono',Helvetica] text-[10px] font-medium leading-[normal] tracking-[0.50px] text-lightning-yellow hover:bg-[#1f1900]">
                            {card.footer}
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <nav
                  aria-label="Filtres des transferts"
                  className="overflow-x-auto"
                >
                  <div className="flex w-max items-start gap-1.5 py-1">
                    {filters.map((filter, index) => {
                      const active = index === 0;

                      return (
                        <Button
                          key={filter}
                          type="button"
                          variant="ghost"
                          className={`h-auto rounded-full border border-solid px-3 py-[5px] hover:bg-transparent ${
                            active
                              ? "border-[#6ec4a766] bg-aztec text-tradewind hover:bg-aztec"
                              : "border-[#2e2e2e] bg-transparent text-flint"
                          }`}
                        >
                          <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[normal] tracking-[0]">
                            {filter}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </nav>
                <Card className="rounded-2xl border border-solid border-[#2e2e2e] bg-[#1a1a1a7d] shadow-none">
                  <CardContent className="px-[15px] pb-0 pt-1">
                    <ul className="flex flex-col">
                      {transfers.map((transfer, index) => (
                        <li
                          key={`${transfer.name}-${transfer.meta}`}
                          className={`flex items-center gap-2.5 py-2.5 ${
                            index !== transfers.length - 1
                              ? "border-b border-[#1f1f1f]"
                              : ""
                          }`}
                        >
                          <img
                            className="h-[34px] w-[34px] shrink-0"
                            alt={transfer.name}
                            src={transfer.avatarSrc}
                          />
                          <div className="flex min-w-0 flex-1 flex-col gap-px">
                            <p className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium leading-[normal] tracking-[0] text-pampas">
                              {transfer.name}
                            </p>
                            <p className="font-DM-sans-regular text-[length:var(--DM-sans-regular-font-size)] font-[number:var(--DM-sans-regular-font-weight)] leading-[var(--DM-sans-regular-line-height)] tracking-[var(--DM-sans-regular-letter-spacing)] text-flint [font-style:var(--DM-sans-regular-font-style)]">
                              {transfer.meta}
                            </p>
                          </div>
                          <div className="flex shrink-0 flex-col items-end gap-[3px]">
                            <p
                              className={`[font-family:'DM_Mono',Helvetica] text-[13px] font-medium leading-[normal] tracking-[0] ${transfer.amountClassName}`}
                            >
                              {transfer.amount}
                            </p>
                            <Badge
                              className={`rounded border border-solid px-[7px] py-0.5 [font-family:'DM_Sans',Helvetica] text-[10px] font-bold leading-[normal] tracking-[0.50px] hover:bg-inherit ${transfer.statusClassName}`}
                            >
                              {transfer.status}
                            </Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border border-solid border-[#6ec4a726] bg-aztec shadow-none">
                  <CardContent className="flex flex-col items-start gap-[3px] px-[15px] py-3.5">
                    <p className="font-DM-sans-bold-upper text-[length:var(--DM-sans-bold-upper-font-size)] font-[number:var(--DM-sans-bold-upper-font-weight)] leading-[var(--DM-sans-bold-upper-line-height)] tracking-[var(--DM-sans-bold-upper-letter-spacing)] text-tradewind-60 [font-style:var(--DM-sans-bold-upper-font-style)]">
                      IMPACT CE MOIS
                    </p>
                    <p className="[font-family:'DM_Mono',Helvetica] text-[26px] font-medium leading-[normal] tracking-[0] text-tradewind">
                      68 600 XOF
                    </p>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[normal] tracking-[0] text-elm">
                      économisés vs services traditionnels
                    </p>
                    <Badge className="rounded border border-solid border-[#6ec4a74c] bg-aztec px-2.5 py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold leading-[normal] tracking-[0.50px] text-tradewind hover:bg-aztec">
                      Objectif ODD 10 : &lt; 3% ✓
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </main>
            <footer className="flex h-16 items-center justify-between border-t border-[#1f1f1f] bg-[#0d0d0d] px-4 pb-1.5 pt-0">
              {bottomNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex min-w-0 flex-col items-center gap-[3px] rounded-xl px-3 py-1.5"
                >
                  <img
                    className="h-5 w-5 shrink-0"
                    alt={item.label}
                    src={item.icon}
                  />
                  <span
                    className={`[font-family:'DM_Sans',Helvetica] text-[10px] leading-[normal] tracking-[0] ${
                      item.active
                        ? "font-medium text-tradewind"
                        : "font-medium text-masala"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};
