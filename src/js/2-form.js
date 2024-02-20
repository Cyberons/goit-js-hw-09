document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');

  // Завантаження стану форми з локального сховища
  const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = savedFormState.email || '';
  messageInput.value = savedFormState.message || '';

  // Відстеження події input
  form.addEventListener('input', () => {
    const formState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    // Збереження стану форми у локальне сховище
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));

    // Вивід у консоль об'єкта з полями email, message та їхніми поточними значеннями
    console.log(formState);
  });

  // Очищення сховища та полів форми під час сабміту
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput.value.trim() && messageInput.value.trim()) {
      const formState = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };

      // Вивід у консоль об'єкта з полями email, message та їхніми поточними значеннями
      console.log(formState);

      // Очищення сховища та полів форми
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageInput.value = '';
    } else {
      console.log('Поля форми не заповнені');
    }
  });
});