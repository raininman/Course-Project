const genericCrud = require("./generic.controller");
const { Film } = require("../models/index");

const relations = {
  getAll: 'film',
  get: 'film'
}

module.exports = {
  ...genericCrud(Film, relations),
};
