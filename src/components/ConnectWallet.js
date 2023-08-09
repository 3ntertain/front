"use client"

import React, { useEffect } from "react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { Box, Paper, Typography } from "@mui/material"
import { useAuthContext } from "@/context/AuthContext"

export const ConnectWallet = (props) => {
  const { setUserWallet } = useAuthContext()
  const { publicKey } = useWallet()

  useEffect(() => {
    setUserWallet(publicKey?.toString())
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
