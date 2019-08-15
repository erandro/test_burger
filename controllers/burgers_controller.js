var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (request, response) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });

  router.post("/api/burgers", function (request, response) {
    burger.insertOne(
      ["burger_name", "devoured"],
      [request.body.burger_name, request.body.devoured],
      function (result) {
        console.log("Test")
        response.json({ id: result.insertId });
      }
    );
  });
  router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: request.body.devoured }, condition, function (
      result
    ) {
      if ((result.changedRows === 0)) {
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });
});

// Export router for server.js 

module.exports = router;
