import * as React from "react"
import { Container } from "@mui/material"

export default function Layout({ children }) {
  return <Container maxWidth="xl">{children}</Container>
}
