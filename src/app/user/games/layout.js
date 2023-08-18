"use client"
import * as React from "react"
import { Container } from "@mui/material"
import { AuthContextProvider } from "@/context/AuthContext"
import AuthGuard from "@/context/AuthGuard"

export default function Layout({ children }) {
  return (
    <Container maxWidth="xl">
      <AuthContextProvider>
        <AuthGuard>{children}</AuthGuard>
      </AuthContextProvider>
    </Container>
  )
}
