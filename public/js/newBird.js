const newBird = document.querySelector('#birdInput');

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
        alert("Try again!")
    }
})