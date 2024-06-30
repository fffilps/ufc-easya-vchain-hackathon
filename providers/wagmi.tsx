// Imports
// ========================================================
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@walletconnect/react-native-compat";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal
} from "@web3modal/wagmi-react-native";
import { berachainTestnet, vechain } from "viem/chains";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient()


// Config
// ========================================================
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = `${process.env.EXPO_PUBLIC_WALLET_CONNECT_PROJECT_ID}`;

if (!projectId) throw Error('Error: Missing `EXPO_PUBLIC_WALLET_CONNECT_PROJECT_ID`.');

// 2. Create config for our app - defined by our env vars
const metadata = {
  name: `${process.env.EXPO_PUBLIC_METADATA_NAME}`,
  description: `${process.env.EXPO_PUBLIC_METADATA_DESCRIPTION}`,
  url: `${process.env.EXPO_PUBLIC_METADATA_URL}`,
  icons: [`${process.env.EXPO_PUBLIC_METADATA_ICONS}`],
  redirect: {
    native: `${process.env.EXPO_PUBLIC_METADATA_REDIRECT_NATIVE}`,
    universal: `${process.env.EXPO_PUBLIC_METADATA_REDIRECT_UNIVERSAL}`,
  },
};


/**
 * @dev supported chains
 */
const chains = [berachainTestnet, vechain] as const;

/**
 * 
 */
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 4. Create modal configuration
createWeb3Modal({
  projectId,
  wagmiConfig,
});

// Provider
// ========================================================
export default function Wagmi({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  </WagmiProvider>
};