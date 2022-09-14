import rater from 'rater-js';

const ratingStars = document.querySelectorAll('.booking-card__rating');

ratingStars.forEach((el) => {
  new rater({
    element: el,
    rateCallback: (rating, done) => {
      this.setRating(rating);
      done();
    },
    readOnly: true,
    starSize: 20,
  });
});
