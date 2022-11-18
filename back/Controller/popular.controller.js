const genericCrud = require("./generic.controller");
const { Popular } = require("../models/index");

const relations = {
  getAll: 'popular',
  get: 'popular'
}

module.exports = {
  ...genericCrud(Popular, relations),
};