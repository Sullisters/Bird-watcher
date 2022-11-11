cloudinary.api.create_upload_preset({
    name: 'demo_preset',
    folder: 'main',
    allowed_formats: 'jpg, png'
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));