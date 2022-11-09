var birdSearchEl = document.querySelector ('.search-field') //JOIN INTO SEARCH FIELD @ HANDLEBARS

function gettingInput(event) {
    event.preventDefault();
    var birdSearch = birdSearchEl.value.trim();
    if (!birdSearch) {
        return;
    }
}


var name = 'cheetah'

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + birdSearch,
    headers: { 'X-Api-Key': 'FY3mPWio8m9XNIUE3qUQtA==1cqhZ1GVfDAAKQ5W'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
//  ALTERNATIVE GIVEN BY THE API SITE


function startSearch(birdSearch) {
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': 'FY3mPWio8m9XNIUE3qUQtA==1cqhZ1GVfDAAKQ5W',
            'X-API-Host':'https://api-ninjas.com/api/animals'
        }
    };

    fetch('https://api.api-ninjas.com/v1/animals?name=' + birdSearch, options)
    .then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (data) {
                    printingresult(data);
                });
        }
    })
    .catch(function (error) {
        alert('unable to connect to the data')
    })
}