"use client"

import React, { useEffect } from "react"
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { Button, Box, Paper, Typography } from "@mui/material"
import { useAuthContext } from "@/context/AuthContext"
import { Wallet } from "@mui/icons-material"
import { shortenWalletAddress } from "@/utils/address"

export const ConnectWallet = (props) => {
  const { setUserWallet } = useAuthContext()
  const { publicKey, disconnect } = useWallet()
  const { user } = useAuthContext()

  useEffect(() => {
    if (publicKey) setUserWallet(publicKey?.toString())
  }, [publicKey])

  const removeWallet = () => {
    setUserWallet(null)
    disconnect()
  }

  return (
    <Paper
      elevation={5}
      sx={{
        backgroundImage: `url(/images/background-solana.jpg)`,
        borderRadius: "0px",
        backgroundSize: "cover",
        color: "black",
      }}
    >
      <Box p={5}>
        {!user.walletAddress && (
          <>
            <Typography variant="h2" mb={1}>
              Connect a Solana Wallet
            </Typography>
            <Typography variant="body1">
              To earn rewards, you need to connect a Solana wallet.
            </Typography>
            <Typography variant="body1">
              Don't have one?{" "}
              <a
                href="https://phantom.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create one in 2 minutes
              </a>
            </Typography>
            <Box mt={2}>
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
          </>
        )}

        {user.walletAddress && (
          <>
            <Typography variant="h2" mb={1}>
              <Wallet mr={2} />
              Your Wallet: {shortenWalletAddress(user.walletAddress)}
            </Typography>

            <Typography variant="body1">
              Rewards you claim and earning from your friends are sent to this
              wallet.
            </Typography>

            <Box mt={2}>
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={removeWallet}
              >
                Remove
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Paper>
  )
}
