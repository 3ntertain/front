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

const settings = [
  {
    label: "Profile",
    href: "/user",
  },
  {
    label: "Claim rewards",
    href: "/user/rewards",
  },
  {
    label: "Invite friends",
    href: "/user/referals",
  },
]

export default function AppBarConnect() {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const { user } = useAuthContext()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleSignout = () => {
    setAnchorElUser(null)
    signout()
  }

  return (
    <>
      {user && (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.label}
                href={setting.href}
                component={Link}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}

            <MenuItem onClick={handleSignout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}

      {!user && <Button href="/connect">Connect</Button>}
    </>
  )
}
