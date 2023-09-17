function toggle() {
    console.log("toggle");
    var x = document.getElementById("map");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }