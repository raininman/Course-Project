const {Schema, model} = require('mongoose')

const Country = new Schema({
  title: {type:String, unique:true},
  description: {type:String},
  background: {type:String},
  film:{type:String, ref:'Film'}
})

module.exports = model('Country', Country)