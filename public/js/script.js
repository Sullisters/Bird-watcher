const birdSearchEl = document.querySelector('#search-field'); //JOIN INTO SEARCH FIELD @ HANDLEBARS
const searchBtn = document.querySelector('#apiBtn')

function gettingInput(event) {
    event.preventDefault();
    var birdSearch = birdSearchEl.value.trim();
    if (!birdSearch) {
        return;
    }
}


// var name = 'cheetah'

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/animals?name=' + birdSearch,
//     headers: { 'X-Api-Key': 'FY3mPWio8m9XNIUE3qUQtA==1cqhZ1GVfDAAKQ5W'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
//  ALTERNATIVE GIVEN BY THE API SITE
console.log("hello")

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my-cloud', 
    uploadPreset: 'preset1'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )

document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();
    myWidget.open();
  }, false);

  cloudinary.openUploadWidget({
      cloudName: "my-cloud", uploadPreset: "preset1" }, (error, result) => { });

  cloudinary.applyUploadWidget(document.getElementById('upload_widget'), 
{ api_key : "289214219512654", cloudName: "my-cloud", uploadSignature: generateSignature }, 
(error, result) => { });

// widget.open();

searchBtn.addEventListener('click', startSearch);

function startSearch(event) {
    console.log("search")
    event.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': 'FY3mPWio8m9XNIUE3qUQtA==1cqhZ1GVfDAAKQ5W',
            'X-API-Host':'https://api-ninjas.com/api/animals'
        }
    };
    console.log(birdSearchEl)
    const birdSearch = birdSearchEl.value.trim();
    fetch('https://api.api-ninjas.com/v1/animals?name=' + birdSearch, options)
    .then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (data) {
                    console.log(data);
                });
        }
    })
    .catch(function (error) {
        alert('unable to connect to the data' + error)
    })
}


  


