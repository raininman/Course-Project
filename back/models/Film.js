const { Schema, model } = require('mongoose')

const Film = new Schema({
  title: { type: String },
  description: { type: String },
  year: { type: Number },
  imgURL: { type: String },
  awards: { type: String },
  rating: { type: String, ref: 'Rating' },
  category: { type: String },
  decade: { type: String },
  country: { type: String },
  producer: { type: String },
})

module.exports = model('Film', Film)
