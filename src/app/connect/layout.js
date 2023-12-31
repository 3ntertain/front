import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

export default function Layout({ children }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 2 }}>{children}</Box>
    </Container>
  )
}
