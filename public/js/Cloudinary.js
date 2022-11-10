document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();
    myWidget.open();
  }, false);

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my-cloud', 
    uploadPreset: 'preset1'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )

//   cloudinary.openUploadWidget({
//       cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });

  cloudinary.applyUploadWidget(document.getElementById('upload_widget'), 
{ api_key : "289214219512654", cloudName: "my-cloud", uploadSignature: generateSignature }, 
(error, result) => { });

widget.open();
