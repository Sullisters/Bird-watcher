//This handles the Animals API search data
const birdSearchEl = document.querySelector('#search-field');
const searchBtn = document.querySelector('#apiBtn');

console.log("hello")

function startSearch(event) {
    event.preventDefault();
    let searchTerm = birdSearchEl.value.trim()
    searchTerm = searchTerm.replace(" ", "%20")
    console.log(searchTerm)
    fetch(`/api/birds/bird-info/${searchTerm}`, {
        method: "GET"
    })
    .then(data => {
        if (!data.ok) {
            throw error("Error");
        }
        return data.json();
    })
    .then(data => {
        console.log(data[0].characteristics);
        const html = [data[0].characteristics].map(bird => {
            return `
            <div>
                <p>Color: ${bird.color}</p>
                <p>Common Name: ${bird.common_name}</p>
                <p>Diet: ${bird.diet}</p>
                <p>Habitat: ${bird.habitat}</p>
                <p>Location: ${bird.location}</p>
            </div>
            `
        })
        // console.log(html)
        document
            .querySelector("#apiDetails")
            .insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    })
}

//Adds event listener to watch for a click of this button and execute the function to search the API database
searchBtn.addEventListener('click', startSearch);

