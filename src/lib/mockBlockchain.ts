/**
 * Simulation service for DiasporaConnect demo mode
 */
export const mockBlockchain = {
  /**
   * Detects if MetaMask is "installed" (always true for mock)
   */
  async isMetaMaskInstalled(): Promise<boolean> {
    return true;
  },

  /**
   * Simulates wallet connection with a slight delay
   */
  async connectWallet(): Promise<string> {
    console.log("[SIMULATION] Connecting to virtual wallet...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "0xMOCK_USER_VIRTUAL_WALLET_777";
  },

  /**
   * Simulates a transaction with a realistic delay and feedback
   */
  async sendMoney(recipient: string, amount: string): Promise<string> {
    console.log(`[SIMULATION] Initiating transfer of ${amount} ETH to ${recipient}...`);
    
    // Phase 1: Requesting signature
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log("[SIMULATION] Transaction signed by user.");

    // Phase 2: Mining / Processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a unique-looking fake hash
    const timestamp = Date.now().toString(16);
    const random = Math.random().toString(16).substring(2, 8);
    const fakeHash = `0xSIMULATED_${timestamp}_${random}`.toUpperCase();
    
    console.log(`[SIMULATION] Transaction confirmed! Hash: ${fakeHash}`);
    return fakeHash;
  },

  /**
   * Returns current mock address
   */
  async getAddress(): Promise<string> {
    return "0xMOCK_USER_VIRTUAL_WALLET_777";
  },

  /**
   * Returns current mock network
   */
  async getNetwork(): Promise<string> {
    return "Sepolia (Simulated)";
  }
};
