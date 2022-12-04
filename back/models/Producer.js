const { Schema, model } = require('mongoose')

const Producer = new Schema({
  name: { type: String, unique: true },
  description: { type: String },
  age: { type: String },
  photoURL: { type: String },
  category: { type: String },
  country: { type: String, ref: 'Country' },
  film: { type: String, ref: 'Film' },
})

module.exports = model('Producer', Producer)
