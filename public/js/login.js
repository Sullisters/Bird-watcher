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
  
// const signupForm = document.querySelector('#signup');
// signupForm.addEventListener('submit',e=>{
//     e.preventDefault();
//     console.log("PREVENTED DEFAULT")
  
//     const userObj = {
//       email:document.querySelector('#signupEmail').value,
//       name:document.querySelector('#signupName').value,
//       password:document.querySelector('#signupPassword').value
//     }
//     fetch('/api/users/', {
//       method: 'POST',
//       body: JSON.stringify(userObj),
//       headers: { 
//         'Content-Type': 'application/json' 
//       },
//     }).then(res=>{
//         if(res.ok){
//         location.reload();
//       } else {
//         alert('Failed to sign up.');
//       }
//     })
// })

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('#signup')
  //   .addEventListener('submit', signupFormHandler);
  