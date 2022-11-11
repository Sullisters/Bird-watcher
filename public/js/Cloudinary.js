// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
const cloudName = 'df4asanhm';
const uploadPreset = 'w7sz2h8r';

// const formData = new FormData()
// formData.append('file', base64Image)
// formData.append('upload_preset', 'w7sz2h8r')

// fetch(`https://api.cloudinary.com/v1_1/***YOUR_CLOUD_NAME***/image/upload`, {
//   method: 'POST',
//   body: formData,
// })

document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();
    myWidget.open();
  }, false);

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'df4asanhm', 
    uploadPreset: 'w7sz2h8r',
    // multiple: false,
    // folder: "user_images",
    // maxImageFileSize: 2000000,
    // maxImageWidth: 2000,
    // theme: "purple",
    // cropping: true,
    // showSkipCropButton: true,
  }, 
    (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
      }
    }
  )

//   cloudinary.openUploadWidget({
//       cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });

  cloudinary.applyUploadWidget(document.getElementById('upload_widget'), 
{ api_key : "289214219512654", cloudName: "df4asanhm", uploadPreset: 'w7sz2h8r'}, 
(error, result) => { });

widget.open();

var data = new FormData();
data.append('upload_preset', 'w7sz2h8r');
data.append('file', file);
data.append('cloud_name', 'df4asanhm');

const config = {
    method: "POST",
    body: data 
};

var imgurl = "https://api.cloudinary.com/v1_1/<cloud_name>/image/upload";

fetch(imgurl, config)
.then(responseData => {
          console.log(JSON.stringify(responseData, null, 4));
})


