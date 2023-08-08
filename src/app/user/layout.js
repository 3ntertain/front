"use client"

import * as React from "react"

import { AuthContextProvider } from "@/context/AuthContext"
import UserGuard from "@/components/UserGuard"

export default function Layout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <UserGuard>{children}</UserGuard>
      </AuthContextProvider>
    </>
  )
}
