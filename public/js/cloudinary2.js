const apiKey = `289214219512654`;
const cloudName = `df4asanhm`;

let pictureLink = "";

const newBird = document.querySelector('#birdInput');

console.log(window.location.href.split("/")[4])

newBird.addEventListener("submit", async event => {
    event.preventDefault();

    const birdObj = {
        name: document.querySelector('#birdName').value,
        bird_species: document.querySelector('#birdSpecies').value,
        bird_colors: document.querySelector('#birdColors').value,
        bird_size: document.querySelector('#birdSize').value,
        weight: document.querySelector('#birdWeight').value,
        bird_diet: document.querySelector('#birdDiet').value,
        migration: document.querySelector('#birdMigration').value,
        habitat: document.querySelector('#birdHabitat').value,
        location: document.querySelector('#birdLocation').value,
        activity: document.querySelector('#birdActivity').value,
        description: document.querySelector('#birdNotes').value,
        EventId: window.location.href.split("/")[4],
        bird_image: pictureLink 
        // add in a variable in here for the cloudinary link 
    }
    console.log(JSON.stringify(birdObj))
    const res = await fetch("/api/birds/", {
        method: "POST",
        body: JSON.stringify(birdObj),
        headers: {
            "Content-Type" : "application/json"
        }
    }) 
    if (res.ok) {
       console.log("yessss")
       location.reload();
    } else {
      console.log(res)
        alert("Try again!")
    }
})


// cloudinary put request
const myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName, 
    theme: "purple",
    cropping: true,
    uploadPreset: 'w7sz2h8r'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('WE PUT A BIRD ON IT', result.info.path); 
        pictureLink = result.info.path
        // const saveImageToDiv = fetch(body);
        // const letsDoThis = saveImageToDiv.json();
        // return letsDoThis
      }
});

// open cloudinary widget
document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);