"use client"

import * as React from "react"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import ShopIcon from "@mui/icons-material/ShoppingCart"
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material"
import AppBarConnect from "@/components/AppBarConnect"
import { AuthContextProvider } from "@/context/AuthContext"

const pages = [
  {
    label: "Games",
    href: "/about/games",
  },
  {
    label: "Rewards",
    href: "/about/rewards",
  },
  {
    label: "Friends",
    href: "/about/friends",
  },
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            <img
              style={{ width: 60 }}
              src="/images/logo/3ntertain-logo-square.png"
              alt="3ntertain logo"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  href={page.href}
                  component={Link}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              style={{ width: 60 }}
              src="/images/logo/3ntertain-logo-square.png"
              alt="3ntertain logo"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                component={Link}
                href={page.href}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <AuthContextProvider>
            <AppBarConnect></AppBarConnect>
          </AuthContextProvider>

          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/shop"
            sx={{ ml: 2 }}
            endIcon={<ShopIcon />}
          >
            BUY TICKETS
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
