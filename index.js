const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter.js')
const bodyParser = require('body-parser')
const http = require('http')
const PORT = process.env.PORT || 5000
const {routes} = require('./Router/index')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/auth', authRouter)

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./Router/${item}`));
});


const start = async () =>{

  try{
    await mongoose.connect('mongodb://localhost:27017/course')
    app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))
  }catch(e){
    console.log(e)
  }
}

start()