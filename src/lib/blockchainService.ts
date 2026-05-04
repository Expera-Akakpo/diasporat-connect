import { ethers } from "ethers";

// ABI for the DiasporaConnect contract
// This matches a simple sendMoney(address recipient) payable function
const CONTRACT_ABI = [
  "function sendMoney(address recipient) public payable",
  "event TransferSent(address indexed from, address indexed to, uint256 amount, uint256 timestamp)"
];

// Replaced with a placeholder - User should update this after deployment
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x0000000000000000000000000000000000000000";

export class BlockchainService {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.JsonRpcSigner | null = null;

  async isMetaMaskInstalled(): Promise<boolean> {
    return typeof window !== "undefined" && !!(window as any).ethereum;
  }

  async connectWallet(): Promise<string> {
    if (!(await this.isMetaMaskInstalled())) {
      throw new Error("MetaMask is not installed. Please install it to use real blockchain features.");
    }

    try {
      this.provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await this.provider.send("eth_requestAccounts", []);
      this.signer = await this.provider.getSigner();
      return accounts[0];
    } catch (error: any) {
      console.error("Wallet connection error:", error);
      throw new Error(error.message || "Failed to connect wallet");
    }
  }

  async sendMoney(recipientAddress: string, amountInEther: string): Promise<string> {
    if (!this.signer) {
      await this.connectWallet();
    }

    if (!this.signer) throw new Error("Wallet not connected");

    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, this.signer);
      const amountInWei = ethers.parseEther(amountInEther);

      // Call the sendMoney function on the contract
      // We pass the recipient address and the value (ETH)
      const tx = await contract.sendMoney(recipientAddress, {
        value: amountInWei
      });

      console.log("Transaction sent:", tx.hash);
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt.hash);
      return receipt.hash;
    } catch (error: any) {
      console.error("Blockchain transaction error:", error);
      if (error.code === "ACTION_REJECTED") {
        throw new Error("Transaction rejected by user.");
      }
      throw new Error(error.reason || error.message || "Blockchain transaction failed.");
    }
  }

  async getAddress(): Promise<string | null> {
    if (!this.signer) return null;
    try {
      return await this.signer.getAddress();
    } catch {
      return null;
    }
  }

  async getNetwork(): Promise<string> {
    if (!this.provider) return "Unknown";
    const network = await this.provider.getNetwork();
    return network.name;
  }
}

export const blockchainService = new BlockchainService();
