const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

const hero = document.querySelector('.hero');
const heroHeight = hero.getBoundingClientRect().height;

const stickyShowOffset = heroHeight - headerHeight / 2;

window.onscroll = () => {
  if (window.scrollY > stickyShowOffset) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
};
