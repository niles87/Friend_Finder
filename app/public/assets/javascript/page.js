$("#submit-button").on("click", function(event) {
  event.preventDefault();

  var validate = true;

  if (
    ($("#name").val() ||
      $("#photo").val() ||
      $("#Question1").val() ||
      $("#Question2").val() ||
      $("#Question3").val() ||
      $("#Question4").val() ||
      $("#Question5").val() ||
      $("#Question6").val() ||
      $("#Question7").val() ||
      $("#Question8").val() ||
      $("#Question9").val() ||
      $("#Question10").val()) === ""
  ) {
    validate = false;
  }

  if (validate) {
    var userInput = {
      name: $("#name")
        .val()
        .trim(),
      photo: $("#photo")
        .val()
        .trim(),
      scores: [
        $("#Question1").val(),
        $("#Question2").val(),
        $("#Question3").val(),
        $("#Question4").val(),
        $("#Question5").val(),
        $("#Question6").val(),
        $("#Question7").val(),
        $("#Question8").val(),
        $("#Question9").val(),
        $("#Question10").val(),
      ],
    };
    console.log(userInput);

    // Clear input fields
    $("#name").val("");
    $("#photo").val("");
    $("#Question1").val("");
    $("#Question2").val("");
    $("#Question3").val("");
    $("#Question4").val("");
    $("#Question5").val("");
    $("#Question6").val("");
    $("#Question7").val("");
    $("#Question8").val("");
    $("#Question9").val("");
    $("#Question10").val("");

    postFriends(userInput);
  } else {
    $("#match-name").text("Finish the survey to see your new friend");
    $("#modal").modal("toggle");
  }
});
function postFriends(input) {
  $.post("/api/friends", input, function(reply) {
    console.log(reply);
    showFriend(reply);
  });

  function showFriend(data) {
    console.log(data);
    console.log(data.friendName);
    console.log(data.friendPhoto);
    $("#match-photo").attr("src", data.friendPhoto);
    $("#match-name").text(data.friendName);
    $("#modal").modal("toggle");
  }
}
