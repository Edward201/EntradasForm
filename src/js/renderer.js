const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    var name = document.getElementById('name').value;
    name.replace(/\s+/g, " ");

    var documentNumber = document.getElementById('document').value;

    var userValidate = {
        name: name,
        document: documentNumber
    };

    let res = window.api.validateUser(userValidate);
    if (res.length > 0) {
        window.api.createUser(res[0]);
        alert('El usuario ya se encuentra registrado');
    }else{
        window.api.registerUser(userValidate);
    }
});