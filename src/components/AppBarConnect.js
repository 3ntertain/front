import * as React from "react"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import { Box, Button } from "@mui/material/"

export default function AppBarConnect() {
  const { user } = useAuthContext()

  return (
    <>
      {user && (
        <Box sx={{ flexGrow: 0 }}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            component={Link}
            href="/user"
          >
            {user.pseudo}
          </Button>
        </Box>
      )}

      {!user && (
        <Button
          variant="outlined"
          size="large"
          color="primary"
          component={Link}
          href="/connect"
        >
          Connect
        </Button>
      )}
    </>
  )
}
