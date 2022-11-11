
const signupForm = document.querySelector("#signup-form");
const data = undefined;

signupForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("prevent default")

    const userObj = {
        name: document.querySelector("#signupName").value,
        email: document.querySelector("#signupEmail").value,
        password : document.querySelector("#signupPassword").value
    }

    console.log(JSON.stringify(userObj))

    fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type" : "application/json"
        }
        
    }).then(res=>{
        if(res.ok){
           location.assign('/login')
        } else {
            alert("trumpet sound")
        }
    
    // .then (res => {
    //     if (res.ok) {
    //         alert("Sign Up Successful")
    //            return res.json()
    //     } else {
    //         alert("Sign Up failed")
    //         location.reload();
    //     }
    // })
    // .then(data=>{
    //     location.href = `/users/${data.id}`
    })
})


// const signupForm = document.getElementById("submitNewUser");

// function newUser(event){
//     event.preventDefault();
//     console.log('PREVENTED DEFAULT!')
//     const userObj = {
//         email: document.getElementById('signupEmail').value.trim(),
//         name: document.getElementById("signupName").value.trim(),
//         password: document.getElementById("signupPassword").value,
//         confirmPassword: document.getElementById("confirmPassword").value
//     }
//     fetch("./api/users/", {
//         method:"POST",
//         body:JSON.stringify(userObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//            alert("Yay, you're a new user!")
//            return res.json()
//         } else {
//             alert("trumpet sound")
//             location.reload()
//         }
//     }).then(userData =>{
//         location.href= `/users/${userData.id}`
//     })
// };

// signupForm.addEventListener("click", newUser);