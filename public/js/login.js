const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("PREVENTED DEFAULT")
  
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/events')
      } else {
        alert('Incorrect Email or Password');
      }
    }
  };
  

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  

  