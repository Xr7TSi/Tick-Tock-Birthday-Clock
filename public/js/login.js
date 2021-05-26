const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // const email = document.querySelector('#email-login').value.trim();
  const name = document.querySelector('#name-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};


// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name-signup').value.trim();
//   // const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();
//   const birthdayMonth = document.querySelector('#month-signup').value.trim();
//   const birthdayDay = document.querySelector('#day-signup').value.trim();
//   const color = document.querySelector('#color-signup').value.trim();

//   if (name && password && birthdayMonth && birthdayDay && color) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, password, birthdayMonth, birthdayDay, color }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };


   


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('#signup-btn')
//   .addEventListener('submit', signupFormHandler);
