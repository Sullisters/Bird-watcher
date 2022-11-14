//This handles the Animals API search data
const birdSearchEl = document.querySelector('#search-field');
const searchBtn = document.querySelector('.api-search');

const refresh = document.getElementById('refreshApiBtn');
const container = document.querySelector('.refresh-output')

// console.log("hello")

// Function to grab the data from the API, map over it and return specific information
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
        console.log(data[0].taxonomy.scientific_name);
        const html = [data[0].characteristics].map(bird => {
            return `
            <div class="api-card">
                <hr>
                <h4>Common Name: ${bird.common_name}</h4>
                <h4>Diet: ${bird.diet}</h4>
                <h4>Color: ${bird.color}</h4>
                <h4>Habitat: ${bird.habitat}</h4>
                <h4>Weight: ${bird.weight}</h4>
                <h4>Location: ${bird.location}</h4>
                </div>
                `
            })
            document
            .querySelector("#apiDetails")
            .insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    //Adds event listener to watch for a click of this button and execute the function to search the API database
    searchBtn.addEventListener('submit', startSearch);


    function refreshApi(){
            document.getElementById("refreshApiBtn").reset();
    //    container.replaceChildren();
    }
    
    refresh.addEventListener("click", refreshApi)
    
    