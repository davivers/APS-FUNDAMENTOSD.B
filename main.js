const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const ipc = ipcMain
require('./serverMongoDB')


function createWindow () {
  const mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 950,
    height: 700,
    resizable: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('./pages/index.html')
  
  //close
  ipc.on('closeApp', ()=>{
    console.log('close signal received')
    mainWindow.close()
  })

  ipc.on('minApp', ()=>{
    console.log("minimize")
    mainWindow.minimize()
  })

  ipc.on('submit', ()=> {
    
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})