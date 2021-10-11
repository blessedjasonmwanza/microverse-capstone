document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('.nav-menu');
  const navMenuItems = document.querySelectorAll('.nav-menu a');
  const openNavTrigger = document.querySelector('.mobile-nav-trigger');
  const closeNavTrigger = document.querySelector('.close-nav-trigger');

  // Navigation controllers
  openNavTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.display = 'flex';
  });
  closeNavTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.display = 'none';
  });
  navMenuItems.forEach((element) => {
    element.addEventListener('click', () => {
      navMenu.style.display = 'none';
    });
  });
});