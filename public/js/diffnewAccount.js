// const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const newName = document.getElementById("signupName").value.trim();
//     const newEmail = document.getElementById("signupEmail").value.trim();
//     const newPassword = document.getElementById("signupPassword").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;
  
//     if (newName && newEmail && newPassword) {
//       if (newPassword === confirmPassword) {
//         const response = await fetch("/api/user", {
//           method: "POST",
//           body: JSON.stringify({
//             name: newName,
//             email: newEmail,
//             password: newPassword,
//           }),
//           headers: { "Content-Type": "application/json" },
//         });
//         if (response.ok) {
//           console.log("response ok")
//           location.href = "/events";
//         } else {
//           alert("Failed to sign up.");
//         }
//       } else {
//         alert("Passwords did not match")
//       }
//     } else {
//       alert("Input all fields")
//     }
//   };
  
//   document
//     .getElementById("signup-form")
//     .addEventListener("submit", signupFormHandler);