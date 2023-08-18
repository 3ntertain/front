"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Paper, Box, Stack, Typography, Button } from "@mui/material"
import {
  doc,
  onSnapshot,
  collection,
  setDoc,
  updateDoc,
} from "firebase/firestore"
import { db } from "@/firebase/config"
import { useAuthContext } from "@/context/AuthContext"

export default function Page() {
  const { user } = useAuthContext()
  const [accesses, setAccesses] = useState([])
  const [game, setGame] = useState([])
  const [events, setEvents] = useState([])
  const params = useParams()

  const docRef = doc(db, "games", params.id)
  const eventsRef = collection(db, `games/${params.id}/events`)
  const accessesRef = collection(
    db,
    `users/${user.uid}/games/${params.id}/events`
  )

  const access = (event) => {
    setDoc(doc(db, `users/${user.uid}/games/${params.id}/events`, event.id), {
      access: true,
    })

    updateDoc(doc(db, `users`, user.uid), {
      tickets: user.tickets - event.price,
    })
  }

  // Get game data
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setGame(doc.data())
    })

    return () => unsubscribe()
  }, [])

  // Get events data
  useEffect(() => {
    const unsubscribe = onSnapshot(eventsRef, (querySnapshot) => {
      const events = []
      querySnapshot.forEach((doc) => {
        events.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      setEvents(events)
    })

    return () => unsubscribe()
  }, [])

  // Get accesses data
  useEffect(() => {
    const unsubscribe = onSnapshot(accessesRef, (querySnapshot) => {
      const accesses = []
      querySnapshot.forEach((doc) => {
        accesses.push(doc.id)
      })

      setAccesses(accesses)
    })

    return () => unsubscribe()
  }, [])

  function eventsWithAccesses() {
    return events.map((event) => {
      return {
        ...event,
        access: accesses.includes(event.id),
        enoughTickets: user?.tickets >= event.price,
      }
    })
  }

  return (
    <>
      {user?.id}
      <Typography variant="h1">{game?.title}</Typography>

      <Stack direction="column" spacing={2} mt={8}>
        {eventsWithAccesses().map((event, index) => (
          <Paper key={index}>
            <Box p={2}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={"space-between"}
              >
                <Typography variant="h4">{event.title}</Typography>

                <Typography variant="h4">{event.price} tickets</Typography>
                {!event.access && (
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!event.enoughTickets}
                    onClick={() => access(event)}
                  >
                    Access
                  </Button>
                )}

                {event.access && (
                  <Typography variant="h4">YOU ARE IN!</Typography>
                )}
              </Stack>
            </Box>
          </Paper>
        ))}
      </Stack>
    </>
  )
}
