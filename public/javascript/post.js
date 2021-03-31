

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

