import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);
new Swiper('.activities__content', {
  slidesPerView: 4,
  spaceBetween: 25,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.activities__button-next',
    prevEl: '.activities__button-prev',
  },
});
