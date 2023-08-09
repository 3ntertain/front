import * as React from "react"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import signout from "@/firebase/signout"

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
            {user.displayName}
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
