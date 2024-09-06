function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.classList.contains('show')) {
      sideMenu.classList.remove('show');
    } else {
      sideMenu.classList.add('show');
    }
  }
  