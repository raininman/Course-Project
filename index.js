const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter.js')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const start = async () =>{

  try{
    await mongoose.connect('mongodb://localhost:27017/course')
    app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))
  }catch(e){
    console.log(e)
  }
}

start()