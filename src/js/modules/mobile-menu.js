function mobileMenu() {
  //mobile-menu
  const iconMenuOpen = document.querySelector('.menu__icon--open');
  const iconMenuClose = document.querySelector('.menu__icon--close');
  const menuBody = document.querySelector('.menu__body');

  function toggleMenu() {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('menu__body--active');
  }

  iconMenuOpen.addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();
  });

  iconMenuClose.addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();
  });
}

export default mobileMenu;

