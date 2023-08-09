"use client"

import * as React from "react"

import { AuthContextProvider } from "@/context/AuthContext"
import AuthGuard from "@/context/AuthGuard"

export default function Layout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <AuthGuard>{children}</AuthGuard>
      </AuthContextProvider>
    </>
  )
}
