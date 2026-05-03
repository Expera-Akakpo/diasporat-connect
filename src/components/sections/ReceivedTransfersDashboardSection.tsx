import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { UserMenu } from "@/components/UserMenu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const ReceivedTransfersDashboardSection = (): JSX.Element => {
  const summaryCards = [
    {
      title: "Reçu ce mois",
      value: "445 143",
      subtitle: "XOF · 4 transferts",
      valueClassName: "text-pampas",
      footer: null,
    },
    {
      title: "Retraits effectués",
      value: "262 383",
      subtitle: "XOF · MTN MoMo",
      valueClassName: "text-pampas",
      footer: null,
    },
    {
      title: "En attente retrait",
      value: "131 284",
      subtitle: null,
      valueClassName: "text-pampas",
      footer: (
        <Badge className="rounded border border-[#fbbf2440] bg-[#1f1900] px-[9px] py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.60px] text-[#c4a35a] hover:bg-[#1f1900]">
          À retirer
        </Badge>
      ),
    },
  ];

  const filters = ["Tout", "Reçu", "Retiré", "En attente"];

  const rows = [
    {
      avatar: "/figmaAssets/background-border-6.svg",
      sender: "Kouassi Georges 🇫🇷",
      detail: "De €200.00 · Frais €0.40",
      date: "Aujourd'hui",
      time: "09:40",
      amount: "131 284",
      amountClassName: "text-tradewind",
      source: "🇫🇷 France",
      withdrawal: "En attente",
      withdrawalClassName: "[font-family:'DM_Sans',Helvetica] text-[#c4a35a]",
      status: "Reçu",
      statusClassName:
        "border-[#6ec4a74c] bg-aztec text-tradewind hover:bg-aztec",
    },
    {
      avatar: "/figmaAssets/background-border-1.svg",
      sender: "Kouassi Georges 🇫🇷",
      detail: "De €250.00 · Frais €0.50",
      date: "8 Avr",
      time: "08:12",
      amount: "163 989",
      amountClassName: "text-pampas",
      source: "🇫🇷 France",
      withdrawal: "MTN MoMo ✓",
      withdrawalClassName: "[font-family:'DM_Mono',Helvetica] text-tradewind",
      status: "Retiré",
      statusClassName:
        "border-[#4ade8040] bg-racing-green text-shamrock hover:bg-racing-green",
    },
    {
      avatar: "/figmaAssets/background-border-9.svg",
      sender: "Kouassi Georges 🇫🇷",
      detail: "De €150.00 · Frais €0.30",
      date: "2 Avr",
      time: "11:46",
      amount: "98 394",
      amountClassName: "text-bronco",
      source: "🇫🇷 France",
      withdrawal: "MTN MoMo ✓",
      withdrawalClassName: "[font-family:'DM_Mono',Helvetica] text-tradewind",
      status: "Retiré",
      statusClassName:
        "border-[#4ade8040] bg-racing-green text-shamrock hover:bg-racing-green",
    },
    {
      avatar: "/figmaAssets/background-border-4.svg",
      sender: "Aminata Diallo 🇨🇮",
      detail: "De €80.00 · Frais €0.16",
      date: "28 Mar",
      time: "16:20",
      amount: "52 476",
      amountClassName: "text-flint",
      source: "🇨🇮 Côte d'Ivoire",
      withdrawal: "Wallet",
      withdrawalClassName: "[font-family:'DM_Sans',Helvetica] text-flint",
      status: "En attente",
      statusClassName:
        "border-[#fbbf2440] bg-[#1f1900] text-[#c4a35a] hover:bg-[#1f1900]",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Tout");

  const filteredRows = useMemo(() => {
    if (activeFilter === "Tout") return rows;
    if (activeFilter === "Reçu") {
      return rows.filter((row) => row.status === "Reçu");
    }
    if (activeFilter === "Retiré") {
      return rows.filter((row) => row.status === "Retiré");
    }
    return rows.filter((row) => row.status === "En attente");
  }, [activeFilter]);

  const navItems = [
    { label: "Mon Wallet", href: "/wallet", active: false, underlined: true },
    { label: "Retrait", href: "/retrait", active: false, underlined: false },
    { label: "Historique", href: "/historique", active: true, underlined: true },
  ];

  const footerLinks = [
    { label: "Accueil", href: "/" },
    { label: "Expéditeur", href: "/expediteur" },
    { label: "Destinataire", href: "/wallet" },
  ];

  return (
    <section className="relative w-full overflow-hidden rounded-sm border border-[#0000001a] bg-white">
      <div className="min-h-[953px] w-full border border-black bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] bg-white-cod-gray">
        <header className="sticky top-0 z-10 flex min-h-16 w-full items-center justify-center border-b border-[#1f1f1f] bg-cod-gray-88 backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
          <div className="flex w-full max-w-[1160px] items-center justify-between gap-6 px-6 py-3 xl:px-10">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <Link
                className="inline-flex items-center gap-2.5"
                href="/"
              >
                <img
                  className="h-8 w-8"
                  alt="Background border"
                  src="/figmaAssets/background-border-7.svg"
                />
                <span className="[font-family:'DM_Sans',Helvetica] text-[15px] font-semibold tracking-[-0.05px] leading-[22.5px] text-pampas">
                  DiasporaConnect
                </span>
              </Link>
              <Badge className="rounded-full border border-[#6ec4a74c] bg-aztec px-[7px] py-0.5 [font-family:'DM_Sans',Helvetica] text-[9px] font-bold tracking-[0.90px] text-tradewind hover:bg-aztec">
                DESTINATAIRE
              </Badge>
            </div>
            <nav
              className="hidden items-center gap-0.5 px-2 md:flex"
              aria-label="Navigation principale"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex rounded-lg px-3 py-1.5 [font-family:'DM_Sans',Helvetica] text-[13px] leading-[19.5px] ${
                    item.active ? "bg-aztec text-tradewind" : "text-flint"
                  }`}
                >
                  <span className={item.underlined ? "underline" : ""}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2.5">
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-full border-[#2e2e2e] bg-transparent px-4 py-[7px] hover:bg-transparent"
              >
                <Link
                  href="/expediteur"
                  className="[font-family:'DM_Sans',Helvetica] text-xs font-medium text-twine"
                >
                  ← Interface Expéditeur
                </Link>
              </Button>
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#6ec4a7] bg-aztec">
                <span className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold leading-[16.5px] text-tradewind">
                  AM
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-5 px-6 pb-20 pt-12 xl:px-10">
          <div className="flex flex-col gap-2.5">
            <Breadcrumb>
              <BreadcrumbList className="gap-1.5">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint"
                  >
                    Accueil
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-[11px] text-[#3d3d3d]">
                  /
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint"
                  >
                    Mon Wallet
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-[11px] text-[#3d3d3d]">
                  /
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                    Historique reçus
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-1 pt-2">
                <h1 className="[font-family:'DM_Sans',Helvetica] text-[28px] font-medium tracking-[-0.56px] leading-[42px] text-pampas">
                  Transferts reçus
                </h1>
                <p className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
                  4 transferts · 445 143 XOF reçus · Économies : 68 600 XOF
                </p>
              </div>
              <Button
                asChild
                className="h-10 rounded-xl bg-tradewind px-[22px] py-0 text-[#0d0d0d] hover:bg-tradewind"
              >
                <Link href="/retrait" className="inline-flex items-center gap-2">
                  <img
                    className="h-4 w-4"
                    alt="Svg"
                    src="/figmaAssets/svg-4.svg"
                  />
                  <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium leading-[19.5px] underline">
                    Retirer le solde
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 pt-5 md:grid-cols-3">
            {summaryCards.map((card) => (
              <Card
                key={card.title}
                className="rounded-xl border border-[#1f1f1f] bg-[#212121] shadow-none"
              >
                <CardContent className="flex h-full flex-col gap-[5px] px-[18px] pb-4 pt-[18px]">
                  <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                    {card.title}
                  </div>
                  <div
                    className={`pt-[3px] [font-family:'DM_Mono',Helvetica] text-[28px] font-medium leading-7 ${card.valueClassName}`}
                  >
                    {card.value}
                  </div>
                  {card.subtitle ? (
                    <div className="[font-family:'DM_Mono',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                      {card.subtitle}
                    </div>
                  ) : (
                    <div className="pt-0.5">{card.footer}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="relative min-w-[200px] flex-1">
              <Input
                defaultValue=""
                placeholder="Chercher un expéditeur…"
                className="h-9 rounded-full border-[#2e2e2e] bg-[#2a2a2a] pl-9 pr-3.5 [font-family:'DM_Sans',Helvetica] text-[13px] font-normal text-pampas placeholder:text-pale-sky focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
                alt="Container"
                src="/figmaAssets/container.svg"
              />
            </div>
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <Button
                  key={filter}
                  type="button"
                  variant="outline"
                  onClick={() => setActiveFilter(filter)}
                  className={`h-auto rounded-full px-3.5 py-1.5 [font-family:'DM_Sans',Helvetica] text-xs font-normal leading-none shadow-none ${
                    active
                      ? "border-[#6ec4a766] bg-aztec text-tradewind hover:bg-aztec"
                      : "border-[#2e2e2e] bg-transparent text-flint hover:bg-transparent"
                  }`}
                >
                  {filter}
                </Button>
              );
            })}
          </div>
          <Card className="overflow-hidden rounded-2xl border border-[#2e2e2e] bg-[#1a1a1a] shadow-none">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#1f1f1f] hover:bg-transparent">
                      <TableHead className="h-auto min-w-[280px] border-b border-[#1f1f1f] px-3.5 pb-3 pt-4 text-left [font-family:'DM_Sans',Helvetica] text-[10px] font-semibold tracking-[0.80px] text-flint">
                        EXPÉDITEUR
                      </TableHead>
                      <TableHead className="h-auto min-w-[140px] border-b border-[#1f1f1f] px-3.5 pb-[19.5px] pt-2 text-left [font-family:'DM_Sans',Helvetica] text-[10px] font-semibold tracking-[0.80px] text-flint">
                        DATE REÇU
                      </TableHead>
                      <TableHead className="h-auto min-w-[140px] border-b border-[#1f1f1f] px-3.5 pb-[19.5px] pt-2 text-left [font-family:'DM_Sans',Helvetica] text-[10px] font-semibold tracking-[0.80px] text-flint">
                        MONTANT XOF
                      </TableHead>
                      <TableHead className="h-auto min-w-[160px] border-b border-[#1f1f1f] px-3.5 pb-[19.5px] pt-2 text-left [font-family:'DM_Sans',Helvetica] text-[10px] font-semibold tracking-[0.80px] text-flint">
                        SOURCE
                      </TableHead>
                      <TableHead className="h-auto min-w-[140px] border-b border-[#1f1f1f] px-3.5 pb-[19.5px] pt-2 text-left [font-family:'DM_Sans',Helvetica] text-[10px] font-semibold tracking-[0.80px] text-flint">
                        RETRAIT
                      </TableHead>
                      <TableHead className="h-auto min-w-[140px] border-b border-[#1f1f1f] px-3.5 pb-[19.5px] pt-2 text-right [font-family:'DM_Sans',Helvetica] text-[10px] font-semibold tracking-[0.80px] text-flint">
                        STATUT
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRows.map((row) => (
                      <TableRow
                        key={`${row.sender}-${row.date}-${row.time}`}
                        className="border-[#1f1f1f] hover:bg-transparent"
                      >
                        <TableCell className="border-[#1f1f1f] px-3.5 py-[13px] align-middle">
                          <div className="flex items-center gap-2.5">
                            <img
                              className="h-[34px] w-[34px]"
                              alt="Background border"
                              src={row.avatar}
                            />
                            <div className="inline-flex flex-col items-start gap-px">
                              <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium leading-[19.5px] text-pampas">
                                {row.sender}
                              </div>
                              <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                                {row.detail}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="border-[#1f1f1f] px-3.5 py-[13px] align-middle">
                          <div className="flex flex-col items-start gap-px">
                            <div className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium leading-[19.5px] text-pampas">
                              {row.date}
                            </div>
                            <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                              {row.time}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="border-[#1f1f1f] px-3.5 py-[13px] align-middle">
                          <div
                            className={`[font-family:'DM_Mono',Helvetica] text-[13px] font-medium leading-[19.5px] ${row.amountClassName}`}
                          >
                            {row.amount}
                          </div>
                        </TableCell>
                        <TableCell className="border-[#1f1f1f] px-3.5 py-[13px] align-middle">
                          <div className="[font-family:'DM_Sans',Helvetica] text-[11px] font-normal leading-[16.5px] text-flint">
                            {row.source}
                          </div>
                        </TableCell>
                        <TableCell className="border-[#1f1f1f] px-3.5 py-[13px] align-middle">
                          <div
                            className={`${row.withdrawalClassName} text-xs font-normal leading-[18px]`}
                          >
                            {row.withdrawal}
                          </div>
                        </TableCell>
                        <TableCell className="border-[#1f1f1f] px-3.5 py-[13px] text-right align-middle">
                          <Badge
                            className={`rounded border px-[9px] py-[3px] [font-family:'DM_Sans',Helvetica] text-[10px] font-bold tracking-[0.60px] ${row.statusClassName}`}
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <footer className="w-full border-t border-[#1f1f1f] bg-transparent">
          <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-6 px-6 py-7 xl:px-10">
            <div className="inline-flex items-center gap-2">
              <img
                className="h-[26px] w-[26px]"
                alt="Background border"
                src="/figmaAssets/background-border-2.svg"
              />
              <span className="[font-family:'DM_Sans',Helvetica] text-sm font-normal leading-[21px] text-flint">
                DiasporaConnect
              </span>
            </div>
            <nav
              className="inline-flex items-start gap-5"
              aria-label="Pied de page"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  className="[font-family:'DM_Sans',Helvetica] text-xs font-normal leading-[18px] text-flint"
                  href={link.href}
                >
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
