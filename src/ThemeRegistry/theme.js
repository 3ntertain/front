import { Montserrat } from "next/font/google"
import { createTheme } from "@mui/material/styles"
import { pink, grey, amber, common, orange } from "@mui/material/colors"

export const montserrat = Montserrat({
  weight: ["300", "500", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
})

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#12f51d",
    },
    secondary: {
      main: pink[500],
    },
    background: {
      default: "#1f1f1f",
      paper: "rgba(0, 0, 0, 0.6)",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontWeightBold: 900,
    fontSize: "1.2rem",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 900,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 900,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 900,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 900,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
})

export default theme
