"use client"
import React from "react"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { ConnectWallet } from "@/components/ConnectWallet"
import { Web3Context } from "@/context/Web3Context"
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material"
import { DisplayAmount } from "@/components/DisplayAmount"
import Countdown from "react-countdown"

const claims = [
  {
    rank: 1,
    player: {
      uid: "51a85029-7c36-41cc-b929-b0cf14f10026",
      wallet: "9a94d5d2-a66f-497a-8a17-a02db651f44e",
      name: "Love",
      accountLevel: 25,
    },
    bracket: "gold",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "9a94d5d2-a66f-497a-8a17-a02db651f44e",
        amount: 8.290924699116637,
        type: "player",
      },
      {
        wallet: "312b81fe-dc5a-420a-965e-faddc9625932",
        amount: 0.5181827936947898,
        type: "referal",
      },
      {
        wallet: "450b4fb5-4c27-4b4d-967b-7414e04c6c70",
        amount: 0.058036472893816464,
        type: "referalN2",
      },
    ],
    earning: {
      base: 4.1454623495583185,
      bonusLevel: 2.0727311747791592,
      bonusReferalLevel: 2.0727311747791592,
      referal: 0.5181827936947898,
      referalN2: 0.058036472893816464,
      total: 8.290924699116637,
    },
    earningFactor: {
      base: 253.25,
      bonusLevel: 126.625,
      bonusReferalLevel: 126.625,
      total: 506.5,
      referal: 31.65625,
      referalN2: 3.5455,
    },
    claimed: false,
  },
  {
    rank: 2,
    player: {
      uid: "9c0f48b5-ed1c-4bcb-ac2f-f2c9d5986d02",
      wallet: "d42ed5e0-4d06-4133-9604-513df75207f7",
      name: "Reid",
      accountLevel: 16,
    },
    bracket: "gold",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "d42ed5e0-4d06-4133-9604-513df75207f7",
        amount: 4.2559239844143475,
        type: "player",
      },
      {
        wallet: "e7d84155-dc5a-48af-9869-e5fd5646a82e",
        amount: 0.1519972851576553,
        type: "referal",
      },
      {
        wallet: "ee752977-f4a3-47ed-b573-1ab6b70880e8",
        amount: 0.09396195809745964,
        type: "referalN2",
      },
    ],
    earning: {
      base: 2.76358700286646,
      bonusLevel: 0.8843478409172671,
      bonusReferalLevel: 0.6079891406306211,
      referal: 0.1519972851576553,
      referalN2: 0.09396195809745964,
      total: 4.2559239844143475,
    },
    earningFactor: {
      base: 168.83,
      bonusLevel: 54.025600000000004,
      bonusReferalLevel: 37.1426,
      total: 259.9982,
      referal: 9.28565,
      referalN2: 5.74022,
    },
    claimed: false,
  },
  {
    rank: 3,
    player: {
      uid: "d856463a-6cf8-431c-a679-f1517731c95d",
      wallet: "11fc0372-e466-4c45-8c6f-437d300b21b8",
      name: "Petersen",
      accountLevel: 0,
    },
    bracket: "gold",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "11fc0372-e466-4c45-8c6f-437d300b21b8",
        amount: 2.0726493295205306,
        type: "player",
      },
    ],
    earning: {
      base: 2.0726493295205306,
      bonusLevel: 0,
      bonusReferalLevel: 0,
      referal: 0,
      referalN2: 0,
      total: 2.0726493295205306,
    },
    earningFactor: {
      base: 126.62,
      bonusLevel: 0,
      bonusReferalLevel: 0,
      total: 126.62,
      referal: 0,
      referalN2: 0,
    },
    claimed: true,
  },
  {
    rank: 4,
    player: {
      uid: "66ebc676-2ba9-452a-b26a-071744531c40",
      wallet: "b80cfc93-6651-41bc-8e4b-b0716e392923",
      name: "Odom",
      accountLevel: 17,
    },
    bracket: "gold",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "b80cfc93-6651-41bc-8e4b-b0716e392923",
        amount: 2.5867685061243906,
        type: "player",
      },
      {
        wallet: "d6832fa7-7d81-46e6-8fbb-9aaf5a702f35",
        amount: 0.09120017169028301,
        type: "referal",
      },
      {
        wallet: "2184cb3a-1a24-4b89-9d86-87b947fe0384",
        amount: 0.00663273975929331,
        type: "referalN2",
      },
    ],
    earning: {
      base: 1.6581849398233275,
      bonusLevel: 0.5637828795399313,
      bonusReferalLevel: 0.36480068676113203,
      referal: 0.09120017169028301,
      referalN2: 0.00663273975929331,
      total: 2.5867685061243906,
    },
    earningFactor: {
      base: 101.3,
      bonusLevel: 34.442,
      bonusReferalLevel: 22.285999999999998,
      total: 158.028,
      referal: 5.5714999999999995,
      referalN2: 0.4052,
    },
    claimed: false,
  },
  {
    rank: 5,
    player: {
      uid: "2ecba138-d613-41ad-990a-5b376bfc7225",
      wallet: "b1f7cf61-3b63-4ba1-b520-6e920e0d89b6",
      name: "Simmons",
      accountLevel: 6,
    },
    bracket: "silver",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "b1f7cf61-3b63-4ba1-b520-6e920e0d89b6",
        amount: 3.097926992912606,
        type: "player",
      },
    ],
    earning: {
      base: 2.7660062436719697,
      bonusLevel: 0.33192074924063636,
      bonusReferalLevel: 0,
      referal: 0,
      referalN2: 0,
      total: 3.097926992912606,
    },
    earningFactor: {
      base: 168.97779358303922,
      bonusLevel: 20.277335229964706,
      bonusReferalLevel: 0,
      total: 189.25512881300392,
      referal: 0,
      referalN2: 0,
    },
    claimed: false,
  },
  {
    rank: 7,
    player: {
      uid: "3f9a4d21-1df0-4da5-a173-bf7e58a992fd",
      wallet: "68c8e5d2-6e8d-46af-aeba-f587af99b161",
      name: "Berger",
      accountLevel: 10,
    },
    bracket: "silver",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "68c8e5d2-6e8d-46af-aeba-f587af99b161",
        amount: 2.573651128880881,
        type: "player",
      },
    ],
    earning: {
      base: 2.144709274067401,
      bonusLevel: 0.4289418548134802,
      bonusReferalLevel: 0,
      referal: 0,
      referalN2: 0,
      total: 2.573651128880881,
    },
    earningFactor: {
      base: 131.02220641696078,
      bonusLevel: 26.204441283392157,
      bonusReferalLevel: 0,
      total: 157.22664770035294,
      referal: 0,
      referalN2: 0,
    },
    claimed: false,
  },
  {
    rank: 9,
    player: {
      uid: "ad75c4d1-d390-41dc-b094-77764657b591",
      wallet: "f7252174-95e6-4228-9677-d09b57a7d326",
      name: "Strickland",
      accountLevel: 8,
    },
    bracket: "bronze",
    totalPlayers: 10,
    tickets: 3,
    prizePool: 27,
    expirationDate: "2023-08-27T22:00:00.000Z",
    game: {
      title: "Alpha League Racing",
      symbol: "ALR",
    },
    tournament: {
      title: "Weely Tournaments",
      dateEnd: "2023-08-14 00:00:00",
    },
    transactions: [
      {
        wallet: "f7252174-95e6-4228-9677-d09b57a7d326",
        amount: 3.2021439377373095,
        type: "player",
      },
    ],
    earning: {
      base: 2.7604689118425085,
      bonusLevel: 0.44167502589480134,
      bonusReferalLevel: 0,
      referal: 0,
      referalN2: 0,
      total: 3.2021439377373095,
    },
    earningFactor: {
      base: 168.63951303250894,
      bonusLevel: 26.98232208520143,
      bonusReferalLevel: 0,
      total: 195.62183511771036,
      referal: 0,
      referalN2: 0,
    },
    claimed: false,
  },
]

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  React.useEffect(() => {
    if (user == null) router.push("/")
  }, [user])

  return (
    <>
      <Web3Context>
        <ConnectWallet />

        <Stack spacing={1} mt={2}>
          {claims.map((claim, index) => (
            <Paper
              elevation={0}
              key={index}
              sx={claim.claimed ? { opacity: 0.2 } : {}}
            >
              <Box p={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <Box>
                    <DisplayAmount value={claim.earning.total} />
                    <Box>
                      <DisplayAmount
                        value={claim.earning.bonusLevel}
                        small
                      ></DisplayAmount>{" "}
                      <b>Bonus Level</b>
                    </Box>
                    <Box>
                      <DisplayAmount
                        value={claim.earning.bonusReferalLevel}
                        small
                      ></DisplayAmount>{" "}
                      <b>Bonus Referal</b>
                    </Box>
                  </Box>

                  <Box p={1} textAlign={"center"}>
                    <Typography variant="h1" display={"inline"}>
                      #{claim.rank}
                    </Typography>
                    <Typography variant="h5" display={"inline"}>
                      {" "}
                      / {claim.totalPlayers}
                    </Typography>
                    <Box>
                      <Chip
                        variant={"outlined"}
                        label={`${
                          (claim.bracket == "gold" && "🥇") ||
                          (claim.bracket == "silver" && "🥈") ||
                          (claim.bracket == "bronze" && "🥉")
                        } BRACKET`}
                      />
                    </Box>
                  </Box>
                  <Box>
                    {claim.claimed && (
                      <Typography variant="h2">CLAIMED</Typography>
                    )}
                    {!claim.claimed && (
                      <>
                        <Button variant="contained" color="primary">
                          Claim
                        </Button>
                        <Box pt={2} textAlign={"center"}>
                          <Countdown date={claim.expirationDate} />
                        </Box>
                      </>
                    )}
                  </Box>
                </Stack>

                <Stack direction="row" justifyContent="space-between"></Stack>
              </Box>
              <Paper>
                <Box py={1} px={2}>
                  <Box>
                    {claim.game.title} | {claim.tournament.title} | 3x tickets |
                    PrizePool: 27 USDC
                  </Box>
                </Box>
              </Paper>
            </Paper>
          ))}
        </Stack>
      </Web3Context>
    </>
  )
}
