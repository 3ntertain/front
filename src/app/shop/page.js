"use client"
import * as React from "react"
import { PageTitle } from "@/components/PageTitle"
import {
  Grid,
  Paper,
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material"
import { AuthContextProvider, useAuthContext } from "@/context/AuthContext"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import { useRouter } from "next/navigation"

export default function TasksPage() {
  return (
    <>
      <PageTitle>Buy 3n tickets and start playing!</PageTitle>
      <AuthContextProvider>
        <Shop />
      </AuthContextProvider>
    </>
  )
}

export function Shop() {
  const { user } = useAuthContext()
  const router = useRouter()

  const buy = (tickets) => {
    updateDoc(doc(db, `users`, user.uid), {
      tickets: user.tickets + tickets,
    })

    router.push("/user")
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ borderRadius: "30px" }}>
            <Box sx={{ p: 5 }} textAlign={"center"}>
              <Stack direction="column" spacing={2} justifyContent="center">
                <Typography variant="h1">3x tickets</Typography>

                <Box>
                  <img
                    src="/images/logo/3ntertain-logo-square.png"
                    alt="ticket"
                    width="200"
                    height="200"
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      buy(3)
                    }}
                  >
                    Buy now
                  </Button>
                </Box>
                <Box>
                  <Typography variant="h2">4.5 $</Typography>
                  <Typography variant="body1">1.50 $ / ticket</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ borderRadius: "30px" }}>
            <Box sx={{ p: 5 }} textAlign={"center"}>
              <Stack direction="column" spacing={2} justifyContent="center">
                <Typography variant="h1">10x tickets</Typography>

                <Box>
                  <img
                    src="/images/logo/3ntertain-logo-square.png"
                    alt="ticket"
                    width="200"
                    height="200"
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      buy(10)
                    }}
                  >
                    Buy now
                  </Button>
                </Box>
                <Box>
                  <Typography variant="h2">12.50 $</Typography>
                  <Typography variant="body1">1.25 $ / ticket</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ borderRadius: "30px" }}>
            <Box sx={{ p: 5 }} textAlign={"center"}>
              <Stack direction="column" spacing={2} justifyContent="center">
                <Typography variant="h1">30x tickets</Typography>

                <Box>
                  <img
                    src="/images/logo/3ntertain-logo-square.png"
                    alt="ticket"
                    width="200"
                    height="200"
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      buy(30)
                    }}
                  >
                    Buy now
                  </Button>
                </Box>
                <Box>
                  <Typography variant="h2">29 $</Typography>
                  <Typography variant="body1">0.97 $ / ticket</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="body1" mt={3} textAlign={"center"}>
        You can purchase 3n tickets with any Credit Card or a Solana Wallet.
      </Typography>
    </Container>
  )
}
