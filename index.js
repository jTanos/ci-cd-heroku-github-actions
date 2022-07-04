const express = require('express')
const { version } = require('./package.json')
const app = express()
const port = process.env.PORT || 3002

app.get('/health', (req, res) => {
    res.send('ok')
})

app.get('/version', (req, res) =>{
    res.send(version)
})

app.get('/', (req, res)=>{
    res.status(200).json("Run app express in heroku with github actions!!!");
})

app.get('/test', (req, res)=>{
    res.status(200).json("Run test endpoint!!!");
})

const server = app.listen(port, ()=>{
    console.log(`Example server in docker on port ${port}`)
})

module.exports = {app, server}