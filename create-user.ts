import { SpritzApiClient } from "@spritz-finance/api-client"

let client = SpritzApiClient.initialize({})

const user = await client.user.create({
    email: 'cmikeb@gmail.com',
  })
  
console.log("user:\n", user)

// Expected response:
//   user = {
//     email: "bilbo@shiremail.net"
//     userId: "62d17d3b377dab6c1342136e",
//     apiKey: "ak_ZTBGDcjfdTg3NmYtZDJlZC00ZjYyLThlMDMtZmYwNDJiZDRlMWZm"
//   }