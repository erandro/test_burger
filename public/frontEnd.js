// Add burger to db "on click"
$(function () {
  $("#burgerButton").on("click", function (event) {
    event.preventDefault();

    var addBurger = {
      burger_name: $("#burgerName")
        .val()
        .trim(),
      devoured: 0
    };
    console.log(addBurger);

    $.ajax("/api/burgers/", {
      type: "POST",
      data: addBurger
    }).then(function () {
      console.log("Added new burger");
      location.reload();
    });
  });

  // Change devoured state to true
  $(".devourBurger").on("click", function (event) {
    event.preventDefault();
    console.log("ARRRRRGH!")
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
      console.log("Burger Devoured!!!");
      location.reload();
    });
  });

});


