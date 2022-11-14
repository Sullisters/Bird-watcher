
       
//  const button = document.getElementById('saveMap').addEventListener('submit', async event => {
//     event.preventDefault();
        
//         const sightingObj = {           
//             entry_description: document.querySelector('#sightingNotes').value,
//             map_url: document.querySelector('.map_url').value
//         }
//         console.log(sightingObj)
//      try {     
//        const response = await fetch('/api/sightings/', {
//          method: 'post',
//          body: JSON.stringify(sightingObj),
//          headers: {'Content-Type': 'application/json'}
//          });
//             location.reload()
//          } catch(err) {
//             res.status(400).json(err)
//          }
//         });
//  // This is Saving the found location via map URL to the database