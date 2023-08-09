"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"

export default function Page() {
  const { user } = useAuthContext()

  return <>odioi</>
}
