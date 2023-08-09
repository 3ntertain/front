"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { DisplayAmount } from "@/components/DisplayAmount"
import Link from "next/link"
import { ConnectWallet } from "@/components/ConnectWallet"
import { Web3Context } from "@/context/Web3Context"
import games from "@/games.json"

export default function Page() {
  const { user } = useAuthContext()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper>
          <Box mt={12} p={2} textAlign={"center"}>
            <img
              src={user.photoURL}
              width={200}
              height={200}
              style={{ marginTop: "-100px", borderRadius: "50%" }}
            />
            <Typography variant="h2" mt={4}>
              {user.displayName}
            </Typography>

            <Box py={6}>
              <Stack direction={"row"} spacing={2}>
                <Typography variant="h2" mb={1}>
                  LVL
                </Typography>

                <Typography variant="h2" color={"primary"}>
                  3
                </Typography>
              </Stack>

              <LinearProgress
                variant="determinate"
                value={30}
                title="1000/3000"
              />
            </Box>

            <Stack direction={"column"} spacing={2}>
              <Paper elevation={3}>
                <Box py={5} px={3}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" mb={1}>
                      Tickets
                    </Typography>

                    <Typography variant="h1" color={"primary"}>
                      33
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      LinkComponent={Link}
                      href="/shop"
                    >
                      Buy Tickets
                    </Button>
                  </Stack>
                </Box>
              </Paper>

              <Paper elevation={3}>
                <Box py={5} px={3}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" mb={1}>
                      Earnings
                    </Typography>

                    <Typography variant="h1" color={"primary"}>
                      <DisplayAmount value={12.25} />
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      LinkComponent={Link}
                      href="/user/rewards"
                    >
                      Claim Rewards
                    </Button>
                  </Stack>
                </Box>
              </Paper>

              <Paper elevation={3}>
                <Box py={5} px={3}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" mb={1}>
                      Friends Invited
                    </Typography>

                    <Typography variant="h1" color={"primary"}>
                      12
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      LinkComponent={Link}
                      href="/user/referals"
                    >
                      Invite Friends
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8} md={8}>
        <Box mt={12}>
          <Web3Context>
            <ConnectWallet></ConnectWallet>
          </Web3Context>

          <Grid container spacing={2}>
            {games.map((game) => (
              <Grid key={game.name} item xs={12} md={6}>
                <Box mt={2}>
                  <Paper elevation={3}>
                    <Box
                      sx={{
                        backgroundImage: `url(${game.background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "250px",
                      }}
                    ></Box>
                    <Box p={2}>
                      <Button
                        size="large"
                        component="a"
                        target="_blank"
                        href={`${game.url}/?user.jwt`}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Play
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Grid>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Box>
      </Grid>
    </Grid>
  )
}
