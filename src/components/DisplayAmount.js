import * as React from "react"
import { Typography } from "@mui/material"

export const DisplayAmount = (props) => {
  const formatedValue = () => props.value.toLocaleString("en-US")

  const variantClass = () => {
    if (props.small) return "inherit"
    return "h1"
  }

  return (
    <React.Fragment>
      <Typography
        sx={{ display: "inline" }}
        color={"primary"}
        fontWeight={"bold"}
        variant={variantClass()}
        mr={1}
      >
        {formatedValue()}
      </Typography>

      <span>{props.currency ? props.currency : "USDC"}</span>
    </React.Fragment>
  )
}
