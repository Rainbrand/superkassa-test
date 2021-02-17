import express from 'express'
import cors from "cors";

const PORT = 9000

const app = express()
app.use(express.json())
app.use(cors())

let state = false

app.get("/api/get_state", ((req, res) => {
    res.send(state).status(200)
    console.log(`State is ${state}`)
}))

app.get("/api/set_state", ((req, res) => {
    state = !state
    console.log(`State is ${state}`)
    res.send(state).status(200)
}))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
