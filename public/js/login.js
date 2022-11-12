const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit',e => {
    e.preventDefault();
    console.log('prevented default')
    const userObj = {
        email:document.querySelector('#loginEmail').value,
        password:document.querySelector('#loginPassword').value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{ 
            'Content-Type': 'application/json' 
        }
    }).then(res=>{
        if(res.ok){
            console.log("youre logged in")
            location.assign('/events')
            location.reload()
        } else {
            alert('incorrect login')
        }
        return res.json()
    }).then(data=>{
        console.log(data);
    })
})

// const loginFormHandler = async (event) => {
//     event.preventDefault();
//     console.log("PREVENTED DEFAULT")
  
//     const email = document.querySelector('#loginEmail').value.trim();
//     const password = document.querySelector('#loginPassword').value.trim();
  
//     if (email && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/events')
//       } else {
//         alert('Incorrect Email or Password');
//       }
//     }
//   };
  

//   document
//     .querySelector('.login-form')
//     .addEventListener('click', loginFormHandler);
  

  