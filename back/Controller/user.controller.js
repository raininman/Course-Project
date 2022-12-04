const genericCrud = require("./generic.controller");
const { User } = require("../models/index");

const relations = {
  getAll: 'user',
  get: 'user'
}

module.exports = {
  ...genericCrud(User, relations),
};
