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
import { CopyAll } from "@mui/icons-material"

export default function Layout({ children }) {
  return (
    <Container maxWidth="xl">
      <AuthContextProvider>
        <AuthGuard>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NavigationBar />
            </Grid>

            <Grid item xs={12} md={4}>
              <SideBar />
            </Grid>
            <Grid item xs={12} md={8}>
              {children}
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
      label: "Friends",
      href: "/user/friends",
    },
  ]

  const pathname = usePathname()

  const currentTab = tabs.findIndex((tab) => tab.href === pathname)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={6}>
        <Tabs value={currentTab}>
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

      <Grid item xs={2}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"end"}
          gap={2}
        >
          <Typography variant="h1" color={"primary"}>
            {user.tickets}
          </Typography>

          <Typography variant="h1">Tickets</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export function SideBar() {
  const { user } = useAuthContext()

  return (
    <Paper sx={{ borderRadius: "20px" }}>
      <Box p={2} textAlign={"center"}>
        <img
          src={user.photoURL}
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
          <Typography variant="h2">{user.displayName}</Typography>
          <Typography variant="h2">•</Typography>
          <Typography variant="h2">LVL</Typography>
          <Typography variant="h2" color={"primary"}>
            {user.level}
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

              <DisplayAmount value={12.8} />

              <Box pt={2}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <DisplayAmount
                            value={3}
                            small
                            currency="Events Played"
                          />
                        </TableCell>
                        <TableCell align={"right"}>
                          <DisplayAmount value={8.2} small />
                        </TableCell>
                      </TableRow>

                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <DisplayAmount
                            value={6}
                            small
                            currency="Friends Invited"
                          />
                        </TableCell>
                        <TableCell align={"right"}>
                          <DisplayAmount value={4.6} small />
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
                color="primary"
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
