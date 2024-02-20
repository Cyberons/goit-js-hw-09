export function saveFormData(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

export function loadFormData(name) {
  const storedValue = localStorage.getItem(name);

  if (storedValue) {
    return JSON.parse(storedValue);
  }

  return null;
}

export function autofillForm(form) {
  const storedFormData = loadFormData('feedback-form-state');

  if (storedFormData) {
    form.querySelector('input[name="email"]').value = storedFormData.email;
    form.querySelector('textarea[name="message"]').value = storedFormData.message;
  }
}

export function clearFormData() {
  localStorage.removeItem('feedback-form-state');
}

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


const clearButton = document.createElement('button');
clearButton.textContent = 'Clear form data';
clearButton.addEventListener('click', () => {
  clearFormData();
  autofillForm(form);
});

form.appendChild(clearButton);