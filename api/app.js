const express = require('express')
const app = express()
const cors = require('cors')
const cardRoutes = require('./routes/cards.routes')

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json());
app.use("/cards", cardRoutes)



module.exports = app;