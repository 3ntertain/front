import * as React from "react"
import { Box, Container } from "@mui/material/"

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <Box pt={10} textAlign="center">
        <img
          src="/images/logo/3ntertain-logo.png"
          alt="3ntertain logo"
          style={{ width: "80%", maxWidth: "800px" }}
        />
        Let's play!
      </Box>
    </Container>
  )
}
