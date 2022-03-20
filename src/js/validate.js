
const form = document.getElementById('formUsers');
form.addEventListener('submit', e => {
    e.preventDefault();

    var name = document.getElementById('name').value;
    name.replace(/\s+/g, " ");

    var documentNumber = document.getElementById('document').value;
    var typeDocument = document.getElementById('typeDocument').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var userData = {
        name: name,
        document: documentNumber,
        typeDocument: typeDocument,
        country: country,
        email: email,
        phone: phone
    };

    window.api.createUser(userData);

});