const {Schema, model} = require('mongoose')


const Rating = new Schema({
  kp: {type:String},
  imdb: {type:String},
  meta:{type:String},
  rotten:{type:String}
})

module.exports = model('Rating', Rating)