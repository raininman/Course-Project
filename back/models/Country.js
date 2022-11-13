const {Schema, model} = require('mongoose')

const Country = new Schema({
  title: {type:String, unique:true},
  description: {type:String, unique:true},
  film:{type:String, ref:'Film'}
})

module.exports = model('Country', Country)