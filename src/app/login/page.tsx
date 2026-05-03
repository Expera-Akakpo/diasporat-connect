"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

const DEMO_ACCOUNTS = [
  {
    name: "Kouassi Georges",
    email: "kouassi@diaspora.io",
    password: "demo",
    role: "Expéditeur · Diaspora",
    badgeClass: "border-[#6ec4a74c] bg-aztec text-tradewind",
  },
  {
    name: "Amadou Mbaye",
    email: "amadou@diaspora.io",
    password: "demo",
    role: "Destinataire · Bénin",
    badgeClass: "border-[#fbbf2440] bg-[#1f1900] text-[#c4a35a]",
  },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { login, user } = useAuth();
  const router = useRouter();

  // Rediriger si déjà connecté
  useEffect(() => {
    if (user) {
      router.push(user.role === "expediteur" ? "/expediteur" : "/wallet");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsPending(true);
    try {
      const user = await login(email, password);
      if (user.role === "expediteur") router.push("/expediteur");
      else router.push("/wallet");
    } catch (err: any) {
      setError(err.message || "Erreur de connexion");
    } finally {
      setIsPending(false);
    }
  };

  const fillDemo = (acc: (typeof DEMO_ACCOUNTS)[0]) => {
    setEmail(acc.email);
    setPassword(acc.password);
    setError("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[linear-gradient(180deg,rgba(9,20,18,1)_0%,rgba(10,21,16,1)_100%)] px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-tradewind opacity-10 blur-[120px]" />

      <div className="relative z-10 flex w-full max-w-[440px] flex-col gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 self-center">
          <img className="h-8 w-8" alt="DiasporaConnect" src="/figmaAssets/background-border-7.svg" />
          <span className="[font-family:'DM_Sans',Helvetica] text-[15px] font-semibold tracking-[-0.05px] text-pampas">
            DiasporaConnect
          </span>
        </Link>

        {/* Card */}
        <Card className="rounded-2xl border border-[#1f1f1f] bg-[#111] shadow-none">
          <CardContent className="flex flex-col gap-6 px-8 py-8">
            <div className="flex flex-col gap-1">
              <h1 className="[font-family:'DM_Sans',Helvetica] text-[24px] font-medium tracking-[-0.5px] text-pampas">
                Connexion
              </h1>
              <p className="[font-family:'DM_Sans',Helvetica] text-[13px] text-flint">
                Accédez à votre interface DiasporaConnect.
              </p>
            </div>

            {/* Demo accounts */}
            <div className="flex flex-col gap-2">
              <p className="[font-family:'DM_Sans',Helvetica] text-[11px] font-bold tracking-[0.8px] text-flint uppercase">
                Comptes de démo
              </p>
              <div className="flex flex-col gap-2">
                {DEMO_ACCOUNTS.map((acc) => (
                  <button
                    key={acc.email}
                    type="button"
                    onClick={() => fillDemo(acc)}
                    className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] px-4 py-3 text-left transition-colors hover:border-[#2e2e2e] hover:bg-[#161616]"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium text-pampas">
                        {acc.name}
                      </span>
                      <span className="[font-family:'DM_Mono',Helvetica] text-[11px] text-flint">
                        {acc.email} · demo
                      </span>
                    </div>
                    <Badge
                      className={`rounded border px-2 py-[2px] [font-family:'DM_Sans',Helvetica] text-[8px] font-bold tracking-[0.6px] hover:bg-inherit ${acc.badgeClass}`}
                    >
                      {acc.role}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-[#1f1f1f]" />
              <span className="[font-family:'DM_Sans',Helvetica] text-[11px] text-flint">ou</span>
              <div className="h-px flex-1 bg-[#1f1f1f]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="[font-family:'DM_Sans',Helvetica] text-[12px] font-medium text-elm">
                  Email
                </Label>
                <Input
                  data-testid="input-email"
                  type="email"
                  placeholder="vous@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 rounded-lg border-[#2a2a2a] bg-[#0d0d0d] text-[13px] text-pampas placeholder:text-[#3a3a3a] focus-visible:ring-tradewind"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="[font-family:'DM_Sans',Helvetica] text-[12px] font-medium text-elm">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Input
                    data-testid="input-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-10 rounded-lg border-[#2a2a2a] bg-[#0d0d0d] pr-10 text-[13px] text-pampas placeholder:text-[#3a3a3a] focus-visible:ring-tradewind"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-flint hover:text-pampas"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="rounded-lg border border-red-900/40 bg-red-950/30 px-3 py-2 [font-family:'DM_Sans',Helvetica] text-[12px] text-red-400">
                  {error}
                </p>
              )}

              <Button
                data-testid="button-submit"
                type="submit"
                disabled={isPending}
                className="h-10 gap-2 rounded-lg bg-tradewind text-[#0d0d0d] hover:bg-tradewind disabled:opacity-60 cursor-pointer"
              >
                {isPending ? (
                  <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                    Connexion en cours…
                  </span>
                ) : (
                  <>
                    <ArrowRight className="h-4 w-4" />
                    <span className="[font-family:'DM_Sans',Helvetica] text-[13px] font-medium">
                      Se connecter
                    </span>
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center [font-family:'DM_Sans',Helvetica] text-[12px] text-flint">
          <Link href="/" className="hover:text-pampas">
            ← Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
}
