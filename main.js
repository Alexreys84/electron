

const { app, BrowserWindow, nativeTheme, Menu, shell, ipcMain } = require('electron')

const path = require('node:path')

// Janela Principal
const createWindow = () => {
  //nativeTheme.themeSource='dark'
  const win = new BrowserWindow({
    width: 800, //Largura da janela
    height: 600, // Altura da janela
    icon: './src/public/img/pc.png',
    //resizable: false, // evitar o redimensinamento
    //titleBarStyle:'hidden', // esconde a barra de menu barra de titulo
    //autoHideMenuBar:true // esconde somente o menu
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // iniciar a janela com o menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')
}

// janela sobre
const aboutWindow = () => {
  //nativeTheme.themeSource='dark'
  const about = new BrowserWindow({
    width: 360, //Largura da janela
    height: 220, // Altura da janela
    icon: './src/public/img/pc.png',
    resizable: false, // evitar o redimensinamento
    autoHideMenuBar: 'hidden' // esconde a barra de menu barra de titulo

  })

  about.loadFile('./src/views/sobre.html')
}



// Executar de forma assíncrona a aplicação.
app.whenReady().then(() => {
  createWindow()
})

// criando um template do menu personalizado
const template = [
  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        click: () => app.quit(),
        accelerator: 'Alt+f4'
      },
    ]

  },
  {

    label: 'exibir',
    submenu: [{
      label: 'recarregar',
      role: 'reload'
    },
    {
      label: 'ferramentas',
      role: 'toggledevTools'
    },
    {
      type: 'separator'
    },
    {
      label: 'Aplicar zoom',
      role: 'zoomIn'
    },
    {
      label: 'reduzir zoom',
      role: 'zoomOut'
    },
    {
      label: 'Restaurar o zoom padrão',
      role: 'resetZoom'
    }
    ]

  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'docs',
        accelerator: 'Alt+f1',
        click: () => shell.openExternal('https://www.electronjs.org/docs/latest/'),
      },
      {
        type: 'separator',
      },
      {
        label: 'Sobre',

        click: () => aboutWindow()
      }
    ]
  }
]

// Processos 
console.log("Processo principal")
// 1)comando q so funciona no node
console.log(`Electron: ${process.versions.electron}`)
// 2) recebimento de uma msg do renderizador 
ipcMain.on('send-message',(event,message) => {
  console.log(`processo principal recebeu uma menssagem: $(message)`)
})
//3) Recebimento do renderer de uma ação a ser executado
ipcMain.on('open-about',()=>{
  aboutWindow()
  })