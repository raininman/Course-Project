const { Schema, model } = require('mongoose')

const Rating = new Schema({
  kp: { type: String },
  imdb: { type: String },
  film: { type: String, unique: true },
})

module.exports = model('Rating', Rating)
