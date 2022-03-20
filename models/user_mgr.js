var dbmgr = require("./dbconecct");
var db = dbmgr.db;

exports.validateUser = (userValidate) => {
    const sql = `SELECT * FROM users_upload WHERE document = ${userValidate.document}`;
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
}

exports.createNewUser = (userData) => {
    console.log(userData)
    const sql = `INSERT INTO users (name, typeDocument, document, country, email, phone, adult) VALUES ('${userData.name}', '${userData.typeDocument}', '${userData.document}', '${userData.country}', '${userData.email}', '${userData.phone}', 1)`;
    let stmt = db.prepare(sql);
    let res = stmt.run();
}