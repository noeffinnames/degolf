const GolfClassName = "icon-activity-golf";
const MainNavItemClassName = ".main-nav-item";

function hideElement() {
  // Find any golf nav elements
  var matchingElements = document.getElementsByClassName(GolfClassName);

  for (var i = 0; i < matchingElements.length; i++) {
    // Find the closest main nav item element
    const mainNavItem = matchingElements.item(i).closest(MainNavItemClassName);
    // Hide it
    mainNavItem.style.display = "none";
  }
}

function start() {
  // Wait half a second for the page to load then hide the golf menu item
  setTimeout(hideElement, 500);
}

start();
