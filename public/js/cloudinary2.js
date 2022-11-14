// const apiKey = `289214219512654`;
// const cloudName = `df4asanhm`;

// // cloudinary put request
// var myWidget = cloudinary.createUploadWidget({
//     cloudName: cloudName, 
//     uploadPreset: 's72xl1zy'}, (error, result) => { 
//       if (!error && result && result.event === "success") { 
//         console.log('Done! Here is the image info: ', result.info.path); 
//         const body = {profile_pic: result.info.path}
//         fetch(`/api/users/profile`,{
//             method:"PUT",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body:JSON.stringify(body),
//         })
//       }
// });

// // open cloudinary widget
// document.getElementById("upload_widget").addEventListener("click", function(){
//       myWidget.open();
//     }, false);