import * as React from "react"
import { Container, Box } from "@mui/material"

export default function Layout({ children }) {
  return (
    <Container maxWidth="xl">
      <Box py={8}>{children}</Box>
    </Container>
  )
}
