document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var d = document.getElementById("rates-date");
  if (d) {
    d.textContent = "Rates for " + new Date().toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long"
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
