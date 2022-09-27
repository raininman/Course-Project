const genericCrud = require("./generic.controller");
const { Rating } = require("../models/index");

const relations = {
  getAll: 'rating',
  get: 'rating'
}

module.exports = {
  ...genericCrud(Rating, relations),
};
