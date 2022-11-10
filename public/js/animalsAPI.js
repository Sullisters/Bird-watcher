const birdSearchEl = document.querySelector('#search-field');
const searchBtn = document.querySelector('#apiBtn');

// searchBtn.addEventListener('click', startSearch);

console.log("hello")

function startSearch(event) {
    event.preventDefault();
    let searchTerm = birdSearchEl.value.trim()
    searchTerm = searchTerm.replace(" ", "%20")
    console.log(searchTerm)
    fetch(`/api/birds/bird-info/${searchTerm}`, {
        method: "GET"
    }).then(data => data.json()).then(response => {
        console.log(response)
    })
}

searchBtn.addEventListener('click', startSearch);