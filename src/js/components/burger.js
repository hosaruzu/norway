import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(function () {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuItems = document.querySelectorAll('[data-menu-item]');
  const header = document.querySelector('.header');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('burger--active');
    menu?.classList.toggle('nav--active');
    header.classList.toggle('header--no-blur');

    if (menu.classList.contains('nav--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close the menu');
      disablePageScroll();
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open the menu');
      enablePageScroll();
    }
  });

  menuItems.forEach((el) => {
    el.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Close the menu');
      burger.classList.remove('burger--active');
      menu.classList.remove('nav--active');
      enablePageScroll();
    });
  });
})();
