"use client"

import React, { FC, useMemo, useEffect } from "react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"

import { Box, Paper, Typography } from "@mui/material"

export const ConnectWallet = (props) => {
  const { publicKey } = useWallet()

  const network = WalletAdapterNetwork.Devnet

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [new UnsafeBurnerWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  )

  useEffect(() => {
    console.log("ii")
    console.log(publicKey?.toString())
  }, [publicKey])

  return (
    <Paper elevation={5}>
      <Box p={5}>
        <Typography variant="h2" mb={1}>
          Connect Solana Wallet
        </Typography>
        {!publicKey && <WalletMultiButton />}

        {publicKey && (
          <>
            <Typography variant="h4" mb={1}>
              {publicKey.toString()}
            </Typography>
            <WalletDisconnectButton />
          </>
        )}
      </Box>
    </Paper>
  )
}
