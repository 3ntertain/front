"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"

import games from "@/games.json"
import EventTable from "@/components/EventTable"

export default function Page() {
  const { user } = useAuthContext()

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
                    component="a"
                    target="_blank"
                    href={`${game.url}?${user.jwt}`}
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

      <Grid item xs={12}>
        <Typography variant="h4" mt={3} mb={2}>
          Live Events
        </Typography>
        <EventTable />
      </Grid>
    </Grid>
  )
}
