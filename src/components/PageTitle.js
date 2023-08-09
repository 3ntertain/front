import React from "react"
import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"

export const PageTitle = (props) => {
  return (
    <Box my={8} textAlign={"center"}>
      <Typography variant="h1" sx={{ textTransform: "capitalize" }}>
        {props.children}
      </Typography>
      {props.subtitle && (
        <Typography variant="h4" color="textSecondary" mt={3}>
          {props.subtitle}
        </Typography>
      )}

      {props.action && (
        <Box pt={5}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href={props.href}
          >
            {props.action}
          </Button>
        </Box>
      )}
    </Box>
  )
}
