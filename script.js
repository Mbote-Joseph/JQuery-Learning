// $(document).ready(function () {
//   // do stuff when DOM is ready
//   $("#hello").text("Hello Joseph!");
//   $("p").click(function () {
//     $(this).css("color", "red");
//   });
//   $("button").click(function () {
//     $(this).hide();
//   });
// });

$(function () {
  $("#hello").text("Hello Joseph!");
  $("p").click(function () {
    $(this).css("color", "red");
  });
  //   $("p").mouseleave(function () {
  //     alert("Bye! You now leave p1!");
  //   });

  $("#hide").click(function () {
    $("p").toggle("slow");
  });
  $("button").css("color", "#ffffff");
  $("button").css("background", "#ee7e63");
  $("button").css("border", "none");
  $("button").css("padding", "10px 20px");
  $("button").css("border-radius", "10px");

  //   $("#show").click(function () {
  //     $("p").show("slow");
  //   });
  $("#html").click(function () {
    alert($("body").html());
  });
  $("div").height(500);
  $("div").width(500);
  $("div").css("background", "#f9f9f9");
  $("div").css("color", "#ee7e63");
  $("div").css("font-size", "30px");
  $("div").css("text-align", "center");
  $("div").css("padding-top", "50px");
  $("div").css("margin", "auto");
  $("div").css("border-radius", "50px");
  $("div").css("box-shadow", "10px 10px 10px 10px #ee7e63");
});
