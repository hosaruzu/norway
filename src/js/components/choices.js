import Choices from 'choices.js';

const elements = document.querySelectorAll('.select');

elements.forEach((el) => {
  new Choices(el, {
    shouldSort: false,
    searchEnabled: false,
    allowHTML: true,
    itemSelectText: '',
  });
});
