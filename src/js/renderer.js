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
        if(res[0].table == "users_upload"){
            window.api.createUser(res[0]);
        }
        document.getElementById('name').value = '';
        document.getElementById('document').value = '';
        var alert = document.getElementById('alert');
        alert.style="display:block;";
        setTimeout(() => {
           alert.style="display:none;"; 
        }, 2000);
    }else{
        window.api.registerUser(userValidate);
    }

});