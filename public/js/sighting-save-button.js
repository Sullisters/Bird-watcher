//  // Thisis Saving the found location via map URL to the database
       
//  const button = document.getElementById('saveMap').addEventListener('submit', async _ => {
//      try {     
//        const response = await fetch('/api/sighting/', {
//          method: 'post',
//          body: JSON.stringify({entry_location, entry_description, map_url}),
//          headers: {'Content-Type': 'application/json'}
//          });
//             location.reload()
//          } catch(err) {
//             res.status(400).json(err)
//          }
//         });