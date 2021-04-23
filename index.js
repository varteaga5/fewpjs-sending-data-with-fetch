// Add your code here
function submitData(name, email){
    const formData = {
        'name': name,
        'email': email
    };
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(obj => renderID(obj))
    .catch(renderError)
}

// appends ID to DOM
function renderID(obj){
    // displays id on the body of the DOM
    document.body.innerHTML = obj.id;
}
// appends error msg to DOM
function renderError(obj) {
    document.body.innerHTML = obj.message
}