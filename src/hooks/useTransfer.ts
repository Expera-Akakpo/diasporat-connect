import { useState, useEffect, useCallback } from "react";
import { blockchainService } from "@/lib/blockchainService";
import { mockBlockchain } from "@/lib/mockBlockchain";
import { useToast } from "@/hooks/use-toast";

export type TransferStatus = "idle" | "connecting" | "loading" | "success" | "error";

export function useTransfer() {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean>(false);
  const [isSimulationMode, setIsSimulationMode] = useState<boolean>(false);
  const [status, setStatus] = useState<TransferStatus>("idle");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const { toast } = useToast();

  const service = isSimulationMode ? mockBlockchain : blockchainService;

  useEffect(() => {
    const checkMetaMask = async () => {
      const installed = await blockchainService.isMetaMaskInstalled();
      setIsMetaMaskInstalled(installed);
      // If not installed, default to simulation mode
      if (!installed) {
        setIsSimulationMode(true);
      }
    };
    checkMetaMask();
  }, []);

  const connectWallet = useCallback(async () => {
    setStatus("connecting");
    setError(null);
    try {
      const address = await service.connectWallet();
      setAccount(address);
      setStatus("idle");
      toast({
        title: isSimulationMode ? "Mode Simulation Activé" : "Wallet Connecté",
        description: `Connecté avec l'adresse : ${address.substring(0, 6)}...${address.substring(address.length - 4)}`,
      });
      return address;
    } catch (err: any) {
      setStatus("error");
      setError(err.message);
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: err.message,
      });
      return null;
    }
  }, [service, isSimulationMode, toast]);

  const sendMoney = useCallback(async (recipientAddress: string, amountInEther: string) => {
    setStatus("loading");
    setTxHash(null);
    setError(null);

    try {
      // Ensure wallet is connected
      if (!account) {
        const connectedAddress = await connectWallet();
        if (!connectedAddress) return;
      }

      const hash = await service.sendMoney(recipientAddress, amountInEther);
      setTxHash(hash);
      setStatus("success");
      
      toast({
        title: "Transfert Réussi !",
        description: `Hash: ${hash.substring(0, 10)}...`,
      });
    } catch (err: any) {
      setStatus("error");
      setError(err.message);
      toast({
        variant: "destructive",
        title: "Échec du transfert",
        description: err.message,
      });
    }
  }, [service, account, connectWallet, toast]);

  const toggleSimulationMode = useCallback(() => {
    setIsSimulationMode(prev => !prev);
    setAccount(null); // Reset account when switching modes
    setStatus("idle");
    setTxHash(null);
    setError(null);
  }, []);

  return {
    isMetaMaskInstalled,
    isSimulationMode,
    status,
    txHash,
    error,
    account,
    connectWallet,
    sendMoney,
    toggleSimulationMode
  };
}
