const genericCrud = require("./generic.controller");
const { Decade } = require("../models/index");

const relations = {
  getAll: 'decade',
  get: 'decade'
}

module.exports = {
  ...genericCrud(Decade, relations),
};
