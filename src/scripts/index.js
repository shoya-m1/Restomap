// import "regenerator-runtime"; /* for async await transpile */
import "./component/list-restorants.js";
import "../styles/main.scss";
import $ from "jquery";

window.addEventListener("load", () => {
  const loader = document.querySelector(".load");
  setTimeout(() => {
    loader.classList.add("loader-hiden");
    $("header").css("display", "block");
    $("main").css("display", "block");
    $(".footer").css("display", "flex");
    $(".load").css("display", "none");
  }, 2500);
});

function scroll(scroll) {
  if (scroll > 10) {
    $("nav").addClass("nav-light");
    $(".nav-item a").css("color", " rgb(94, 94, 94)");
  } else {
    $("nav").removeClass("nav-light");
    $(".nav-item a").css("color", "white");
  }
}

window.addEventListener("scroll", function () {
  scroll(this.scrollY);
});

$.getJSON("./data/DATA.json", function (data) {
  const restaurants = data.restaurants;
  restaurants.forEach((resto) => {
    const listResto = $("<list-restorants></list-restorants>").get(0);
    listResto.resto = resto;
    $(".mainCard").append(listResto);
  });
});

$(".toggle").on("click", () => {
  const checkBox = $("#checkbox2");
  checkBox.prop("checked", !checkBox.prop("checked"));
  $(".nav-list").toggleClass("menu-view").siblings().removeClass("menu-view");
});
