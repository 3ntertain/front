"use client"
import * as React from "react"
import { usePathname } from "next/navigation"
import {
  Container,
  Box,
  Button,
  Grid,
  LinearProgress,
  Tabs,
  Tab,
  Stack,
  Typography,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  TextField,
  IconButton,
} from "@mui/material"
import { AuthContextProvider, useAuthContext } from "@/context/AuthContext"
import AuthGuard from "@/context/AuthGuard"
import Link from "next/link"
import { DisplayAmount } from "@/components/DisplayAmount"
import { CopyAll, Settings } from "@mui/icons-material"

export default function Layout({ children }) {
  return (
    <Container maxWidth="xl">
      <AuthContextProvider>
        <AuthGuard>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>

            <Grid item xs={12} md={4}>
              <SideBar />
            </Grid>
            <Grid item xs={12} md={8}>
              <NavigationBar />
              <Paper
                sx={{
                  borderRadius: "0px 0px 20px 20px",
                  background: "rgba(1,1,1,0.1)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <Box p={3}>{children}</Box>
              </Paper>
            </Grid>
          </Grid>
        </AuthGuard>
      </AuthContextProvider>
    </Container>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export function NavigationBar() {
  const { user } = useAuthContext()

  const tabs = [
    {
      label: "Play",
      href: "/user",
    },
    {
      label: "Claim",
      href: "/user/claim",
    },
    {
      label: "Invite",
      href: "/user/invite",
    },
  ]

  const pathname = usePathname()

  const currentTab = tabs.findIndex((tab) => tab.href === pathname)

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Tabs
          component={Paper}
          value={currentTab >= 0 ? currentTab : false}
          variant="fullWidth"
          elevation={2}
          sx={{
            borderRadius: "20px 20px 0 0",
            background: "rgba(1,1,1,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              LinkComponent={Link}
              label={tab.label}
              href={tab.href}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Grid>

      <Grid item xs={6}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"end"}
          gap={2}
        >
          <Typography variant="h2" color={"primary"}>
            {user.tickets}
          </Typography>

          <Typography variant="h2">Tickets</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export function SideBar() {
  const { user } = useAuthContext()

  return (
    <Paper
      sx={{
        borderRadius: "20px",
        background: "rgba(1,1,1,0.1)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Box p={4} textAlign={"center"}>
        <Box sx={{ position: "absolute", top: "4px", right: "20px" }}>
          <IconButton size="large" LinkComponent={Link} href="/user/settings">
            <Settings
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          </IconButton>
        </Box>
        <img
          src={user.avatar}
          width={125}
          height={125}
          style={{ marginTop: "-80px", borderRadius: "50%" }}
        />
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
        >
          <Typography variant="h2">{user.pseudo}</Typography>
          <Typography variant="h2">•</Typography>
          <Typography variant="h2">LVL</Typography>
          <Typography variant="h2" color={"primary"}>
            1{user.level}
          </Typography>
        </Stack>
        <Box py={2}>
          <LinearProgress variant="determinate" value={30} title="1000/3000" />
        </Box>
        <Stack direction={"column"} spacing={1}>
          <Paper elevation={0}>
            <Box py={3} px={3}>
              <Typography variant="h4" mb={1}>
                Total Earnings
              </Typography>

              <DisplayAmount value={122} />

              <Box pt={2}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <DisplayAmount
                            value={87}
                            small
                            currency="Events Played"
                          />
                        </TableCell>
                        <TableCell align={"right"}>
                          <DisplayAmount value={80} small />
                        </TableCell>
                      </TableRow>

                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <DisplayAmount
                            value={14}
                            small
                            currency="Friends Invited"
                          />
                        </TableCell>
                        <TableCell align={"right"}>
                          <DisplayAmount value={42} small />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0}>
            <Box py={3} px={3}>
              <Typography variant="h4" mb={1}>
                Invite Your Friends!
              </Typography>

              <Box py={2}>
                <ReferalCodeInput code="xxx-yyy-zzz" />
              </Box>

              <Typography variant="body1" mb={1}>
                Share this code with your friends,
                <br />
                earn up to 10% of their earnings
                <br />
                and 5% of the people they refer, for life!
              </Typography>

              <Button
                variant="text"
                color="secondary"
                component={Link}
                href="/about/referals"
              >
                Learn More
              </Button>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </Paper>
  )
}

export function ReferalCodeInput({ code }) {
  const copyCode = (event) => {
    event.preventDefault()
    event.stopPropagation()
    navigator.clipboard.writeText(code)
  }

  const selectCode = (event) => {
    event.target.select()
  }

  const CopyButton = () => (
    <IconButton onClick={copyCode}>
      <CopyAll />
    </IconButton>
  )

  return (
    <TextField
      label="Referral code"
      variant="outlined"
      value={code}
      onClick={selectCode}
      InputProps={{ readOnly: true, endAdornment: <CopyButton /> }}
    />
  )
}
