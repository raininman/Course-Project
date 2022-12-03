const { Schema, model } = require('mongoose')

const Popular = new Schema({
  title: { type: String },
  year: { type: Number },
  imgURL: { type: String },
  id: { type: String },
})

module.exports = model('Popular', Popular)
