//The required Node Modules

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
require('dotenv').config()

app = express()

//To parse the form data

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());     
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser())

//Mongodb URI

//const uri = `mongodb://127.0.0.1:27017/test`;
mongoose.connect(process.env.URI, {usenewUrlParser: true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log(`MongoDB connected successfully`);
})

//The routes
const auth = require(`./routes/userauth`)
const city = require('./routes/city')
const hostels = require('./routes/hostels')
const owner = require('./routes/owner')
const organisation = require('./routes/organisation')
const reviews = require('./routes/reviews')

//The routing of requests
app.use('/userauth', auth)
app.use('./city', city)
app.use('./hostels', hostels)
app.use('./owner', owner)
app.use('./organisation', organisation)
app.use('./reviews', reviews)


app.listen(5000, () => {
  console.log(`The server is listening on the port 5000`);
});
