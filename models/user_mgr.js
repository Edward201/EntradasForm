var dbmgr = require("./dbconecct");
var db = dbmgr.db;

exports.getNames = () => {
    const sql = "SELECT * from users";
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
}