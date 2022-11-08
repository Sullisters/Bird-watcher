var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dp90lp1e5', 
  uploadPreset: 'bird-brain'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
