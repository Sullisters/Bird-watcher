// require("dotenv").config()
// const express = require("express")
// const cloudinary = require("cloudinary").v2
// const app = express()
// const cloudName = "df4asanhm";
// const uploadPreset = "w7sz2h8r";

// const formData = new FormData();
// formData.append("cloud_name", "df4asanhm");
// formData.append("upload_preset", "w7sz2h8r");

// var myWidget = cloudinary.createUploadWidget(
//   {
//     cloudName: cloudName,
//     uploadPreset: "w7sz2h8r",
//     theme: "purple",
//     cropping: true,
//   },
//   (error, result) => {
//     if (!error && result && result.event === "success") {
//       console.log("Done! Here is the public ID: ", result.info.public_id);
//       document.getElementById("uploadedimage");
//       var publicId = result.info.public_id;
//       var imageUrl =
//         "https://res.cloudinary.com/df4asanhm/image/upload/" +
//         publicId +
//         ".jpg";
//       console.log(imageUrl);
//       fetch(`/api/birds/`,{
//         method:"PUT",
//         body:JSON.stringify(imageUrl),
//         headers: {
//           "Content-Type": "application/json"
//         },
        
//       })
//       // .setAttribute("src", result.info.secure_url);
//     }
//   }
// );
// // fetch(`https://api.cloudinary.com/v1_1/df4asanhm/image/upload`, {
// //   method: "POST",
// //   body: formData,
// // });

// document.getElementById("upload_widget").addEventListener(
//   "click",
//   function (event) {
//     event.preventDefault();
//     myWidget.open();
//   },
//   false
// );

// // cloudinary.openUploadWidget({
// //     cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });

// //   cloudinary.applyUploadWidget(document.getElementById('upload_widget'),
// // { api_key : "289214219512654", cloudName: "df4asanhm", uploadPreset: 'w7sz2h8r'},
// // (error, result) => { });

// // widget.open();

// // const config = {
// //     method: "POST",
// //     body: data
// // };

// const config = {
//     method: "POST",
//     body: formData 
// };

// // var imgurl = "https://api.cloudinary.com/v1_1/df4asanhm/image/upload";

// // fetch(imageUrl, config)
// // .then(responseData => {
// //           console.log(JSON.stringify(responseData, null, 4));
// // })

