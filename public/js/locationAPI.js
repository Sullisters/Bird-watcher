// const apiKey = "AIzaSyB6GAa0r8e6gYLVggfPbQsuhDbygtnKaZg";
// const locationX = document.getElementById("get_location");

// function showLocation(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;
//       var latlongvalue = position.coords.latitude + "," + position.coords.longitude;
//     const img_url=`https://maps.googleapis.com/maps/api/staticmap?center=${latlongvalue}&zoom=14&size=400x300&key=${apiKey}` 
  
//   document.getElementById("mapholder").innerHTML =
//   "<img src ='"+img_url+"'>";
// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showLocation);
//        } else {
//         locationX.innerHTML = "Geolocation is not supported by this browser.";
//        }
// };
        
        
// locationX.addEventListener('click', getLocation());