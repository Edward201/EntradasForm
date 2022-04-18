
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
    var disability = document.getElementById('disability').value;
    var edad = document.getElementById('edad').value;
    var departamento = document.getElementById('departamento').value;
    var municipio = document.getElementById('municipio').value;
    var telefono_fijo = document.getElementById('telefono_fijo').value;
    var sexo = document.getElementById('sexo').value;
    var genero = document.getElementById('genero').value;
    var victima_conflicto = document.getElementById('victima_conflicto').value;
    var nivel_educativo = document.getElementById('nivel_educativo').value;
    var grupo_etnico = document.getElementById('grupo_etnico').value;
    var estrato = document.getElementById('estrato').value;
    var nombre_organizacion = document.getElementById('nombre_organizacion').value;
    var contacto_organizacion = document.getElementById('contacto_organizacion').value;
    var telefono_organizacion = document.getElementById('telefono_organizacion').value;
    var correo_organizacion = document.getElementById('correo_organizacion').value;

    var userData = {
        name: name,
        document: documentNumber,
        typeDocument: typeDocument,
        country: country,
        email: email,
        phone: phone,
        disability: disability,
        edad: edad,
        departamento: departamento,
        municipio: municipio,
        telefono_fijo: telefono_fijo,
        sexo: sexo,
        genero: genero,
        victima_conflicto: victima_conflicto,
        nivel_educativo: nivel_educativo,
        grupo_etnico: grupo_etnico,
        estrato: estrato,
        nombre_organizacion: nombre_organizacion,
        contacto_organizacion: contacto_organizacion,
        telefono_organizacion: telefono_organizacion,
        correo_organizacion: correo_organizacion
    };

    window.api.createUser(userData);

});

document.getElementById("showMintic").addEventListener("click", function( event ) {
    var minticFields = document.getElementById('minticFields');
    minticFields.style="visibility: visible; height: 100%;";
    document.getElementById("showMintic").style="display:none;"
}, false);