"use client"
import React from "react"
import signIn from "@/firebase/signin"
import signInGoogle from "@/firebase/signInGoogle"
import { useRouter } from "next/navigation"
import {
  Button,
  Box,
  Paper,
  Stack,
  Tabs,
  Tab,
  TextField,
  Typography,
} from "@mui/material"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  )
}

export default function Page() {
  const [value, setValue] = React.useState(0)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const router = useRouter()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleConnectGoogle = async () => {
    await signInGoogle()

    return router.push("/user")
  }

  const handleForm = async (event) => {
    event.preventDefault()

    if (value === 0) {
      // Sign Up
      await signUp(email, password)
    } else {
      // Sign In
      await signIn(email, password)
    }

    return router.push("/user")
  }

  return (
    <Stack gap={3}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Sign Up" {...a11yProps(0)} />
          <Tab label="Sign In" {...a11yProps(1)} />
        </Tabs>

        <Box pt={2}>
          <form onSubmit={handleForm} className="form">
            <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <CustomTabPanel value={value} index={0}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Create Account
                </Button>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Connect
                </Button>

                <Typography variant="body1" mt={1}>
                  Forgot Password?
                  <Button type="submit" variant="text" size="small">
                    Reset Password
                  </Button>
                </Typography>
              </CustomTabPanel>
            </Stack>
          </form>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }}>
        <Button
          type="submit"
          variant="outlined"
          size="large"
          onClick={handleConnectGoogle}
          fullWidth
        >
          Connect with Google
        </Button>
      </Paper>
    </Stack>
  )
}
