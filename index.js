const express = require('express')
const app = express()
const port = process.env.PORT || 3002

app.get('/', (req, res)=>{
    res.status(200).json("Run app express in heroku with jenkins!!!");
})

const server = app.listen(port, ()=>{
    console.log(`Example server in docker on port ${port}`)
})

module.exports = {app, server}