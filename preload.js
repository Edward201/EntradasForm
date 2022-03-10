const userMgr = require("./models/user_mgr");
const {contextBridge} = require("electron");

const getNames = () => {
    return userMgr.getNames();
}

contextBridge.exposeInMainWorld("api", {
    getNames: getNames
});