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

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
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

function validateDocumentWindow() {
    validateWindow = new BrowserWindow({
        width:400,
        height:330,
        title:'SMARTFILMS - Validación Cédulas',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    validateWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/validate.html'),
        protocol: 'file',
        slashes: true
    }));
}

const templateMenu = [
    {
        label: app.getName(),
        submenu:[
            {
                label:'validate',
                accelerator:'Ctrl+N',
                click() {
                    validateDocumentWindow();
                }
            }
        ]
    },
    {
        label:'Salir',
        click() {
            app.quit();
        }
    }
];


// Enviar datos a validar
ipcMain.on('user:validate', (e, userValidate) => {
    // Enviar a la ventana de validación
    // console.log(userValidate);
    validateWindow.webContents.send('user:validate', userValidate);
    validateDocumentWindow();
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