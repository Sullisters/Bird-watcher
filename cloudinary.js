<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">
</script>

cloudinary.setCloudName("my-cloud");

var widget = cloudinary.createUploadWidget({ 
    cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });
  widget.open();

  cloudinary.openUploadWidget({
    cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });
  
    cloudinary.applyUploadWidget(document.getElementById('opener'), 
    //<--THIS ELEMENT IS FOR THE BUTTON, NEEDS AN EVENT LISTENER TOO
  { cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });

  //IF WE END UP USING JQUERY FOR THIS APP, GO WITH THIS INSTEAD (SAME AS LINES 13-14)
  $('#opener2').cloudinary_upload_widget({ cloudName: "my-cloud-name", uploadPreset: "preset1" });

  //-----------------------------------------------//

  <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">
</script>
  
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my-cloud', 
    uploadPreset: 'preset1'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);

    <button id="upload_widget" class="cloudinary-button">Upload Image</button> //<-- PUT IN HANDLEBARS???

    cloudinary.openUploadWidget({
        cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });

    cloudinary.applyUploadWidget(document.getElementById('upload_widget'), 
  { api_key : "289214219512654", cloudName: "my-cloud", uploadSignature: generateSignature }, 
  (error, result) => { });

  widget.open();