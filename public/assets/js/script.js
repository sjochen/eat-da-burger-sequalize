// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var devour = 1;

    var newDevour = {
      devoured: devour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function (data) {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
