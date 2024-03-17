const mobileMenu = document.querySelector('.menu-mobile')

function guga() {
  if (mobileMenu.className === "menu-mobile-active") {
    mobileMenu.className = "menu-mobile"
  } else {
    mobileMenu.className = "menu-mobile-active"
  }
}