"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material"
import { Logout } from "@mui/icons-material"
import signOut from "@/firebase/signout"

export default function Page() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3">User Settings</Typography>
      <Paper>
        <Box p={3}>
          <form>
            <Box mb={2}>
              <Stack direction="row" spacing={2}>
                <TextField fullWidth label="Pseudo" variant="filled" />
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Stack>
            </Box>
          </form>
        </Box>
      </Paper>
      <Typography variant="h3">Your Referal</Typography>
      <Paper>
        <Box p={3}>
          <form>
            <Box mb={2}>
              <Stack direction="row" spacing={2}>
                <TextField fullWidth label="Referal" variant="filled" />
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Stack>
            </Box>
          </form>
        </Box>
      </Paper>
      <Box align={"right"}>
        <Button
          onClick={signOut}
          variant="outlined"
          color="secondary"
          endIcon={<Logout />}
        >
          Logout
        </Button>
      </Box>
    </Stack>
  )
}
