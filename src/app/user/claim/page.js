"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { ConnectWallet } from "@/components/ConnectWallet"
import { Web3Context } from "@/context/Web3Context"

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  React.useEffect(() => {
    if (user == null) router.push("/")
  }, [user])

  return (
    <>
      <Web3Context>
        <ConnectWallet />
      </Web3Context>
    </>
  )
}
