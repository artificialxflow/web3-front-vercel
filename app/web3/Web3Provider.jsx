"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import {
  mainnet,
  polygon,
  arbitrum,
  bsc,
  avalanche,
  optimism,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const ALCHEMY_KEY = "7PW6w16NTzgdT0NiWUFLJxLUL5XHGTMz";

export const config = createConfig(
  getDefaultConfig({
    chains: [mainnet, polygon, arbitrum, optimism, bsc, avalanche],
    transports: {
      // Ethereum Mainnet via Alchemy
      [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`),

      // Polygon Mainnet via Alchemy
      [polygon.id]: http(
        `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`
      ),

      // Arbitrum One via Alchemy
      [arbitrum.id]: http(
        `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`
      ),

      // Optimism Mainnet via Alchemy
      [optimism.id]: http(
        `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`
      ),

      // BSC Mainnet public RPC
      [bsc.id]: http("https://bsc-dataseed.binance.org"),

      // Avalanche C-Chain public RPC
      [avalanche.id]: http("https://api.avax.network/ext/bc/C/rpc"),
    },
    walletConnectProjectId: " 7PW6w16NTzgdT0NiWUFLJxLUL5XHGTMz",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
