const express = require('express')
const mongoose =  require ('mongoose')
const cors = require ('cors')
const userModel = require('./models/users')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/', (req,res) => {
    userModel.find({})
    .then(users => res.json(users))
    .catch( err => res.json(er))
})

app.post("/createUser", (req, res) =>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log('Server is running')
})

