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
  //   $("div").animate({ height: "400px", width: "400px" }, 3000);
  //   $("div").animate({ height: "500px", width: "500px" }, 3000);
  //   $("div").animate({ height: "400px", width: "400px" }, 3000);
  //   $("div").animate({ height: "500px", width: "500px" }, 3000);

  //  Function to keep the animation going forever and ever
  function animateDiv() {
    $("div").animate({ height: "400px", width: "400px" }, 3000);
    $("div").animate({ height: "500px", width: "500px" }, 3000, animateDiv);
  }
  animateDiv();

  //   Animating the box shadow to make it look like it's moving around the screen and changing colors as it goes along the way
  function animateDiv2() {
    $("div").animate(
      {
        height: "400px",
        width: "400px",
        boxShadow: "10px 10px 10px 10px #ee7e63",
      },
      3000
    );
    $("div").animate(
      {
        height: "500px",
        width: "500px",
        boxShadow: "10px 10px 10px 10px #f9f9f9",
      },
      3000,
      animateDiv2
    );
  }
  animateDiv2();
});

// Array of courses, prices, book pages, and book prices
let courses = [
  {
    name: "HTML",
    price: 100,
    book: "HTML for Dummies",
    bookPrice: 20,
  },
  {
    name: "CSS",
    price: 100,
    book: "CSS for Dummies",
    bookPrice: 20,
  },
  {
    name: "JavaScript",
    price: 100,
    book: "JavaScript for Dummies",
    bookPrice: 20,
  },
  {
    name: "Python",
    price: 100,
    book: "Python for Dummies",
    bookPrice: 20,
  },
  {
    name: "Java",
    price: 100,
    book: "Java for Dummies",
    bookPrice: 20,
  },
  {
    name: "C++",
    price: 100,
    book: "C++ for Dummies",
    bookPrice: 20,
  },
];

// Function to display the courses on a table
$(function () {
  let table = $("#table");
  let data = "";
  data += "<tr>";
  data += "<th>" + "Course" + "</th>";
  data += "<th>" + "Price" + "</th>";
  data += "<th>" + " Book Title " + "</th>";
  data += "<th>" + "Book Price " + "</th>";
  data += "</tr>";
  for (let i = 0; i < courses.length; i++) {
    data += "<tr>";
    data += "<td>" + courses[i].name + "</td>";
    data += "<td>" + courses[i].price + "</td>";
    data += "<td>" + courses[i].book + "</td>";
    data += "<td>" + courses[i].bookPrice + "</td>";
    data += "</tr>";
  }
  var total = 0;
  for (let i = 0; i < courses.length; i++) {
    total += courses[i].price;
  }
  data += "<tr>";
  data += "<td>" + "Total :" + "</td>";
  data += "<td>" + total + "</td>";
  data += "<td>" + " " + "</td>";
  data += "<td>" + " " + "</td>";
  data += "</tr>";

  table.append(data);
  table.css("border", "2px solid black");
  table.css("border-collapse", "collapse");
  table.css("width", "500px");
  table.css("height", "200px");
  table.css("margin", "auto");
  table.css("margin-top", "50px");
  table.css("text-align", "center");
  table.css("font-size", "20px");
  //   Insert border in between each row
  $("tr").css("border", "1px solid black");
  //   Insert border in between each column
  $("td").css("border", "1px solid black");
  //   Insert border around the entire table
  $("th").css("border", "1px solid black");
});
