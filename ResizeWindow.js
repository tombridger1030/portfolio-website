function layoutHandler() {
  var styeLink = document.getElementById("pageStyle");
  if (window.innerWidth < 900) {
    styleLink, setAttribute("href", "mobile.css");
  } else if (window.innerWidth < 1200) {
    styleLink, setAttribute("href", "medium.css");
  } else {
    styleLink, setAttribute("href", "regular.css");
  }
}

window.onresize = layoutHandler;
layoutHandler();
