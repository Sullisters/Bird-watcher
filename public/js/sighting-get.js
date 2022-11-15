// // TODO: add apiKey to .env file

// let apiKey = "AIzaSyB6GAa0r8e6gYLVggfPbQsuhDbygtnKaZg";
// const locationX = document.getElementById("getSighting");
        
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showLocation);
//        } else {
//         locationX.innerHTML = "Geolocation is not supported by this browser.";
//        }
// };
// getLocation();

// function showLocation(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;
//       var latlongvalue = position.coords.latitude + "," + position.coords.longitude;
//     const img_url=`https://maps.googleapis.com/maps/api/staticmap?center=${latlongvalue}&zoom=14&size=400x300&key=AIzaSyB6GAa0r8e6gYLVggfPbQsuhDbygtnKaZg` 
  
//   document.getElementById("mapholder").innerHTML =
//   "<img src ='"+img_url+"'>";
// }



 // This is Saving the found location via map URL to the database
// const button = document.getElementById('saveMap').addEventListener('submit', async event => {
//     event.preventDefault();
        
//         const sightingObj = {           
//             entry_description: document.querySelector('#sightingNotes').value,
//             map_url: document.querySelector('.map_url').value
//         }
//         console.log(sightingObj)
//      try {     
//        const response = await fetch('/api/sightings/', {
//          method: 'post',
//          body: JSON.stringify(sightingObj),
//          headers: {'Content-Type': 'application/json'}
//          });
//             location.reload()
//          } catch(err) {
//             res.status(400).json(err)
//          }
//         });
 