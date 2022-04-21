
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
    var fecha_nacimiento_swim = document.getElementById('fecha_nacimiento_swim').value;
    var nivel_educativo_swim = document.getElementById('nivel_educativo_swim').value;
    var grupo_etnico_swim = document.getElementById('grupo_etnico_swim').value;
    var orientacion_sexual_swim = document.getElementById('orientacion_sexual_swim').value;
    var genero_swim = document.getElementById('genero_swim').value;
    var actividades_swim = document.getElementById('actividades_swim').value;
    var cargo_emprendimiento_swim = document.getElementById('cargo_emprendimiento_swim').value;
    var emprendimiento_departamento_swim = document.getElementById('emprendimiento_departamento_swim').value;
    var emprendimiento_municipio_swim = document.getElementById('emprendimiento_municipio_swim').value;
    var emprendimiento_direccion_swim = document.getElementById('emprendimiento_direccion_swim').value;
    var emprendimiento_localidad_urbana_swim = document.getElementById('emprendimiento_localidad_urbana_swim').value;
    var emprendimiento_barrio_swim = document.getElementById('emprendimiento_barrio_swim').value;
    var emprendimiento_telefono_swim = document.getElementById('emprendimiento_telefono_swim').value;
    var emprendimiento_email = document.getElementById('emprendimiento_email').value;
    var emprendimiento_camara_comercio_swim = document.getElementById('emprendimiento_camara_comercio_swim').value;
    var emprendimiento_nit_swim = document.getElementById('emprendimiento_nit_swim').value;
    var emprendimiento_nombre_swim = document.getElementById('emprendimiento_nombre_swim').value;
    var emprendimiento_operacion_swim = document.getElementById('emprendimiento_operacion_swim').value;
    var fecha_inicio_operaciones_swim = document.getElementById('fecha_inicio_operaciones_swim').value;
    var emprendimiento_tipo_organizacion_swim = document.getElementById('emprendimiento_tipo_organizacion_swim').value;
    var emprendimiento_tipo_organizacion_otro_swim = document.getElementById('emprendimiento_tipo_organizacion_otro_swim').value;
    var emprendimiento_lugar_desarrollo_swim = document.getElementById('emprendimiento_lugar_desarrollo_swim').value;
    var emprendimiento_medio_comercializacion_swim = document.getElementById('emprendimiento_medio_comercializacion_swim').value;
    var emprendimiento_numero_trabajadores_swim = document.getElementById('emprendimiento_numero_trabajadores_swim').value;
    var emprendimiento_actividad_swim = document.getElementById('emprendimiento_actividad_swim').value;

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
        correo_organizacion: correo_organizacion,
        fecha_nacimiento_swim,
        nivel_educativo_swim,
        grupo_etnico_swim,
        orientacion_sexual_swim,
        genero_swim,
        actividades_swim,
        cargo_emprendimiento_swim,
        emprendimiento_departamento_swim,
        emprendimiento_municipio_swim,
        emprendimiento_direccion_swim,
        emprendimiento_localidad_urbana_swim,
        emprendimiento_barrio_swim,
        emprendimiento_telefono_swim,
        emprendimiento_email,
        emprendimiento_camara_comercio_swim,
        emprendimiento_nit_swim,
        emprendimiento_nombre_swim,
        emprendimiento_operacion_swim,
        fecha_inicio_operaciones_swim,
        emprendimiento_tipo_organizacion_swim,
        emprendimiento_tipo_organizacion_otro_swim,
        emprendimiento_lugar_desarrollo_swim,
        emprendimiento_medio_comercializacion_swim,
        emprendimiento_numero_trabajadores_swim,
        emprendimiento_actividad_swim
    };

    window.api.createUser(userData);

});

document.getElementById("showMintic").addEventListener("click", function( event ) {
    var minticFields = document.getElementById('minticFields');
    minticFields.style="visibility: visible; height: 100%;";
    document.getElementById("showMintic").style="visibility: hidden;"
    document.getElementById("hideMintic").style="visibility: visible;"
}, false);

document.getElementById("hideMintic").addEventListener("click", function( event ) {
    var minticFields = document.getElementById('minticFields');
    minticFields.style="visibility: hidden; height: 0px;";
    document.getElementById("hideMintic").style="visibility: hidden;"
    document.getElementById("showMintic").style="visibility: visible;"
}, false);

document.getElementById("showSwim").addEventListener("click", function( event ) {
    var swimFields = document.getElementById('swimFields');
    swimFields.style="visibility: visible; height: 100%;";
    document.getElementById("showSwim").style="visibility: hidden;"
    document.getElementById("hideSwim").style="visibility: visible;"
}, false);

document.getElementById("hideSwim").addEventListener("click", function( event ) {
    var swimFields = document.getElementById('swimFields');
    swimFields.style="visibility: hidden; height: 0px;";
    document.getElementById("hideSwim").style="visibility: hidden;"
    document.getElementById("showSwim").style="visibility: visible;"
}, false);