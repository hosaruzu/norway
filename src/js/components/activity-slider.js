import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.activities__content', {
  slidesPerView: 4,
  spaceBetween: 25,
  navigation: {
    nextEl: '.activities__button-next',
    prevEl: '.activities__button-prev',
  },
});
