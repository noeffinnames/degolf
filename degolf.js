// find main-nav-item components that have icon-activity-golf inside them
// <li class="main-nav-item" ...>
//   <a class="main-nav-link active" ...>
//     <i class="nav-icon icon-activity-golf">

//console.log("in degolf");

function hideElement() {
  //console.log("in hideElement");
  var matchingElements = document.getElementsByClassName("icon-activity-golf");

  for (var i = 0; i < matchingElements.length; i++) {
    var mainNavItem = matchingElements.item(i).closest(".main-nav-item");
    mainNavItem.style.display = "none";
  }
}

// Wait for the page to load then hide the thing
setTimeout(hideElement, 500);
