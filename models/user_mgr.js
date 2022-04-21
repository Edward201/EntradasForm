var dbmgr = require("./dbconecct");
var db = dbmgr.db;

exports.validateUser = (userValidate) => {
    const sql = `SELECT * FROM Users WHERE document = '${userValidate.document}'`;
    let stmt = db.prepare(sql);
    let res = stmt.all();
    if (res.length < 1) {
        const sql = `SELECT * FROM users_upload WHERE document = '${userValidate.document}'`;
        stmt = db.prepare(sql);
        res = stmt.all();
        if (res.length > 0) {
            res[0].table = "users_upload";
        }
    }else{
        res[0].table = "users";
    }
    return res;
}

exports.createNewUser = (userData) => {
    const sql = `INSERT INTO users (name, 
                                    typeDocument, 
                                    document, 
                                    country, 
                                    email, 
                                    phone, 
                                    disability, 
                                    edad, 
                                    departamento, 
                                    municipio, 
                                    telefono_fijo, 
                                    sexo, 
                                    genero, 
                                    victima_conflicto, 
                                    nivel_educativo, 
                                    grupo_etnico, 
                                    estrato, 
                                    nombre_organizacion, 
                                    contacto_organizacion, 
                                    telefono_organizacion, 
                                    correo_organizacion, 
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
                                    emprendimiento_actividad_swim,
                                    tipo_beneficiario, 
                                    adult)
                                     VALUES ('${userData.name}', 
                                     '${userData.typeDocument}', 
                                     '${userData.document}', 
                                     '${userData.country}', 
                                     '${userData.email}', 
                                     '${userData.phone}', 
                                     '${userData.disability}', 
                                     '${userData.edad}', 
                                     '${userData.departamento}', 
                                     '${userData.municipio}', 
                                     '${userData.telefono_fijo}', 
                                     '${userData.sexo}', 
                                     '${userData.genero}', 
                                     '${userData.victima_conflicto}', 
                                     '${userData.nivel_educativo}', 
                                     '${userData.grupo_etnico}', 
                                     '${userData.estrato}', 
                                     '${userData.nombre_organizacion}', 
                                     '${userData.contacto_organizacion}', 
                                     '${userData.telefono_organizacion}', 
                                     '${userData.correo_organizacion}', 
                                     '${userData.fecha_nacimiento_swim}',
                                     '${userData.nivel_educativo_swim}',
                                     '${userData.grupo_etnico_swim}',
                                     '${userData.orientacion_sexual_swim}',
                                     '${userData.genero_swim}',
                                     '${userData.actividades_swim}',
                                     '${userData.cargo_emprendimiento_swim}',
                                     '${userData.emprendimiento_departamento_swim}',
                                     '${userData.emprendimiento_municipio_swim}',
                                     '${userData.emprendimiento_direccion_swim}',
                                     '${userData.emprendimiento_localidad_urbana_swim}',
                                     '${userData.emprendimiento_barrio_swim}',
                                     '${userData.emprendimiento_telefono_swim}',
                                     '${userData.emprendimiento_email}',
                                     '${userData.emprendimiento_camara_comercio_swim}',
                                     '${userData.emprendimiento_nit_swim}',
                                     '${userData.emprendimiento_nombre_swim}',
                                     '${userData.emprendimiento_operacion_swim}',
                                     '${userData.fecha_inicio_operaciones_swim}',
                                     '${userData.emprendimiento_tipo_organizacion_swim}',
                                     '${userData.emprendimiento_tipo_organizacion_otro_swim}',
                                     '${userData.emprendimiento_lugar_desarrollo_swim}',
                                     '${userData.emprendimiento_medio_comercializacion_swim}',
                                     '${userData.emprendimiento_numero_trabajadores_swim}',
                                     '${userData.emprendimiento_actividad_swim}',
                                     'Persona Natural', 
                                     1)`;
    let stmt = db.prepare(sql);
    let res = stmt.run();
}

exports.getUsers = () => {
    const sql = 'SELECT * FROM Users';
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
}