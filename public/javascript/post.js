const handleImageUpload = event =>{
    const files = event.target.files
    const formData = new FormData()
    formData.append('myFile', files[0])

    if(!myImage.type.match(imageType)){
        alert('Sorry, only images are allowed')
        return;
    }
    if(myImage.size > (100*1024)){
        alert('Sorry, the max image size is 100KB')
        return;
    }

    fetch('/saveImage', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.path)
    })
    .catch(error => {
        console.log(error)
    })
}

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

document.querySelector('#fileUpload').addEventListener('change', event =>{
    handleImageUpload(event)})