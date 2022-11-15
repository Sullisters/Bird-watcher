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
                <dl class="row">
                    <hr>
                    <dt class="col-sm-3">Common Name:</dt> <dd class="col-sm-9"><p>${bird.common_name}</p></dd>
                    <dt class="col-sm-3">Number of Species:</dt> <dd class="col-sm-9"><p>${bird.number_of_species}</p></dd>
                    <dt class="col-sm-3">Diet:</dt> <dd class="col-sm-9"><p>${bird.diet}</p></dd>
                    <dt class="col-sm-3">Color:</dt> <dd class="col-sm-9"><p>${bird.color}</p></dd>
                    <dt class="col-sm-3">Weight:</dt> <dd class="col-sm-9"><p>${bird.weight}</p></dd>
                    <dt class="col-sm-3">Top Speed:</dt> <dd class="col-sm-9"><p>${bird.top_speed}</p></dd>
                    <dt class="col-sm-3">Lifespan:</dt> <dd class="col-sm-9"><p>${bird.lifespan}</p></dd>
                    <dt class="col-sm-3">Litter Size:</dt> <dd class="col-sm-9"><p>${bird.litter_size}</p></dd>
                    <dt class="col-sm-3">Habitat:</dt> <dd class="col-sm-9"><p>${bird.habitat}</p></dd>
                    <dt class="col-sm-3">Predators:</dt> <dd class="col-sm-9"><p>${bird.predators}</p></dd>
                    <dt class="col-sm-3">Prey:</dt> <dd class="col-sm-9"><p>${bird.prey}</p></dd>
                    <dt class="col-sm-3">Biggest Threat:</dt> <dd class="col-sm-9"><p>${bird.biggest_threat}</p></dd>
                    <dt class="col-sm-3">Location:</dt> <dd class="col-sm-9"><p>${bird.location}</p></dd>
                </dl>
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
            // document.getElementById("refreshApiBtn").reset();
       container.replaceChildren();
    }
    
    refresh.addEventListener("click", refreshApi)
    
    // <h6>Diet: ${bird.diet}</h6>
    //             <h6>Color: ${bird.color}</h6>
    //             <h6>Habitat: ${bird.habitat}</h6>
    //             <h6>Weight: ${bird.weight}</h6>
    //             <h6>Location: ${bird.location}</h6>