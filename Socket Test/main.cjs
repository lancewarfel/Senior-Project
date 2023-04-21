console.log(`Electron code starts here`)

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 370,
    height: 620,
    resizable: false,
    backgroundColor: "#2E3440"
  });

  //win.loadFile('index.html');
  win.loadURL('http://localhost:3001')
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
