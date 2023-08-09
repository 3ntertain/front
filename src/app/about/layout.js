import * as React from "react"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"

export default function Layout({ children }) {
  return (
    <Container maxWidth="xl">
      <Box py={8}>{children}</Box>
    </Container>
  )
}