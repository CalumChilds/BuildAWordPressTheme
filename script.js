function toggleNavigation() {
    var nav = document.getElementById("site-navigation");
    if (nav.className === "main-navigation") {
        nav.className += " toggled";
    } else {
        nav.className = "main-navigation";
    }
}
