const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        email:document.getElementById('signupEmail').value.trim(),
        name:document.getElementById("signUpUser").value.trim(),
        password:document.getElementById("signUpPassword").value,
    }
    fetch("/api/users/",{
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
        location.href= `/user/${data.id}`
    })
});