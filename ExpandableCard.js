const more = document.getElementById("opening-arrow");
const expand = document.getElementById("card-container");

more.addEventListener("click", function () {
  expand.classList.toggle("active");
  moreSoftware.classList.toggle("active");
});

const moreSoftware = document.getElementById("opening-arrow-software");
const expandSoftware = document.getElementById("card-container-software");

moreSoftware.addEventListener("click", function () {
  expandSoftware.classList.toggle("active");
  moreSoftware.classList.toggle("active");
});
