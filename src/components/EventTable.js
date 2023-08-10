import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Typography } from "@mui/material"
import { DisplayAmount } from "./DisplayAmount"
import Countdown from "react-countdown"

const events = [
  {
    title: "Weekly #1",
    game: "ALR",
    start: "2021-10-10 10:02:00",
    end: "2023-08-13 17:21:00",
    tickets: 2,
    participants: 100,
    ranking: 23,
    prize: 150,
  },
  {
    title: "Weekly #2",
    game: "ALR",
    start: "2021-10-10 10:00:00",
    end: "2023-08-14 12:22:00",
    tickets: 3,
    participants: 83,
    ranking: 0,
    prize: 186,
  },
  {
    title: "Weekly #3",
    game: "ALR",
    start: "2021-10-10 10:00:00",
    end: "2023-08-12 11:33:00",
    tickets: 1,
    participants: 30,
    ranking: 4,
    prize: 22,
  },
]

export default function EventTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontWeight: "bold" }}>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell align="right" width={"200px"}>
              Ends in
            </TableCell>
            <TableCell align="right">Ranking</TableCell>
            <TableCell align="right">Tickets</TableCell>
            <TableCell align="right">Price Pool</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow
              key={event.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {event.game} | {event.title}
              </TableCell>
              <TableCell align="right">
                <Countdown date={event.end} />
              </TableCell>
              <TableCell align="right">
                {event.ranking > 0 && (
                  <>
                    <Typography
                      color={"primary"}
                      variant="h4"
                      display={"inline"}
                    >
                      {event.ranking}
                    </Typography>{" "}
                    /{" "}
                  </>
                )}
                {event.participants}
              </TableCell>
              <TableCell align="right">x {event.tickets}</TableCell>
              <TableCell align="right">
                <DisplayAmount value={event.prize} small />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
