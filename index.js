require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connectDB = require('./connection')
const todoRouter = require('./routes/todo')
const cors = require('cors');

connectDB(process.env.MONGODB_URL)

app.use(cors())
app.use(express.json())
app.use('/todo', todoRouter)

app.listen(PORT, () => console.log(`Server is listening at port no. ${PORT}...`))