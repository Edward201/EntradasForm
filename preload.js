const userMgr = require("./models/user_mgr");
const {contextBridge, ipcRenderer} = require("electron");

const validateUser = (userValidate) => {
    return userMgr.validateUser(userValidate);
}

const registerUser = (data) => {
    ipcRenderer.send('registerNewUser', data);
}

const createUser = (userData) => {
    return userMgr.createNewUser(userData);
}

ipcRenderer.on('registerUser', (e, data) => {
    console.log(data)
    document.getElementById('name').value = data.name;
    document.getElementById('document').value = data.document;
});

contextBridge.exposeInMainWorld("api", {
    validateUser: validateUser,
    registerUser: registerUser,
    createUser: createUser
});
