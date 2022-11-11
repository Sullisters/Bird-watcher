const signupForm = document.getElementById("submitNewUser");

function newUser(event){
    event.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        email: document.getElementById('signupEmail').value.trim(),
        name: document.getElementById("signupName").value.trim(),
        password: document.getElementById("signupPassword").value,
        confirmPassword: document.getElementById("confirmPassword").value
    }
    fetch("/api/user/", {
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           alert("Yay, you're a new user!")
           return res.json()
        } else {
            alert("trumpet sound")
            location.reload()
        }
    }).then(data =>{
        location.href= `/users/${userData.id}`
    })
};

signupForm.addEventListener("click", newUser);