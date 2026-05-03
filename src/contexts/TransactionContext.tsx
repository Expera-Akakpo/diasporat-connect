"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type TransferType = "send" | "withdraw";
export type TransferStatus = "En attente" | "Terminé" | "Retiré";

export interface TransferRecord {
  id: string;
  recipient: string;
  country: string;
  date: string;
  amountEUR: number;
  amountXOF: number;
  feesEUR: number;
  status: TransferStatus;
  type: TransferType;
  method?: string;
}

interface TransactionContextValue {
  walletBalance: number;
  transfers: TransferRecord[];
  monthlyReceived: number;
  lastTransfers: TransferRecord[];
  sendTransfer: (payload: {
    recipient: string;
    country: string;
    amountEUR: number;
    amountXOF: number;
    feesEUR: number;
  }) => Promise<TransferRecord>;
  withdraw: (amountXOF: number, method: string) => Promise<TransferRecord>;
}

const STORAGE_KEY = "diaspora_transactions_v2";
const INITIAL_BALANCE = 131284;

const TransactionContext = createContext<TransactionContextValue | null>(null);

const initialTransfers: TransferRecord[] = [
  {
    id: "tx-1",
    recipient: "Amadou Mbaye",
    country: "🇸🇳 Sénégal",
    date: "Aujourd'hui · 09:40",
    amountEUR: 200,
    amountXOF: 131284,
    feesEUR: 0.40,
    status: "Terminé",
    type: "send",
  },
  {
    id: "tx-2",
    recipient: "Aminata Diallo",
    country: "🇨🇮 Côte d'Ivoire",
    date: "8 Avr · 08:12",
    amountEUR: 250,
    amountXOF: 163989,
    feesEUR: 0.50,
    status: "Retiré",
    type: "withdraw",
    method: "MTN MoMo",
  },
  {
    id: "tx-3",
    recipient: "Aminata Diallo",
    country: "🇨🇮 Côte d'Ivoire",
    date: "2 Avr · 11:46",
    amountEUR: 150,
    amountXOF: 98394,
    feesEUR: 0.30,
    status: "Retiré",
    type: "withdraw",
    method: "Orange Money",
  },
];

function formatTransferDate(date: Date) {
  return date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [walletBalance, setWalletBalance] = useState(INITIAL_BALANCE);
  const [transfers, setTransfers] = useState<TransferRecord[]>(initialTransfers);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { walletBalance: number; transfers: TransferRecord[] };
        if (parsed?.walletBalance != null && Array.isArray(parsed.transfers)) {
          setWalletBalance(parsed.walletBalance);
          setTransfers(parsed.transfers);
        }
      }
    } catch (error) {
      console.error("Transaction state load failed", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ walletBalance, transfers }));
  }, [walletBalance, transfers]);

  const monthlyReceived = useMemo(
    () =>
      transfers
        .filter((transfer) => transfer.type === "send" && transfer.status === "Terminé")
        .reduce((sum, transfer) => sum + transfer.amountXOF, 0),
    [transfers]
  );

  const lastTransfers = useMemo(
    () => transfers.slice(0, 4),
    [transfers]
  );

  const sendTransfer = async (payload: {
    recipient: string;
    country: string;
    amountEUR: number;
    amountXOF: number;
    feesEUR: number;
  }) => {
    const transfer: TransferRecord = {
      id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      recipient: payload.recipient,
      country: payload.country,
      amountEUR: payload.amountEUR,
      amountXOF: payload.amountXOF,
      feesEUR: payload.feesEUR,
      status: "En attente",
      type: "send",
      date: formatTransferDate(new Date()),
    };

    setTransfers((prev) => [transfer, ...prev]);

    await new Promise((resolve) => setTimeout(resolve, 1800));

    setTransfers((prev) =>
      prev.map((item) =>
        item.id === transfer.id ? { ...item, status: "Terminé" as const } : item
      )
    );

    setWalletBalance((prev) => prev + payload.amountXOF);
    return transfer;
  };

  const withdraw = async (amountXOF: number, method: string) => {
    const transfer: TransferRecord = {
      id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      recipient: "Moi",
      country: "🇧🇯 Bénin",
      amountEUR: 0,
      amountXOF,
      feesEUR: 0,
      status: "Retiré",
      type: "withdraw",
      method,
      date: formatTransferDate(new Date()),
    };

    setTransfers((prev) => [transfer, ...prev]);
    setWalletBalance((prev) => Math.max(prev - amountXOF, 0));
    await new Promise((resolve) => setTimeout(resolve, 900));
    return transfer;
  };

  return (
    <TransactionContext.Provider
      value={{ walletBalance, transfers, monthlyReceived, lastTransfers, sendTransfer, withdraw }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used inside TransactionProvider");
  }
  return context;
};
