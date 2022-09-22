import { Datepicker } from 'vanillajs-datepicker';

const datePickerParent = document.querySelector('.date-picker');
const datePicker = document.querySelector('input[name="date"]');

const dataPicker = new Datepicker(datePicker, {
  format: 'D, dd M',
  autohide: true,
});

// events for arrow animation
datePicker.addEventListener('focus', () => {
  datePickerParent.classList.add('date-picker--active');
});

datePicker.addEventListener('focusout', () => {
  datePickerParent.classList.remove('date-picker--active');
});
