const newBird = document.querySelector('#birdInput');

newBird.addEventListener("submit", async event => {
    event.preventDefault();

    const birdObj = {
        birdPic: document.querySelector('#birdCardImage').value,
        name: document.querySelector('#birdName').value,
        species: document.querySelector('#birdName').value,
        color: document.querySelector('#birdName').value,
        diet: document.querySelector('#birdName').value,
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