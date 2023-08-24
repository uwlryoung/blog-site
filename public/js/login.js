const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    console.log(results);

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText + "\nIncorrect email or password, please try again.");
    }
  }
};

let loginForm = document 
  .querySelector('.login-form')
  if (loginForm){
    loginForm.addEventListener('submit', loginFormHandler);
  }
