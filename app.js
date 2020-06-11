const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CricinfoDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const cric_infoRouter = require('./routes/cric_info')
app.use('/cricketers',cric_infoRouter)

app.listen(9000, () => {
    console.log('Server started')
})