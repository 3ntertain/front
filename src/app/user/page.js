"use client"
import React, { useEffect, useState } from "react"
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config"
import Link from "next/link"

export default function Page() {
  const [games, setGames] = useState([])

  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, "games"))

      setGames([])

      querySnapshot.forEach((doc) => {
        const game = {
          id: doc.id,
          ...doc.data(),
        }
        setGames((current) => [...current, game])
      })
    })()
  }, [])

  return (
    <Grid container spacing={2}>
      {games.map((game, index) => (
        <Grid key={index} item xs={12} md={6}>
          <Box>
            <Paper elevation={0}>
              <Box
                sx={{
                  backgroundImage: `url(${game.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "250px",
                }}
              ></Box>

              <Box p={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5">{game.title}</Typography>
                  <Button
                    size="large"
                    component={Link}
                    href={`/user/games/${game.id}`}
                    variant="contained"
                    color="primary"
                  >
                    Play
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
