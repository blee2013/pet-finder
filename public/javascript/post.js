// const handleImageUpload = event =>{
//     const files = event.target.files
//     const formData = new FormData()
//     formData.append('myFile', files[0])

//     if(!myImage.type.match(imageType)){
//         alert('Sorry, only images are allowed')
//         return;
//     }
//     if(myImage.size > (100*1024)){
//         alert('Sorry, the max image size is 100KB')
//         return;
//     }

//     fetch('/saveImage', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.path)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }


// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       // uploads is the upload_folder_name
//       cb(null, file.fieldname + ".png")
//     }
//   })
  
//   // define size of image for uploading
//   const maxSize = 1 * 1000 * 1000;
  
//   let upload = multer({
//     storage: storage,
//     limits: {filesize: maxSize},
//     fileFilter: function(req, file, cb) {
  
//       // set filetypes
//       let filetypes = /jpg|jpeg|png/;
//       let mimetype = filetypes.test(file.mimetype);
  
//       let extname = filetypes.test(path.extname(
//         file.originalname).toLowerCase());
  
//         if(mimetype && extname) {
//           return cb(null, true);
//         }
//         cb("Error: File upload only supports the " + "following filetypes - " + filetypes)
  
//     }
//   })
//   // mypic is name of file attribute
//   .single("mypic");
  
//   app.get("/", function (req, res){
//     res.render("post");
//   })
  
//   app.post("/uploadProfilePicture", function (req, res, next){
  
//     // error middleware for multer file upload error
//     upload(req, res, function(err){
//       if (err){
//         res.send(err)
//       } else {
//         res.send("Success, image uploaded!")
//       }
//     })
//   })

async function newFormHandler (event){
    console.log('post button clicked')
    event.preventDefault();

    const name = document.querySelector('input[name="petName"]').value.trim();
    const breed = document.querySelector('input[name="petBreed"]').value.trim();
    const gender = document.querySelector('input[name="petGender"]').value.trim();
    const age = document.querySelector('input[name="petAge"]').value.trim();
    const description = document.querySelector('textarea[name="petDescription"]').value.trim();
    console.log(name, breed, gender, age, description);

    if(name && breed && gender && age && description) {
        const response = await fetch(`/api/posts` , {
            method: 'POST',
            body: JSON.stringify({
                name,
                breed,
                gender,
                age,
                description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            document.location.replace('/animals');
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('.petSearch-form').addEventListener('submit', newFormHandler);

