// const apiKey = `289214219512654`;
// const cloudName = `df4asanhm`;

// // cloudinary put request
// const myWidget = cloudinary.createUploadWidget({
//     cloudName: cloudName, 
//     uploadPreset: 'w7sz2h8r'}, (error, result) => { 
//       if (!error && result && result.event === "success") { 
//         console.log('WE PUT A BIRD ON IT', result.info.path); 
//         const body = {event_image: result.info.path}
//         fetch(`/api/events/`,{
//             method:"PUT",
//             body:JSON.stringify(body),
//             headers: {
//               "Content-Type": "application/json"
//             },
            
//         })
//       }
// });

// // open cloudinary widget
// document.querySelector("#upload_widget").addEventListener("click", function(){
//       myWidget.open();
//     }, false);