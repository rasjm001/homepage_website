/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topbar_navigation_function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }