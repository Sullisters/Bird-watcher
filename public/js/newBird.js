const newBird = document.querySelector('#birdInput');
// {{!-- TODO: add new model values(habitat, location, weight--double check model) into the bird info submit form, 
//     as well as the newBird.js file in the public folder --}}
newBird.addEventListener("submit", async event => {
    event.preventDefault();

    const birdObj = {
        birdPic: document.querySelector('#birdCardImage').value,
        name: document.querySelector('#birdSpecies').value,
        species: document.querySelector('#birdName').value,
        color: document.querySelector('#birdColors').value,
        diet: document.querySelector('#birdDiet').value,
        migration: document.querySelector('#birdMigration').value,
        notes: document.querySelector('#birdNotes').value,
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
    } else {
        alert("Try again!")
    }
})