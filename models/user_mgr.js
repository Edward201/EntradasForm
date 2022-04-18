var dbmgr = require("./dbconecct");
var db = dbmgr.db;

exports.validateUser = (userValidate) => {
    const sql = `SELECT * FROM Users WHERE document = ${userValidate.document}`;
    let stmt = db.prepare(sql);
    let res = stmt.all();
    if (res.length < 1) {
        const sql = `SELECT * FROM users_upload WHERE document = ${userValidate.document}`;
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