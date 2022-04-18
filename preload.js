const userMgr = require("./models/user_mgr");
const {contextBridge, ipcRenderer} = require("electron");

const validateUser = (userValidate) => {
    return userMgr.validateUser(userValidate);
}

const registerUser = (data) => {
    ipcRenderer.send('registerNewUser', data);
}

const getUsers = () => {
    return userMgr.getUsers();
}

const createUser = (userData) => {
    userMgr.createNewUser(userData)
    if (!userData.id) {
        ipcRenderer.send('closeRegister');
        return alert('El usuario se ha guardado exitosamente');
    }
    return '';
}

ipcRenderer.on('registerUser', (e, data) => {
    document.getElementById('name').value = data.name;
    document.getElementById('document').value = data.document;
});

contextBridge.exposeInMainWorld("api", {
    validateUser: validateUser,
    registerUser: registerUser,
    createUser: createUser,
    getUsers: getUsers
});
