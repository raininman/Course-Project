const genericCrud = require("./generic.controller");
const { Country } = require("../models/index");

const relations = {
  getAll: 'country',
  get: 'country'
}

module.exports = {
  ...genericCrud(Country, relations),
};
