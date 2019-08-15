var orm = require("../config/orm");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },
  insertOne: function(columns, values, callback) {
    orm.insertOne("burgers", columns, values, function(result) {
      callback(result);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(result) {
      callback(result);
    });
  }
};

module.exports = burger;