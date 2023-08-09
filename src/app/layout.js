import * as React from "react"
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry"
import AppBar from "@/components/AppBar"

export const metadata = {
  title: "3ntertain",
  description: "Play and have fun",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <ThemeRegistry>
          <AppBar></AppBar>
          <main>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  )
}