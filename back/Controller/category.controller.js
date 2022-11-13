const genericCrud = require("./generic.controller");
const { Category } = require("../models/index");

const relations = {
  getAll: 'category',
  get: 'category'
}

module.exports = {
  ...genericCrud(Category, relations),
};
