const path = require("path")
const fs = require("fs")
const express = require("express")
const userRouter = require('./router')

const app = express()

app.use((req, res, next) => {
  console.log("Start:", Date.now())
  next()
})

app.use('/api', userRouter)

app.use((err, res) => {
  res.send(`Error:`, err.message)
})

app.listen(8060, () => {
  console.log("Server open success:http://127.0.0.1:8060")
})