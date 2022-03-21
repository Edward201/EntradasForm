var dbmgr = require("./dbconecct");
var db = dbmgr.db;

exports.validateUser = (userValidate) => {
    const sql = `SELECT * FROM users WHERE document = ${userValidate.document}`;
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
    const sql = `INSERT INTO users (name, typeDocument, document, country, email, phone, disability, adult) VALUES ('${userData.name}', '${userData.typeDocument}', '${userData.document}', '${userData.country}', '${userData.email}', '${userData.phone}', '${userData.disability}', 1)`;
    let stmt = db.prepare(sql);
    let res = stmt.run();
}