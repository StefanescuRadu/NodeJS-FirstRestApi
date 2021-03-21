

const express = require('express')
const app = express()
const mongoose = require('mongoose')

var uri = "mongodb://StefanescuRadu:sehulop194@cluster0-shard-00-00.oxzqz.mongodb.net:27017,cluster0-shard-00-01.oxzqz.mongodb.net:27017,cluster0-shard-00-02.oxzqz.mongodb.net:27017/authentication_basics?ssl=true&replicaSet=atlas-l828wf-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))