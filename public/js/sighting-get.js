// // // TODO: add apiKey to .env file

// const apiKey = "AIzaSyB6GAa0r8e6gYLVggfPbQsuhDbygtnKaZg";
// const locationX = document.getElementById("getSighting");
        
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showLocation);
//        } else {
//         locationX.innerHTML = "Geolocation is not supported by this browser.";
//        }
// };

// // This section is getting location from browser and inserting it (via innerHTML) into a map on our page
// function showLocation(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;
//       var latlongvalue = position.coords.latitude + "," + position.coords.longitude;
//     const img_url=`https://maps.googleapis.com/maps/api/staticmap?center=${latlongvalue}&zoom=14&size=400x300&key=${apiKey}` 
  
//   document.getElementById("mapholder").innerHTML =
//   "<img src ='"+img_url+"'>";
// }

// locationX.addEventListener('click', getLocation());
 