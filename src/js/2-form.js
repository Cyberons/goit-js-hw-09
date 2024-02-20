import { saveFormData, loadFormData, autofillForm, clearFormData } from './2-form.js';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
  if (event.target.name) {
    const formData = {
      email: form.querySelector('input[name="email"]').value,
      message: form.querySelector('textarea[name="message"]').value,
    };

    saveFormData('feedback-form-state', formData);
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = loadFormData('feedback-form-state');

  if (formData) {
    console.log(formData);
  }

  clearFormData();
  autofillForm(form);
});

autofillForm(form);