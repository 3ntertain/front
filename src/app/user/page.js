"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"
import { Box, Button, Grid, Paper } from "@mui/material"

import games from "@/games.json"

export default function Page() {
  return (
    <Grid container spacing={2}>
      {games.map((game, index) => (
        <Grid key={index} item xs={12} md={6}>
          <Box>
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
  )
}
