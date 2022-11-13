const {Schema, model} = require('mongoose')

const Category = new Schema({
  title: {type:String, unique:true},
  description: {type:String, unique:true},
  country:{type:String, ref:'Country'},
  producer:{type:String, ref:'Producer'},
  decade:{type:String, ref:'Country'}
})

module.exports = model('Category', Category)