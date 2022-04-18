const { app, BrowserWindow, Menu, ipcMain } = require('electron');

const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}


let mainWindow;
let validateWindow;
let listWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width:960,
        height:540,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, '../preload.js')
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        app.quit();
    });

});

function validateDocumentWindow(){
    validateWindow = new BrowserWindow({
        width:860,
        height:720,
        title:'SMARTFILMS - Validación Cédulas',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, '../preload.js')
        }
    })
    validateWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/validate.html'),
        protocol: 'file',
        slashes: true
    }));
}

function listUsersWindow(){
    listWindow = new BrowserWindow({
        width:860,
        height:720,
        title:'SMARTFILMS - Lista de Usuarios',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, '../preload.js')
        }
    })
    listWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/list.html'),
        protocol: 'file',
        slashes: true
    }));
}

const templateMenu = [
    {
        label: app.getName(),
    },
    {
        label:'Lista de usuarios',
        accelerator:'Ctrl+E',
        click() {
            listUsersWindow();
        }
    },
    {
        label:'Salir',
        click() {
            app.quit();
        }
    }
];

// Ipc Renderer Events
ipcMain.on('registerNewUser', (e, userValidate) => {
    // send to the Main Window
    validateDocumentWindow();
    validateWindow.webContents.send('registerUser', userValidate);
});

ipcMain.on('closeRegister', (e, ) => {
    validateWindow.close();
});

// Developer Tools in Development Environment
if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
      label: 'DevTools',
      submenu: [
        {
          label: 'Show/Hide Dev Tools',
          accelerator: process.platform == 'darwin' ? 'Comand+D' : 'Ctrl+D',
          click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
          }
        },
        {
          role: 'reload'
        }
      ]
    })
  }