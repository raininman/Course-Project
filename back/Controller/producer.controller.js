const genericCrud = require("./generic.controller");
const { Producer } = require("../models/index");

const relations = {
  getAll: 'producer',
  get: 'producer'
}

module.exports = {
  ...genericCrud(Producer, relations),
};
