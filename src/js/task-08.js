const loginForm = document.querySelector('.login-form');
const button = document.querySelector('.login-form button');

const onFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value === '' || password.value === ''
    ? alert('Please, fill in the lines')
    : console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
};

loginForm.addEventListener('submit', onFormSubmit);
