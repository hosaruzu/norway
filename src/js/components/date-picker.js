import { Datepicker } from 'vanillajs-datepicker';

const datePicker = document.querySelector('input[name="date"]');
const dataPicker = new Datepicker(datePicker, {
  format: 'D, dd M',
  autohide: true,
});
