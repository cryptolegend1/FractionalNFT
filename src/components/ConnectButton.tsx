import React, { useState } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
import { providers } from "ethers";
import Button from "@mui/material/Button";
// import { formatAuthMessage } from "../utils";

function ConnectButton() {
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: "https://bsc-dataseed.binance.org/",
          },
          network: "binance",
        },
      },
    },
  });

  const [, setChainId] = useState<number>(1);
  const [, setAddress] = useState<string>("");
  const [, setProvider] = useState<providers.Web3Provider>();

  function accountsChanged(accounts: string[]) {
    console.log("accountsChanged", accounts);
    setAddress(accounts[0]);
  }

  function chainChanged(chainId: number) {
    console.log("chainChanged", chainId);
    setChainId(chainId);
  }

  function reset() {
    console.log("reset");
    setAddress("");
    setProvider(undefined);
    web3Modal.clearCachedProvider();
  }

  async function connect() {
    const web3Provider = await web3Modal.connect();

    web3Provider.on("accountsChanged", accountsChanged);
    web3Provider.on("chainChanged", chainChanged);
    web3Provider.on("disconnect", reset);

    const accounts = (await web3Provider.enable()) as string[];
    setAddress(accounts[0]);
    setChainId(web3Provider.chainId);

    const provider = new providers.Web3Provider(web3Provider);
    setProvider(provider);
  }

  // async function signMessage() {
  //   if (!provider) {
  //     throw new Error("Provider not connected");
  //   }
  //   const msg = formatAuthMessage(address, chainId);
  //   const sig = await provider.send("personal_sign", [msg, address]);
  //   console.log("Signature", sig);
  //   console.log(
  //     "isValid",
  //     utils.verifyMessage(msg, sig) === utils.getAddress(address)
  //   );
  // }

  return (
    <Button variant="contained" onClick={connect}>
      Connect wallet
    </Button>
  );
}

export default ConnectButton;
